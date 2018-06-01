const axios = require('axios')

module.exports = {
    getAll: ( req,res ) => {
        const db = req.app.get('db')
        db.getAllHouses().then(houses => {
            res.status(200).send(houses)
        })
    }
}