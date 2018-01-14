import React, {Component} from 'react'

class Founder extends Component{
    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
            founderName: this.props.founder.founder_name,
            founderBirthday: this.props.founder.birthday,
            founderGender: this.props.founder.gender,
            founderWebsite: this.props.founder.website,
        }
         this.handleInputChange = (event) => {
             this.setState({[event.target.name] : event.target.value
             })
        }
    }
    
    render() { 
        if(!this.state.isEditing){
        return (
            <div>
                {this.props.founder.founder_name} 
                {this.props.founder.birthday}
                {this.props.founder.gender}
                {this.props.founder.website} 
                <div id="butoane_founder">
                    <form>
                        <input id="butonas" type="button" value="edit" onClick={ () => this.setState({isEditing : true})} />
                        <input type="button" value="delete" onClick={ () => this.props.onDelete(this.props.founder.id)} />
                    </form>
                </div>
            </div>
        )
    }
        else{
            return ( 
            <div>
                <div id="formular_founder">
                <input type="text" name="founderName" class="imputuri_form_founder" onChange={this.handleInputChange} value={this.state.founderName} />
                <input type="text" name="founderBirthday" class="imputuri_form_founder" onChange={this.handleInputChange} value={this.state.founderBirthday} />
                <input type="text" name="founderGender" class="imputuri_form_founder" onChange={this.handleInputChange} value={this.state.founderGender} />
                <input type="text" name="founderWebsite" class="imputuri_form_founder" onChange={this.handleInputChange} value={this.state.founderWebsite} />
                </div>
                
                
                <input type="button" value="cancel" onClick={ () => this.setState({isEditing : false})} />
                <input type="button" value="save" onClick={() => this.props.onSave(this.props.founder.id, {founder_name: this.state.founderName,
                    birthday: this.state.founderBirthday, gender: this.state.founderGender, website: this.state.founderWebsite})} />  
                
            </div>)
        }
    }
}   

export default Founder