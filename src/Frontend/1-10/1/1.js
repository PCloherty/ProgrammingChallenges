import React from 'react';

export default class Easy extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            age: 0,
            userName: "",
            result:""
        };
    }
    
    name = e => {this.setState({name:e.target.value});}
    age = e => {this.setState({age:e.target.value});}
    userName = e => {this.setState({userName:e.target.value});}
          
    bSubmit = e=> {this.setState({result: `your name is ${this.state.name}, you are ${this.state.age} years old and your username is ${this.state.userName}`})}
   

    render() {
        return (
            <>
                <div className="problemNumber">Challenge 1 Easy</div>
                <div className="problemSpecs">create a program that will ask the users name, age, and reddit username. have it tell them the information back, in the format:</div>
                <div className="example"> your name is (blank), you are (blank) years old, and your username is (blank)</div>
                <div className="answer">
                    <label>Please input your name:</label>
                    <input type="text" className="name" value={this.state.name} onChange={this.name}></input><br />
                    <label>Please input your age:</label>
                    <input type="number" className="age" value={this.state.age} onChange={this.age}></input><br />
                    <label>please input a username:</label>
                    <input type="text" className="userName" value={this.state.userName} onChange={this.userName}></input><br/>
                    <input type="button" onClick={this.bSubmit} ></input>
                    <label>result:{this.state.result}</label>
                </div>
            </>
        )
    }
}