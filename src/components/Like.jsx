import React, { Component } from 'react';
class Like extends Component {

   
   
    render() { 
         const {liked,onclick}=this.props
         let classes="fa fa-heart";
         if(!liked) classes +="-o"
        return ( 
                <i className={classes}
                    aria-hidden="true"
                    onClick={onclick}>
                    
                  </i>
             
         );
    }
}
 
export default Like;