import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';

class CreateUsers extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            description:'',
            duration:0,
            date:new Date(),
            users:[]
            
        }
    }
    componentDidMount(){
        this.setState(
            {
                users:['test user'],
                username:'test user'
            }
        )
       /* axios.get("http://localhost:5000/user")
        .then(response => 
            {
            if (response.data.length>0)
            {
                this.setState(
                    {
                        users: response.data.map(user =>user.username),
                        username: response.data[0].username
                    })
            }
        });*/
    }
    onChangeUsername=(e)=>{
        this.setState(
            {
                username:e.target.value
            }
        )
    }       
    onChangeDescription=(e)=>{
        this.setState(
            {
                description:e.target.value
            }
        )
    }       
    onChangeDuration=(e)=>{
        this.setState(
            {
                duration:e.target.value
            }
        )
    }       
    onChangeDate=(date)=>{
        this.setState(
            {
              date
            }
        )
    }       
    onSubmit=(e)=>{
    e.preventDefault()
    const exercise={
        username:this.state.username,
        description:this.state.description,
        duration:this.state.duration,
        date:this.state.date
    }
    console.log(exercise)

    /*axios.post("http://localhost:5000/create/add",exercise)
    .then(res => console.log(res.data));*/

    /*window.location= "/"*/;
    }
    render() { 
        return ( 
           <div>
               <h3>Create New Exercise Log</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Username:</label>
                       <select
                       className="form-control"
                        value={this.state.username} 
                       onChange={this.onChangeUsername}>
                           {this.state.users.map((user)=>{
                               return <option 
                               key={user} 
                               value={user}>{user}</option>
                           })
                           }
                           </select>
                   </div>
                   <div>
                   <div className="form-group">
                       <label>Description:</label> 
                       <input type="text" required
                        className="form-control" 
                        value={this.state.description} 
                        onChange={this.onChangeDescription}
                        />
                   </div>
                   </div>
                   <div>
                   <div className="form-group">
                       <label>Duration:</label> 
                       <input type="text" required
                        className="form-control" 
                        value={this.state.duration} 
                        onChange={this.onChangeDuration}
                        />
                   </div>
                   </div>
                   <div>
                       <div className="form-group">
                           <label>Date:</label>
                           <div>
                               <DatePicker
                               selected={this.state.date}
                               onChange={this.onChangeDate}/>
                           </div>
                       </div>
                   </div>
                   <div className="form-group">
<input type="submit" value="Create-exercises-log" className="btn btn-primary"></input>
                   </div>
               </form>
           </div> 

        
        );
}
}

export default CreateUsers