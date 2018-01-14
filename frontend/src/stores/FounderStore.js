//O clasa cu care maschez operatiile cu serverul, obtin operatii cu serverul
//ee=event-emitter

import axios from 'axios'

const SERVER = "http://tehnologii-web-proiect-mikiiii.c9users.io:8082"

class FounderStore{
    constructor(ee){
        this.emitter=ee
        this.content = [] //lista de fondatori
    }
    getAll(){
        axios(SERVER + '/founders')
            .then((response)=> {
                this.content = response.data
                this.emitter.emit('FOUNDER_LOAD') //un fel de custom event, in cazul in care mai multe evenimente doresc aceste date.
            })
            .catch((error) => console.warn(error))
    }
    getOne(id){
        axios.get(SERVER + '/founders/' + id)
    }
    addOne(founder){
        axios({
            method : 'post',
            url: SERVER + '/founders',
            headers: {'Content-Type' : 'application/json'},
            data : founder
        })
        .then(() => this.getAll())
        .catch((error) => console.warn(error))
    }
    saveOne(id,founder){
        axios.put(SERVER + '/founders/' + id, founder)
            .then(() => this.getAll())
            .catch((error) => console.warn(error))
    }
    deleteOne(id){
        axios.delete(SERVER + '/founders/' + id)
            .then(() => this.getAll())
            .catch((error) => console.warn(error))
    }
    
}

export default FounderStore