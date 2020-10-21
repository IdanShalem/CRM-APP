import {observable, action, computed, makeObservable } from 'mobx'
import Client from './Client'
import moment from 'moment'

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

    loadData = (data) => {
        data.forEach(c => {
            const client = new Client(c._id, c.name, c.email, c.firstContact, c.emailType, c.sold, c.owner, c.country)
            this.clients.push(client)
        })
    }

    addClient(client) {
        const id = this._idMaker()
        const firstContact = moment().format()
        const { firstName, surName } = client
        const name = firstName + ' ' + surName
        const newClient = new Client(id, name, client.email, firstContact, client.owner, client.country)
        this.clients.push(newClient)
    }

    updateClient(clientName, property, value) {
        const client = this.clients.find(c => c.name === clientName)
        client[property] = value
    }

}