//O clasa cu care maschez operatiile cu serverul, obtin operatii cu serverul
//ee=event-emitter

import axios from 'axios'

const SERVER = "http://tehnologii-web-proiect-mikiiii.c9users.io:8082"

class CompanyStore{
    constructor(ee){
        this.emitter=ee
        this.content = [] //lista de companii
    }
    getAll(){
        axios(SERVER + '/companies')
            .then((response)=> {
                this.content = response.data
                this.emitter.emit('COMPANY_LOAD') //un fel de custom event, in cazul in care mai multe evenimente doresc aceste date.
            })
            .catch((error) => console.warn(error))
    }
    getOne(id){}
    addOne(company){
        axios({
            method : 'post',
            url: SERVER + '/companies',
            headers: {'Content-Type' : 'application/json'},
            data : company
        })
        .then(() => this.getAll())
        .catch((error) => console.warn(error))
    }
    saveOne(id,company){
        axios.put(SERVER + '/companies/' + id, company)
            .then(() => this.getAll())
            .catch((error) => console.warn(error))
    }
    deleteOne(id){
        axios.delete(SERVER + '/companies/' + id)
            .then(() => this.getAll())
            .catch((error) => console.warn(error))
    }
    
}

export default CompanyStore