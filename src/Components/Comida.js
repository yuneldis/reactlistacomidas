import React, { Component } from 'react';

class Comida extends Component {
    constructor(props){
      super(props);

      /*
      This is the way of defining a state. In case many elements of state must be defined, it has to be written in an array notation.
      this.state={like:true}; //In this case, the state of the "like" feature of all elements is set on true by default.
      */
      this.state={
        like:Boolean(this.props.like),
        editing: false     
      }; 

     /*
     Binding process of the "this" object for the function "handlelike" without having to write the function in arrow style.
     this.handlelike = this.handlelike.bind(this);
     */
    }

    handlelike = () => {
     //This is the way to set the state of "like" using arrow style for binding "this".
     this.setState({like: !(this.state.like)});
    }

    edit = () => {
      this.setState({editing: true})
    }

    save = () => {
      this.props.onChange(this.refs.nuevoNombre.value, this.props.index);      
      this.setState({editing: false})
    }

    cancel = () => {
      this.setState({editing: false})
    }

    remove = () => {
      this.props.onRemove(this.props.index);
    }

    showEditingView () {
      return (
        <div className="comida">

          <input 
            type="text" 
            ref="nuevoNombre"
            className="form-control" 
            placeholder="Nuevo nombre..."
            defaultValue={this.props.name} 
          />

          <div className="controles">
            <div className="glyphicon glyphicon-ok-circle blue" onClick={this.save}></div>
            <div className="glyphicon glyphicon-remove-circle red" onClick={this.cancel}></div>
          </div>

        </div>     
      );
    }

    showNormalView () {
      return (
        <div>

          <h1 className="label-success">{this.props.name}</h1>
          <p className="label-info">Comida: <i>{this.props.children}</i></p>
          
          <div className="controles">
              <input 
              onChange={this.handlelike} 
              defaultChecked={this.state.like}
              type="checkbox"
              className="glyphicon glyphicon-heart" />            
              <br/>
              Like: {String(this.state.like)}              
          </div>
          <br/>
          
          <div className="controles">
            <div className="glyphicon glyphicon-pencil blue" onClick={this.edit}></div>
            <div className="glyphicon glyphicon-trash red" onClick={this.remove}></div>
          </div>

        </div>
        );
    }

    /*
    At the time of rendering if state variable editing is true, the system shows the editing view, otherwise the normal view is shown.
    */ 
    render() {
      if(!this.state.editing)
       return this.showNormalView();      
       else 
       return this.showEditingView(); 
    }
  }

export default Comida;