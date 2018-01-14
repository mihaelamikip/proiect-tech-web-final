import React, { Component } from 'react';
 
class FounderForm extends Component {
    
    constructor(props){
        super(props)
        this.state={ //tinem lista de fondatori in stare
        founderName:'',
        founderBirthday:'',
        founderGender:'',
        founderWebsite:''
    }
   this.handleInputChange = (event) => {
     this.setState({[event.target.name] : event.target.value
     })
   }
 } 
  render() {
    return (
      <div id="formularul_founder">
        <form className="form" id="form_founder">
          <div className="formdiv">
              <label className="labelform" htmlFor="nume">Founder Name:</label> <input className="inputuri" type="text" onChange={this.handleInputChange} name="founderName" /> <br />
              <label className="labelform" htmlFor="nume">Birthday:</label>     <input className="inputuri" type="text" onChange={this.handleInputChange} name="founderBirthday" /> <br />
              <label className="labelform" htmlFor="nume">Gender:</label>       <input className="inputuri" type="text" onChange={this.handleInputChange} name="founderGender" /> <br />
              <label className="labelform" htmlFor="nume">Website:</label>      <input className="inputuri" type="text" onChange={this.handleInputChange} name="founderWebsite"/> <br />
              <input className="inputuri" type="button" id="button_add_company" value="Add" onClick={() => this.props.onAdd({founder_name: this.state.founderName, 
              birthday: this.state.founderBirthday, gender: this.state.founderGender, website: this.state.founderWebsite })}/>
              </div>
          </form>
     </div>   
    )
  }
}

export default FounderForm