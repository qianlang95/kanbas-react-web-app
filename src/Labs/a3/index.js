import Classes from "./classes/index";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";


function Assignment3() {
    return (
      <div className="container">
        <h1>Assignment 3</h1>
        <ConditionalOutput/>

        <Styles/>
        <Classes/>
        <TodoItem/>
        <TodoList/>
      </div>
    );
  }
  export default Assignment3;