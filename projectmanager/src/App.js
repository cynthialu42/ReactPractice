import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Components/Todos';


class App extends Component {
  constructor(){
    
    // Need this before a constructor
    super();
    // initial state keys
    // do want to state state and keys, but not data
    this.state = {
      projects: [],
      todos: []
    }
  }

  // Make our http request
  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json', 
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, error){
        console.log(error);
      }
    });
  }

  getProjects(){
    this.setState({projects:[
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Design'
      }
    ]});
  }
  // fires when component is rerendered
  // lifecycle method
  // put data here
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){

    this.getTodos();
  }
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects : projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);

    projects.splice(index, 1);
    this.setState({projects: projects});
  }
  render() {
    return (
      <div className="App">
        My App
        <AddProject addProject = {this.handleAddProject.bind(this)}/>
        <Projects onDelete = {this.handleDeleteProject.bind(this)} projects = {this.state.projects}/>
        <hr />
        <Todos todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
