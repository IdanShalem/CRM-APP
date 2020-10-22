const   express     = require('express'),
        app         = express(),
        port        = process.env.PORT || 3001,
        api         = require('./server/routes/api')
        Sequelize    = require('sequelize'),
        sequelize = new Sequelize('mysql://root:@localhost/crm_app')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use('/', api)

app.listen(port, () => console.log('server is up'))