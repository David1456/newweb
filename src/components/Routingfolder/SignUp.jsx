import React from 'react';

class SignUp extends React.Component {

    handlesubmit=(e)=>{
        e.preventDefault();
    }
    
    render() { 
         return (<div>
    
    <h4 className="display-2">Create a new account</h4>
    <form 
    onSubmit={this.handlesubmit}>
        <div className="form-now align-center">

             <div className="form-group col-md-6">
                <label htmlFor="">FirstName</label>
                <input 
                type="text" 
                autoFocus
                className="form-control"
                placeholder="FirstName"
                />
             </div>
             <div className="form-group col-md-6">
                 <label htmlFor="">LastName</label>
                <input 
                type="text" 
                className="form-control"
                placeholder="LastName"
                />
             </div>

            <div className="form-group col-md-6">
                <label htmlFor="">Username</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Username"/>
            </div>

            <div className="form-group col-md-6">
                <label htmlFor="">Password</label>
                <input
                type="text"
                className="form-control"
                placeholder="password"
                />
              </div>

              <div className="form-group col-md-6">
              <label htmlFor="">Confirm Password</label>
              <input 
              type="text" 
              className="form-control" placeholder="password"/>
              </div>

              <div className="form-group col-md-6">
              <label htmlFor="">Email</label>
              <input 
              type="text"
               className="form-control" 
               placeholder="Email"
               />
               </div>
                <div className="form-group">
                  <div className="form-check">
                <input 
                type="checkbox" 
                className="form-check-input"
                id="gridcheck"
                />
                <label htmlFor="" className="form-check-label" for="gridCheck">Check me out</label>
                </div>
                </div>
  
                
  

               <button className="btn btn-success">SignUp</button>
            
        </div>
    </form>

  
    </div>  );
       
    }
}
 

 
export default SignUp;

