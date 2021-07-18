import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/todo";

function App() {
  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "wash windows", completed: true },
    { id: 3, title: "wash bathroom", completed: false },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </header>
    </div>
  );
}

export default App;
