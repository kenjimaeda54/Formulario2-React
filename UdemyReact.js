import React, {Component} from 'react';
import Lista from './util';


class index extends Component{ 
      constructor(props){
        super(props);
        this.state={
          texto:'',
          array:[]
        }
      this.enviar = this.enviar.bind(this);
      this.deleta = this.deleta.bind(this);
      }
      enviar(evento){
       if(this.state.texto !== ''){
         let newitem={
             key: Date.now(),
             texto: this.state.texto,
         }
         this.setState({array:[...this.state.array,newitem]});
         evento.preventDefault();
         this.setState({texto:''})
        }else{
          alert("Você não digitou nada");
           evento.preventDefault();
         }   
      }
    
       deleta(key){
        let filtro = this.state.array.filter((item)=>{
          return(item.key !== key )
        })
        this.setState({array:filtro});
      }
      
       
      render(){
        return(
          <div>
          <form onSubmit={this.enviar}>
          <input name="entrada" placeholder="escreva algum texto"
                onChange={(e)=>{this.setState({texto:e.target.value})}} 
                value={this.state.texto}/>
          <button type="submit">Adiconar</button>
          </form>       
          <Lista array={this.state.array} deleta={this.deleta} />
          </div>  
        );
      }
      

}      
export default index;