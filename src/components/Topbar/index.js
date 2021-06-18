import React,{Component} from 'react';
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
        <input type="text" placeholder="Search" onChange={this.searchFunction} />
        <Cards searItem={this.state.searchValue}/>
    </> )
    }
} 
export default Topbar;