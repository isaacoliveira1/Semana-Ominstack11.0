const conn = require('../database/connection');

module.exports = {
    async index (req,res){
        const { page = 1} = req.query;
        const [count] = await conn('incidents')
        .count();

        console.log(count);
        const incidents = await conn('incidents')
        .join('ongs', 'ongs.id' , '=' , 'incidents.id_ong')
        .limit(5)
        .offset((page - 1)*5)
        .select(['incidents.*', 
        'ongs.name' , 
        'ongs.email', 
        'ongs.whatsapp' , 
        'ongs.city' , 
        'ongs.uf']);

        res.header('X-Total-Count', count['count(*)'])
        return res.json(incidents);
    },
    async create(req,res){
        const { title, description, value } = req.body;
        const id_ong = req.headers.authorization;
        const [id] = await conn('incidents').insert({
            title,
            description,
            value,
            id_ong
        })
        return res.json({id});
    },
    async delete(req,res){
        const {id} = req.params;
        const ong_id = req.headers.authorization;
        
        const incident = await conn('incidents')
        .where('id',id)
        .select('id_ong')
        .first();
        if (incident.id_ong != ong_id){
            return res.status(401).json({error: "Operation not permitted."});
        }
        await conn('incidents')
        .where('id', id)
        .delete();
        return res.status(204).send();
    }

};