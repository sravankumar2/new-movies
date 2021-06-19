import React,{Component} from 'react';
import "./index.css"
import Cards from '../cards';
class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue:"",           
         }
    }      
    searchFunction=(e)=>{        
        const value=e.target.value.toUpperCase();   
     
        this.setState(()=>{
          return {searchValue : value}
               
        })

    }     
    render(){
       
    return ( <>
        <div className="inputSearch">
        <input type="text" className="topbar" placeholder="Search" onChange={this.searchFunction} />
        </div>
        <Cards searItem={this.state.searchValue}/>
    </> )
    }
} 
export default Topbar;