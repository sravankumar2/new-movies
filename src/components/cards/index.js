import React ,{Component} from 'react';
import axios from 'axios';
import "./index.css"
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:false, 
            data: [],
            searchValue:"",         
            
         }
    }
    componentDidMount() {
      axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
        .then(res=>
         {
            this.setState({
                isLoading:true,
              data:[...res.data.Search],
            })
          }
        );        
       
      }     
    render(){ 
         const s={...this.props}              
          
      const {isLoading,data}=this.state;      
     const Filter= data.filter((item)=>{
        return item.Title.toUpperCase().includes(s.searItem)      

      })
      
      if(!isLoading){
        return <div>Loading...</div>
    }
    else if(Filter.length && isLoading){
      return (
        <>            
        <div className="cards">
            {Filter.map(item =>{
                return <div className="card" key={item.imdbId}>
                  <div>
                   <img src={item.Poster} alt={item.Title}/>
                  </div>
                  <div className="details">
                    <h2>{item.Title}</h2>
                    <p>{item.Year}</p>
                  </div>
                </div>               
            }) }       
        </div>
        </>     
           )    
    }
    else if(Filter.length=0)
        return (
        <>            
        <div className="cards">
            {data.map(item =>{
                return <div className="card" key={item.imdbId}>
                  <div>
                   <img src={item.Poster} alt={item.Title}/>
                  </div>
                  <div className="details">
                    <h2>{item.Title}</h2>
                    <p>{item.Year}</p>
                  </div>
                </div>               
            }) }       
        </div>
        </>     
           )  
           else return null    
    }
} 
export default Cards;