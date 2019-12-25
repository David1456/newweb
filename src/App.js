import React from 'react';
import Movies from "./components/Movies.jsx"
import Contact from "./components/Routingfolder/Contact.jsx"
import {Route,Switch} from "react-router-dom"
import Reviews from "./components/Routingfolder/Reviews.jsx"
import SignIn from "./components/Routingfolder/SignIn.jsx"
import About from "./components/Routingfolder/About.jsx"
import signup from "./components/Routingfolder/SignUp.jsx"
import "./../src/components/utils/style.css"




const App = () => {
  return ( 
      <div>
      
     
     
       
        <div className="content">
          <Switch>
            <Route path="/" exact component={Movies} />
            <Route path="/Reviews" component={Reviews} />
            <Route path="/Contact" component={Contact}/>
            <Route path="/About" component={About}/>
            <Route path="/Signin" component={SignIn}/>
            <Route path="/signup" component={signup}/>
            
           
           
            
           
           
           
      
          </Switch>
        </div>
      </div>
        
    
      
  )
    

      
      
}
 
export default App;