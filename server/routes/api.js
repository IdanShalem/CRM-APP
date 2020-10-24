const   express     = require('express'),
        router      = express.Router(),
        Sequelize   = require('sequelize'),
        sequelize   = new Sequelize('mysql://root:@localhost/crm_app'),
        dataBaseService  = require('../service/dataBaseService')



router.get('/clients' , async function(req, res) {
    const allClients = await dataBaseService().getAllClients()
    res.send(allClients) 
})

router.get('/topEmployess', async function(req, res) {
    const topEmployees = await dataBaseService().getTopEmployees()
    res.send(topEmployees) 
})

router.get('/salesByCountry', async function(req, res) {
    const countries = await dataBaseService().getSalesByCountry()
    res.send(countries) 
})

router.get('/salesByDay/:month', async function (req, res) {
    const { month } = req.params
    const salseByDay = await dataBaseService().getSalseByDay(month)
    res.send(salseByDay)
})

router.put('/client', async function (req, res) {
    
    const { clientName, property, value } = req.body
    const updateClient = await dataBaseService().updateClient(clientName, property, value)
    res.send(updateClient)
})

router.post('/client', async function(req, res) {
    const { client } = req.body
    const clientId = await dataBaseService().addClient(client)
    res.send(clientId) 
})

module.exports = router