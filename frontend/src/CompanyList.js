import React, { Component } from 'react'
import {EventEmitter} from 'fbemitter'
import CompanyStore from './stores/CompanyStore'
import Company from './Company'
import CompanyForm from './CompanyForm'

const emitter = new EventEmitter()
const store = new CompanyStore(emitter)

const addCompany = (company) => {
  store.addOne(company)
}

const deleteCompany = (id) => {
      store.deleteOne(id)
}

const saveCompany = (id, company) => {
       store.saveOne(id,company) 
}

class CompanyList extends Component {
  constructor(props){
    super(props)
    this.state={ //tinem lista de fondatori in stare
      companies : []
    }
  }    
  componentDidMount(){ 
    store.getAll()
    //notificare primita cand s-a terminat getAll 
    emitter.addListener('COMPANY_LOAD', () => {
      this.setState({
        companies : store.content
      })
    })
  }
    
  render() {
    return (
      
      <div>
          <div id="company">
          <h1 id="title_company">Companies</h1>
            {/*<ul id="company_list">
            <p className="labeel">Name:</p>
                {this.state.companies.map((e) => 
                    <li className="rand">{e.company_name}<br/></li>
                    )}
                    
            <p className="labeel">Headquarters:</p>
                {this.state.companies.map((e) => 
                    <li className="rand">{e.headquarters}<br/></li>
                    )}
            <p className="labeel">Founded date:</p>
                {this.state.companies.map((e) => 
                    <li className="rand">{e.founded_date}<br/></li>
                    )}
            <p className="labeel">Website:</p>
                {this.state.companies.map((e) => 
                    <li className="rand">
                      <a target="_blank" href="e.website">{e.website} <br/> </a>
                    </li>
                    )}
            <p className="labeel">Number of employees:</p>
                {this.state.companies.map((e) => 
                    <li className="rand">{e.number_of_employees}<br/></li>
                    )}
            <p className="labeel">Revenue:</p>
                {this.state.companies.map((e) => 
                    <li className="rand">{e.revenue}<br/></li>
                    )}
            </ul>*/}
            
            <div id="company_list">
                {this.state.companies.map((f) => 
                    <Company company={f} key={f.id} onDelete={deleteCompany} onSave={saveCompany}/>
                    )}
            </div>
              <CompanyForm onAdd={addCompany} />
          </div>
      </div>
    )
  }
}

export default CompanyList