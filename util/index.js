import React,{Component} from 'react';

class Lista extends Component{  
      constructor(props){
        super(props);
        this.state={}
        this.deleta=this.deleta.bind(this);
      }
      deleta(key){
       this.props.deleta(key);
      }
      render(){
        return(
          <ul>
            {this.props.array.map((item)=>{
              return(
               <li key={item.key} onClick={()=>this.deleta(item.key)}>{item.texto}</li>
              )
            })}
          </ul>
        );
      }
  }
export default Lista;