const conn = require('../database/connection')
module.exports ={
    async index(req,res){
        const id_ong = req.headers.authorization;
        const incidents = await conn('incidents')
        .where('id_ong', id_ong)
        .select('*');
        return res.json(incidents);
    }
}