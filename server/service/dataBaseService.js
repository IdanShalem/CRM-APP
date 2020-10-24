const dataBaseService = function() {

    const   Sequelize   = require('sequelize'),
            sequelize   = new Sequelize('mysql://root:@localhost/crm_app')

    const getAllClients = async function() {
        const allClients = await sequelize
            .query(`SELECT c.id, 
                c.name, 
                c.email, 
                c.first_contact as firstContact, 
                et.type as emailType, 
                c.sold, 
                o.name as owner, 
                coun.name as country
                FROM client AS c, country as coun, owner as o, email_type as et
                WHERE c.owner = o.id
                AND c.country = coun.id
                AND c.email_type = et.id
                ORDER BY c.first_contact`
            )
        return allClients[0]
    }

    const getTopEmployees = async function() {
        const topEmplyees = await sequelize
            .query(`SELECT o.id, o.name, COUNT(*) as sales
                FROM client as c, owner as o
                WHERE o.id = c.owner
                AND c.sold = 1
                GROUP BY o.name
                ORDER BY sales DESC
                LIMIT 3`
            )
        return topEmplyees[0]
    }

    const getSalesByCountry = async function() {
        const countries = await sequelize
            .query(`SELECT cou.name, COUNT(*) as sales
                FROM client as c, country as cou
                WHERE c.country = cou.id
                AND c.sold = 1
                GROUP BY cou.name`
            )
        return countries[0]
    }

    const getSalseByDay = async function (month) {
        const salseByDay = await sequelize
            .query(`
                SELECT DAY(first_contact) AS day , COUNT(id) AS sales
                FROM client
                where MONTH(first_contact)="${month}" AND DAY(first_contact) BETWEEN "1" AND  "30"
                GROUP BY DAY(first_contact)
            `)
        return salseByDay[0]
    }

    const updateClient = async (clientName, property, value) => {
        if (property === 'email_type' || property === 'owner' || property === 'country') {
            const condition = property === 'email_type' ? 'type' : 'name';
            await sequelize.query(`
            UPDATE client
            SET ${property} = (SELECT id
                               FROM ${property}
                                WHERE ${condition} = '${value}')
            WHERE name = '${clientName}'
            `)
        } else {
            property === 'sold' 
            ?   await sequelize.query(`
                    UPDATE client
                    SET ${property} = ${value}
                    WHERE name = '${clientName}'
                `)
            :   await sequelize.query(`
                UPDATE client
                SET ${property} = '${value}'
                WHERE name = '${clientName}'
            `)
        }
    }

    const addOwner = async function(owner) {
        let ownerId
        const isOwnerExist = await sequelize
            .query(`SELECT id FROM owner WHERE name = '${owner}'`)
        if(isOwnerExist[0].length === 0) {
            const res = await sequelize
                .query(`INSERT INTO owner VALUES(null, '${owner}')`)
                
            ownerId = res[0]
        } else {
            ownerId = isOwnerExist[0][0].id
        } 
        return ownerId
    }

    const addEmailType = async function(type) {
        let emailId
        const isEmailExist = await sequelize
            .query(`SELECT id FROM email_type WHERE type = '${type}'`)
        if(isEmailExist[0].length === 0) {
            const res = await sequelize
                .query(`INSERT INTO email_type VALUES(null, '${type}')`)
                
            emailId = res[0]
        } else {
            emailId = isEmailExist[0][0].id
        } 
        return emailId
    }

    const addCountry = async function(country) {
        let countryId
        const isCountryExist = await sequelize
            .query(`SELECT id FROM country WHERE name = '${country}'`)
        if(isCountryExist[0].length === 0) {
            const res = await sequelize
                .query(`INSERT INTO country VALUES(null, '${country}')`)
                
            countryId = res[0]
        } else {
            countryId = isCountryExist[0][0].id
        } 
        return countryId
    }

    const addClient = async function(client){
        let clientId
        const ownerId = await addOwner(client.owner)
        const emailTypeId = await addEmailType(client.emailType)
        const countryId = await addCountry(client.country)
        const isClientExist = await sequelize
            .query(`SELECT id FROM client WHERE id='${client._id}'`)

        if(isClientExist[0].length === 0) {
            clientId = await sequelize
                .query(`INSERT INTO client
                    VALUES('${client.id}',
                        '${client.name}',
                        '${client.email}',
                        '${client.firstContact.replace('T', ' ').replace('Z', '')}',
                        ${emailTypeId},
                        ${client.sold},
                        ${ownerId},
                        ${countryId}
                    )`
                )

        }

        return clientId 
    }

    return {
        getAllClients, 
        getTopEmployees, 
        getSalesByCountry, 
        addClient, 
        getSalseByDay, 
        updateClient,
        addOwner, 
        addEmailType, 
        addCountry
    }
}

module.exports = dataBaseService