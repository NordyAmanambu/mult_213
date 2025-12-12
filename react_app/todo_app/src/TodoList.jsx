import './TodoList.css';
import { Card } from './Card';

// Add a new component for the TodoList
{/* 

<TodoList todos={[
  { id: 1, text: "Complete React assignment", completed: false },
  { id: 2, text: "Study for math test", completed: false },
  { id: 3, text: "Do laundry", completed: true }
]} />

*/}
export function TodoList(props) {
    // props is some JSON that looks like {todos: []Todo}

    const todos = props.todos;

    // Build up the UI element for the TODOs
    let listContent = <></>;

    if (todos.length == 0) {
        // If there are no TODOs, tell the user what to do
        listContent = <Card
            title="No tasks yet!"
            content="Add a new task using the form above."
            backgroundColor="orange"
        />;
    } else {
        // If there are TODOs, render them as li elements
        listContent = todos.map((item, i) => {

            // Render Card elements instead of li elements

            return <Card
                title={item.name}
                backgroundColor="green"
            />

            // return <li key={"todo-" + i} className="todo-item">
            //   <input type="checkbox" className="todo-item__checkbox" data-id={i} id={"todo-" + i} />
            //   <label htmlFor={"todo-" + i} className="todo-item__label">{item.name}</label>
            // </li>
        })
    }

    return (<>
        <section className='todo-list-section'>
            <h2>My TODOs:</h2>
            <ul className="todo-list" id="todo-list">
                {listContent}
            </ul>
        </section>
    </>);
}