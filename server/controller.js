const axios = require('axios')

module.exports = {
    getAll: ( req,res ) => {
        const db = req.app.get('db')
        db.getAllHouses().then(houses => {
            res.status(200).send(houses)
        })
    },
    postHouse: ( req,res ) => {
        const db = req.app.get('db')
        const {propertyname, address, city, state, zip} = req.body
        db.postOneHouse([propertyname, address, city, state, zip]).then(() => {
            res.status(200).send()
        })
    }
}