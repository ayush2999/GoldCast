import React, { Component } from 'react';
import {employeeDetails} from '../shared/employeeDetails';
import RenderTable from './table'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {baseUrl} from '../shared/baseURL'

// const details=employeeDetails;
// details.sort(function(a,b){
//     if(a.first.toLowerCase()>b.first.toLowerCase())return 1;
//     if(a.first.toLowerCase()<b.first.toLowerCase())return -1;
//     return 0;
// })
var filterData;
class EmployeeTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query:'',
            data:''
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleFilterData = this.handleFilterData.bind(this);
    }

    handleFilterData(query){
        filterData = filterData.filter(function(value){
            if(value.first.toLowerCase() == query.toLowerCase())
             return value
         })
    }
    handleLogin(event) {
        this.setState({query : 
            this.username.value}) 
        event.preventDefault();
        this.handleFilterData(this.username.value)
    }
    Sort(data){
        data.sort(function(a,b){
    if(a.first.toLowerCase()>b.first.toLowerCase())return 1;
    if(a.first.toLowerCase()<b.first.toLowerCase())return -1;
    return 0;
})
    }
    async componentDidMount(){
        try{
            console.log(baseUrl)
          const res= await  fetch(baseUrl+'data')
          const data= await res.json()
          filterData=data
          this.Sort(data)
          this.setState({data:data})
        }catch(err){
          console.log(err)
        }
       }
    render() {
        if(filterData){
        return(
        <div style={{ display: "block", padding: 30 }}>
           <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">First Name: </Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Search</Button>
                        </Form>
        <h4>GoldCast</h4>
          <RenderTable filterData={filterData}/>
        </div >  
        );
        }
        else{
            return(
                <div>Data is empty!!!</div>
            );
        }
    }
}

export default EmployeeTable;
