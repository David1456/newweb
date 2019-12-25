import React from 'react';
import Input from "./../utils/input"
import Joi from "joi-browser"
class  SignIn  extends React.Component {
    state = { 
         account:{username:"",password:""},
         errors:{}
     };

schema={
    username:Joi.string().required(),
    password:Joi.string().required()
};

     validate=()=>{

         const result=Joi.validate(this.state.account,this.schema,{abortEarly:false});
         console.log(result);
   /*      const errors={};
         const {account}=this.state
         if(account.username.trim() ==='')
         errors.username="Username is required";
         if(account.password.trim() ==='')
         errors.password="Password is required";
         
         return Object.keys(errors).length===0?null:errors;
         */
     };
     handleSubmit=(e)=>{
         e.preventDefault()

         const errors=this.validate();
         console.log(errors);

         this.setState({errors:errors||{}});

         if(errors) return

     }
     validateProperty=(currentTarget)=>{
         if(currentTarget.name==="username"){
             if(currentTarget.value.trim()==="" ) return "username is required"
         }
         if(currentTarget.name==="password"){
             if(currentTarget.value.trim()==="" ) return "password is required"
         }

     }
   handleOnChange=(e)=>{
       const errors={...this.state.errors};
       const errorMessage=this.validateProperty(e.currentTarget);
       if(errorMessage) errors[e.currentTarget.name]=errorMessage;
       else delete errors[e.currentTarget.name];
   const account={...this.state.account}
  account[e.currentTarget.name]= e.currentTarget.value;
  this.setState({account,errors});

   }


    
    render() { 
        const {username,password}=this.state.account;
        const {errors}=this.state;
      
        return ( <div className="bg-secondary">
    <div className="col-4 mx-auto text-center">
  <h4 className="display-1">THE BRITS.COM</h4>
                <h1>Login</h1>

                <form 
                onSubmit={this.handleSubmit}
               >
           <Input
           name="username"
           label="username"
           value={username}
           onChange={this.handleOnChange}
           error={errors.username}
           />
           <Input
           name="password"
           label="password"
           value={password}
           onChange={this.handleOnChange}
           error={errors.password}
           />
                  
                
           
           
            <div className="form-check">
                <input 
                type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
                
            
                
                </div>
                <div className="bg-secondary"></div>
                </div> );
  
    
}
}
 export default SignIn;



 
