import React, { Component } from 'react';

//import $ from '/public/jquery/110/jquery.js';

import Comida from './Comida';

class ListaComida extends Component {
    constructor(props){
      super(props);   

      //Intializing the state of the component.
      this.state={listaComidas:['Tacos', 'Pescado', 'Congris']}
      
      /*
        Binding process of the "this" object for the function "add" without having to write the function in arrow style.*/
        //this.add = this.add.bind(this);

    }

    componentWillMount(){
      /*var pais;
      var self = this;
      
      $.getJSON("https://restcountries.eu/rest/v1/all", function(data){
        for(pais in data){
          console.log(pais, data[pais].name);
          self.add(data[pais].name);
        } 
      })*/

      //var paises = open('./JSONPaises.txt');
      
      //$(self.refs.spinner).addClass("glyphicon-refresh-animateglyphicon");
    }
  
    componentDidMount(){
      //$(this.refs.spinner).addClass("glyphicon-refresh-animateglyphicon");
    }

    /*
    Binding this object using the arrow function way to do it.    
    funcionName = () => {}
    */
    add = (comida) => {

      //Extracting the value from the imput with attribute ref="nuevaComida";
      var nuevaComida = this.refs.nuevaComida.value; 

      if(nuevaComida === ""){ //Checking if there was something written in the field.     
        //If enter was pressed and there is not "comida" parameter defined.
        if(typeof comida == 'undefined') 
          nuevaComida = "ComidaEnter";
        else
          nuevaComida = comida;          
      }
      
      var arr = this.state.listaComidas;
      arr.push(nuevaComida);
      this.setState({listaComidas: arr}); //This is the way of updating a state varible.
      this.refs.nuevaComida.value = "";  //This is to clean the field.
    }


    update = (nuevoNombreP, indice) => {
      var arr = this.state.listaComidas;
      arr[indice] = nuevoNombreP;
      this.setState({listaComidas: arr});
    }

    remove = (i) => {
      var arr = this.state.listaComidas;
      arr.splice(i, 1);
      this.setState({listaComidas: arr});
    }

    eachItem = (comida, i) => {
      return(
        <Comida 
        key={i} 
        index={i} 
        name={comida}
        onRemove={this.remove}
        onChange={this.update}
        >
          {i+1}
        </Comida>
      );
    }

    handleKeyPress = (e) =>{
     if(e.charCode === 13)
           this.add();    
    }

    render() {
      return (
        <div className="centerBlock">
           
            <header>   
              <h1>Lista de Comidas Preferidas</h1>
              Total: {this.state.listaComidas.length}
              <br/>
              <span ref="spinner" className="glyphicon glyphicon-refresh"></span>
            </header>
            <br/>

            <div className="input-group">
              <input 
              type="text" 
              ref="nuevaComida"
              onKeyPress={this.handleKeyPress}
              className="form-control" 
              placeholder="Agregar comida..." />

              <span className="input-group-btn">
                <div className="btn btn-default btn-success" onClick={this.add.bind(null, "ComidaBoton")}> + </div>
              </span>
            </div>

            <div>
              {
                //Mapping an array to be shown as elements composing a component.
                this.state.listaComidas.map(this.eachItem)
              } 
            </div>

	      </div> 
        );
    }
  }

export default ListaComida;