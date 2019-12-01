import React, { Component } from 'react';
import shortid from 'shortid';
import styles from './Todo.module.css';

export default class TodoForm extends Component {
    state={
        text:""
    };
    handleChange =(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit({
            id:shortid.generate(),
            text: this.state.text,
            complete:false,
        })
        this.setState({
            text:"",
        })
        //submit the form
    }
    render() {
        return (
            <div>
            <h2> Todo List Management App </h2>
            <form onSubmit={this.handleSubmit} className={styles.form}>
               <input className ={styles.input} name="text" value={this.state.text} onChange={this.handleChange} placeholder="Input Todo"/>
               <button className={styles.green} onClick={this.handleSubmit}>Add Todo</button>
               
               </form>
            </div>
        )
    }
}
