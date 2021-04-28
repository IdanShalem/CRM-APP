import {observable, action, computed, makeObservable } from 'mobx'
import Client from './Client'
import moment from 'moment'
import storeService from './service/storeService'

export default class company {

    clients = [];

    constructor() {
        makeObservable(this, {
            clients: observable,
            allOwners: computed,
            allEmailTypes: computed,
            newClients: computed,
            emailsSents: computed,
            outstandingClients: computed,
            hottestCountry: computed,
            getTopEmployees: action,
            getSalesByCountry: action,   
            loadData: action,
            addClient: action,
            updateClient: action,
        })
    }
    
    _idMaker = () => '_' + Math.random().toString(36).substr(2, 9)

    get allOwners() {
        const owners = {}
        this.clients.map(c => c.owner ? owners[c.owner] = 1 : null)
        return Object.keys(owners).sort()
    } 

    get allEmailTypes() {
        const emails = {}
        this.clients.map(c => c.emailType ? emails[c.emailType] = 1 : null)
        return Object.keys(emails).sort()
    }

    get newClients() {
        let counter = 0
        const d = new Date()
        for(let c of this.clients) {
            const firstContact = new Date(c.firstContact)
            if(firstContact.getMonth() === d.getMonth() 
                && firstContact.getFullYear() === d.getFullYear()
            ) {
                counter ++
            }
        }
        return counter
    }

    get emailsSents() {
        let emailsCounter = 0
        this.clients.forEach(c=> c.emailType && emailsCounter++)
        return emailsCounter
    }

    get outstandingClients() {
        let unSoldCounter = 0
        this.clients.forEach(c=> !c.sold && unSoldCounter++)
        return unSoldCounter
    }

    get hottestCountry() {
        let countries = {}
        let hotCountry = 1
        let returnedCountry

        this.clients.forEach(c=>{
            if(!countries[c.country]){
                countries[c.country] = 1
            } else {
                countries[c.country]++
            }

            if(countries[c.country] > hotCountry) {
                hotCountry = countries[c.country]
                returnedCountry = c.country
            }
        })

        return returnedCountry;
    }

    loadData = async () => {
        const clientsData = await storeService().getAllClients()
        const newClients = []
        clientsData.forEach(c => {
            const sold = c.sold === 0 ? false : true 
            const client = new Client(c.id, c.name, c.email, c.firstContact, c.emailType, sold, c.owner, c.country)
            newClients.push(client)
        })
        this.clients = newClients
    }
    
    getTopEmployees = async () => {
        const topEmployees = await storeService().getTopEmployees()
        return topEmployees
    }

    getSalesByCountry = async () => {
        const countries = await storeService().getSalesByCountry()
        return countries
    }

    getSalesByDay = async () => {
        // const date = new Date() 
        // const month = date.getMonth() + 1
        const sealsByDay = await storeService().getSalseByDay()
        return sealsByDay
    }

    addClient = async (client) => {
        const id = this._idMaker()
        const firstContact = moment().format('YYYY-MM-DD HH:mm:ss')
        const { firstName, surName } = client
        const name = firstName + ' ' + surName
        const newClient = new Client(id, name, client.email, firstContact, null, false, client.owner, client.country)
        this.clients.push(newClient)
        await storeService().addNewClient(newClient)

    }

    updateClient = async (clientName, property, value) => {
        const client = this.clients.find(c => c.name === clientName)
        client[property] = value
        await storeService().updateClient(clientName,property,value) 
    }

}