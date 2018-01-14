import React, { Component } from 'react'
import {EventEmitter} from 'fbemitter'
import FounderStore from './stores/FounderStore'
import Founder from './Founder'
import FounderForm from './FounderForm'

const emitter = new EventEmitter()
const store = new FounderStore(emitter)

const addFounder = (founder) => {
  store.addOne(founder)
}

const deleteFounder = (id) => {
      store.deleteOne(id)
}

const saveFounder = (id, founder) => {
       store.saveOne(id,founder) 
}

class FounderList extends Component {
  constructor(props){
    super(props)
    this.state={
      founders : []
    }
  }    
  
  componentDidMount(){ 
    store.getAll()
    //notificare primita cand s-a terminat getAll 
    emitter.addListener('FOUNDER_LOAD', () => {
      this.setState({
        founders : store.content
      })
    })
  }
  render() {
    return (
      <div>
          <div id="founder">
          <h1 id="title_founder">Founders</h1>
            {/*<ul id="founder_list">
            <p className="labeel">Name:</p>
                {this.state.founders.map((e) => 
                    <li className="rand">{e.founder_name}<br/></li>
                    )}
            <p className="labeel">Birthday:</p>
                {this.state.founders.map((e) => 
                    <li className="rand">{e.birthday}<br/></li>
                    )}
            <p className="labeel">Gender:</p>
                {this.state.founders.map((e) => 
                    <li className="rand">{e.gender}<br/></li>
                    )}
            <p className="labeel">Website:</p>
                {this.state.founders.map((e) => 
                    <li className="rand">{e.website}<br/></li>
                    )}
            </ul> */}
            
            <div id="founder_list">
                {this.state.founders.map((f) => 
                    <Founder founder={f} key={f.id} onDelete={deleteFounder} onSave={saveFounder}/>
                    )}
            </div>
            <FounderForm onAdd={addFounder} />
          </div>
      </div>
    );
  }
}

export default FounderList