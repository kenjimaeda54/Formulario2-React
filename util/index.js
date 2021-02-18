import React,{Component} from 'react';

class Lista extends Component{  
    constructor(props){
     super(props);
     this.state = {
     } 
     this.deleta=this.deleta.bind(this);
    }
    deleta(key){
      this.props.deleta(key);
    }
    render(){
          return(
          <ul>
          {this.props.texto.map((item)=>{
            return(
              
              <li onClick={()=>this.deleta(item.key)} key={item.key}  >{item.texto}</li>
        
            );
           
           })}
           </ul>
          );
      }

}

export default Lista;