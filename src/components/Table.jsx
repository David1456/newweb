import React from 'react';
import Listgroup from "./Listgroup"
import Like from "./Like"
class TableHead extends React.Component {

  //import Listgroup from "./Listgroup"

 
 
  render() { 
    
const {mov1,ondelete,Genre,onGenre,onSort,onlike}=this.props;
    return (  <div className="text-center">

    <div className="row">

     
       <div className="col"> <table className="table table-hover table-bordered  table-dark"> 
        <thead>
          <tr>
            <th onClick={()=>onSort("title")}>Title</th>
            <th onClick={()=>onSort("genre.name")}>Genre</th>
            <th onClick={()=>onSort("numberInStock")}>Stock</th>
            <th onClick={()=>onSort("dailyRentalRate")}>Rate</th>
              <th >Favourite</th>
            <th >Delete</th>
          
          </tr>
        </thead>
         <tbody>
            {mov1.map(movie=> 
             (<tr key={movie._id}>
               <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like liked={movie.liked}onclick={()=>onlike(movie)}/></td>

                
                <td><a className="btn btn-danger" onClick={()=>{ondelete(movie)}}>
                    <i className="fa fa-trash-o fa-lg" > Delete</i></a></td>
                    
                  
                
               
                </tr>) )}
               
            
        </tbody>
 
      </table></div>
     
     </div>
     </div> );
  }
}
 



 

   

 export default TableHead
