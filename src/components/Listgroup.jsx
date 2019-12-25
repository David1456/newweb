import React from 'react';

const Listgroup = (props) => {

    const {Genre,onGenre,textProperty,valueProperty,selectedItem}=props;


    return (
        
                 <div className="col-2 " style={{cursor:"pointer"}}>
                {Genre.map(g=><ul key={g[valueProperty]}>
                 <li className={g===selectedItem?"list-group-item list-group-item-action active cursor-pointer " :"list-group-item list-group-item-action"} 
                 onClick={()=>onGenre(g)}>
                 {g[textProperty]}
                 
                 </li>
                </ul>)}

                 </div>
                 
   
      );
}
 
export default Listgroup;