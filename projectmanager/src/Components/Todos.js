import React, { Component } from 'react';
import TodoItem from './TodoItems';

class Todos extends Component {


  render() {
    let todoItems;

    
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        //console.log(project);
        return (
          <TodoItem  key = {todo.title} todo = {todo} />
        )
      });
    }
    console.log(this.props)
    return (
      <div className="Todos">
        {todoItems}
      </div>
    );
  }
}
// validation
// Todos.propTypes = {
//   todos: React.PropTypes.array
// }
export default Todos;
