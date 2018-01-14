import React, {Component} from 'react'

class Company extends Component{
    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
            companyName: this.props.company.company_name,
            companyHeadquarters: this.props.company.headquarters,
            companyFoundedDate: this.props.company.founded_date,
            companyWebsite: this.props.company.website,
            companyNumberEmployees: this.props.company.number_of_employees,
            companyRevenue: this.props.company.revenue,
        }
        
        this.handleInputChange = (event) => {
             this.setState({[event.target.name] : event.target.value
             })
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            isEditing: false
        })
    }
    render() { 
        if(!this.state.isEditing){
        return (
            <div>
                {this.props.company.company_name} 
                {this.props.company.headquarters}
                {this.props.company.founded_date}
                {this.props.company.website}
                {this.props.company.number_of_employees} 
                {this.props.company.revenue} 
                <div id="butoane_company">
                    <form>
                        <input id="butonel" type="button" value="edit" onClick={ () => this.setState({isEditing : true})} />
                        <input type="button" value="delete" onClick={ () => this.props.onDelete(this.props.company.id)} />
                    </form>
                </div>
            </div>
        )
    }
        else{
            return ( 
            <div> 
                <input type="text" class="imputuri_form_founder" name="companyName" onChange={this.handleInputChange} value={this.state.companyName} />
                <input type="text" class="imputuri_form_founder" name="companyHeadquarters" onChange={this.handleInputChange} value={this.state.companyHeadquarters} />
                <input type="text" class="imputuri_form_founder" name="companyFoundedDate" onChange={this.handleInputChange} value={this.state.companyFoundedDate} />
                <input type="text" class="imputuri_form_founder" name="companyWebsite" onChange={this.handleInputChange} value={this.state.companyWebsite} />
                <input type="text" class="imputuri_form_founder" name="companyNumberEmployees" onChange={this.handleInputChange} value={this.state.companyNumberEmployees} />
                <input type="text" class="imputuri_form_founder" name="companyRevenue" onChange={this.handleInputChange} value={this.state.companyRevenue} />
                <input type="button" value="cancel" onClick={ () => this.setState({isEditing : false})} />
                <input type="button" value="save" onClick={() => this.props.onSave(this.props.company.id, {company_name: this.state.companyName,
                    headquarters: this.state.companyHeadquarters, founded_date: this.state.companyFoundedDate,
                    website: this.state.companyWebsite, number_of_employees: this.state.companyNumberEmployees, revenue: this.state.companyRevenue 
                })} />  
            </div> )
        }
    }
}   

export default Company