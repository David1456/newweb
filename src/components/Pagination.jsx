import React from 'react';
import _ from "lodash";
const Pagination = (props) => {

    const { itemsCount,pageSize,onPageChange,CurrentPage}=props;

   const PagesCount=Math.ceil(itemsCount/pageSize);
   if(PagesCount==1) return null;
   const Pages=_.range(1,PagesCount+1);
   console.log(CurrentPage);
  
   console.log(Pages);



    return ( <div>
    <ul className="pagination">
   {Pages.map(page=><li key={page} className={(CurrentPage==page)?"page-item active":"page-item"}><a className="page-link" onClick={()=> onPageChange(page)}>{page}</a></li>) } 
    
  </ul>
 
</div> );
}
 
export default Pagination;