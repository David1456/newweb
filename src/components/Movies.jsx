import React from 'react';
import {getMovies} from "./../services/fakeMovieService.js"
import {getGenres} from "./../services/fakeGenreService.js"
import Navbar from "./navbar"
import TableHead from "./Table"
import Image from "./image"
import Listgroup from "./Listgroup"
import Pagination from "./Pagination"
import { paginate } from "./utils/paginate.js";
import _ from "lodash"
import Like from "./Like"




class Movies extends React.Component {

    state={
        Movie:[],
        genres:[],
        img:"https://wallpapercave.com/wp/wp2913231.jpg",
        pageSize:4,
        currentpage:1,
        Sortcoloumn:{sort:"title",order:"asc"},
        text:"Unsubscribed"
        };

        componentWillMount() {
            const genres=[{name:"ALL Genres",_id:""},...getGenres()];
            this.setState({Movie:getMovies(),genres});
        }

    //handle delete

    handledelete=(x)=>{
     console.log(x);
     const mov=this.state.Movie.filter(m=> m._id!==x._id);
     this.setState({Movie:mov});
        
    };

    handlegenre=(g)=>{
      console.log(g);
      this.setState({selectedgenre:g,currentpage:1});
    }

    handleOnpageChange=(page)=>{
      this.setState({currentpage:page});

      console.log(page);

    }
    handlesort=(sort)=>{
      console.log(sort);
        this.setState({Sortcoloumn:{sort,order:"asc"}});
    }

    handlelike=(movie)=>{
      console.log(movie)
      const Movie=[...this.state.Movie];
      const Index=Movie.indexOf(movie);
      Movie[Index]={...Movie[Index]}
      Movie[Index].liked=!Movie[Index].liked
      this.setState({Movie})
    }
handlesubscribe=(e)=>{
  alert("Thanks for the joining our family,Stay tuned for the latest updates on movies");
  let text={...this.state.text};
  
  
  
  let text1="subscribed";
  this.setState({text1});
  if(text!==text1){
    return this.setState({text:text1});
  }
  else{
    return this.setState({text});
  
  }
 

}

handleemail=(e)=>{

  prompt("Enter your Email ID please");
  alert("Thanks for providing your Email");
} 

  render() { 
    const {selectedgenre,Movie:allmovies,currentpage,pageSize, Sortcoloumn}=this.state;
    const filtered=selectedgenre && selectedgenre._id?this.state.Movie.filter(item=>item.genre._id===selectedgenre._id):this.state.Movie;
      
      const sorted=_.orderBy(filtered,[Sortcoloumn.sort],[Sortcoloumn.order]);
      console.log(sorted);

         const Movie=paginate(sorted,currentpage,pageSize);


         

         

    return (
      <div>
            <div> 
            <Image image={this.state.img}/>
            <Navbar />
            </div>
     
      

 <div className="bg-success">
              <center>   <h1 className="display-1">Top {filtered.length} Movies of the Decade</h1>
                  <div className="row">
            
                      <Listgroup
                        onGenre={this.handlegenre} 
                        Genre={this.state.genres}
                        textProperty="name"
                        valueProperty="_id"
                        selectedItem={this.state.selectedgenre}
                        />
                        
                          <TableHead 
                          mov1={Movie} 
                          ondelete={this.handledelete} 
                          onlike={this.handlelike}
                        
                          onSort={this.handlesort} />
                      
                         

                            </div></center>

                              <Pagination 
                            itemsCount={filtered.length}
                            pageSize={this.state.pageSize} 
                            onPageChange={this.handleOnpageChange}
                            CurrentPage ={this.state.currentpage} />
          
  
                           
         
   
     
          <center><h1>TENET - Official Trailer</h1></center>
            <iframe width="1600" height="506" src="https://www.youtube.com/embed/LdOM0x0XDMo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              

           



          <center><h1>Sherlock Series 5 Promo: "The Day The Earth Collapsed"</h1></center>  

              <iframe width="1600" height="506" src="https://www.youtube.com/embed/s9INLzieJrg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              <center><h1>JOHN HENRY Official Trailer (2020) Terry Crews, Ludacris Movie HD</h1> </center>
              <iframe width="1600" height="506" src="https://www.youtube.com/embed/RuLBwjAMAqw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

               



              <div>
   <center className="alert alert-primary" style={{cursor:"pointer"}} role="alert"> <button className="btn btn-info" onClick={this.handlesubscribe} style={{cursor:"pointer"}}>Subscribe</button>
              <p onClick={this.handlesubscribe}>{this.state.text}</p>
            
              <p onClick={this.handleemail}>Enter Email</p>
              <p><a href="http://localhost:3001/">Home</a></p>
              <p>Sitemap</p>
             
              <p>IMPORTANT: This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p></center>          </div>
     

        
            </div>
      
      </div>

     );
  }
}
 
export default Movies;







