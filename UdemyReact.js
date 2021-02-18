import React, {Component} from 'react';
import Lista from './util';


class index extends Component{ 
      constructor(props){
        super(props);
        this.state={
              texto:'',
              array:[]
        }
        this.aplicar= this.aplicar.bind(this);
        this.deleta = this.deleta.bind(this);
      }
      aplicar(e){
         if(this._tarefaInput.value !== '')//aqui garanto que sempre 
         //vai ter algo em meu array,se eu clicar adicionar e colocar
         //console log vai aparecer array[] sem nenhum conteudo e length 0,
         //se não colocar vai aparecer um array length 1 e texto vazio
            {
             let newitem = this.state;
             newitem={
                 key:Date.now(),
                 texto: this._tarefaInput.value
             }
             this.setState({array:[...this.state.array,newitem]});
             //em this setState,estou garantindo com this.state.array,que sempre
             //um valor antigo estara no array,desta forma não perde dados
             //ficar atento em não colcoar outra coisa
             this.setState({texto:''});
        }
         e.preventDefault();
     }
     deleta(key){
          let filtro = this.state.array.filter((item)=>{
          return(item.key != key);
        })
        this.setState({array:filtro})
      }


      render(){
        return(
          <div>
          <form onSubmit={this.aplicar}>
            <input name="campo" type="text" value={this.state.texto}
                  placeholder="Insira algo" onChange={(e)=>{
                    this.setState({texto:e.target.value})
                  }} // em ref não e uma função anonima então  ficar atendo so tem um {} 
                  ref={(event)=>this._tarefaInput=event}/>
          
          <button type="submit">Adiconar</button>
          </form>
          <div>
            <Lista texto={this.state.array} deleta={this.deleta}/>
          </div>
          </div>
        );
      }
      

}      
export default index;