import React, { Component } from 'react';
 
class CompanyForm extends Component {
    
    constructor(props){
        super(props)
        this.state={ //tinem lista de companii in stare
        companyName: '',
        companyHeadquarters: '',
        companyFoundedDate: '',
        companyWebsite: '',
        companyNumberEmployees: '',
        companyRevenue: ''
    }
        this.handleInputChange = (event) => {
        this.setState({[event.target.name] : event.target.value
     })
   }
 } 
  render() {
    return (
      <div>
        <form className="form" id="form_company">
          <div className="formdiv">
              <label className="labelform" htmlFor="nume">Company Name:</label>    <input className="inputuri" type="text" onChange={this.handleInputChange} name="companyName" /> <br />
              <label className="labelform" htmlFor="nume">Headquarters:</label>           <input className="inputuri" type="text" onChange={this.handleInputChange} name="companyHeadquarters" /> <br />
              <label className="labelform" htmlFor="nume">Founded Date:</label>            <input className="inputuri" type="text" onChange={this.handleInputChange} name="companyFoundedDate" /> <br />
              <label className="labelform" htmlFor="nume">Website:</label>                  <input className="inputuri" type="text" onChange={this.handleInputChange} name="companyWebsite"/> <br />
              <label className="labelform" htmlFor="nume">Number of employees:</label>      <input className="inputuri" type="text" onChange={this.handleInputChange} name="companyNumberEmployees" /> <br />
              <label className="labelform" htmlFor="nume">Revenue:</label>                 <input className="inputuri" type="text" onChange={this.handleInputChange} name="companyRevenue" /> <br />
              <input className="inputuri" id="button_add_company" type="button" value="Add" onClick={() => this.props.onAdd({company_name: this.state.companyName, 
                                                      headquarters: this.state.companyHeadquarters, founded_date: this.state.companyFoundedDate,
                                                      website: this.state.companyWebsite, number_of_employees: this.state.companyNumberEmployees,
                                                      revenue: this.state.companyRevenue})}/>
              </div>
          </form>
     </div>   
    )
  }
}

export default CompanyForm