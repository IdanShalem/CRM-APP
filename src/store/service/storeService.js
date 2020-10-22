import axios from 'axios'

const storeService = function() {

    const getAllClients = async function() {
        const clientsData = await axios.get('http://localhost:3001/clients')
        return clientsData.data
    }

    const addNewClient = async function(client) {
        const newClient = await axios.post('http://localhost:3001/client', { client })
        return newClient
    }

    const getTopEmployees = async function() {
        const topEmployees = await axios.get('http://localhost:3001/topEmployess')
        return topEmployees.data
    }

    const getSalesByCountry = async function() {
        const countries = await axios.get('http://localhost:3001/salesByCountry')
        return countries.data
    }

    const getSalseByDay = async function (month) {
        const salseByDay = await axios.get(`http://localhost:3001/salesByDay/${month}`)
        return salseByDay.data
    }

    const updateClient = async function (clientName, property, value) {
        let updateClient
        if (property === 'emailType') {
            let prop = 'email_type'
             updateClient = await axios.put('http://localhost:3001/update', { clientName, prop, value })
        }
        updateClient = await axios.put('http://localhost:3001/update', { clientName, property, value })
        return updateClient.data
    }

    return { getAllClients, addNewClient, getTopEmployees, getSalesByCountry, getSalseByDay, updateClient}

}

export default storeService