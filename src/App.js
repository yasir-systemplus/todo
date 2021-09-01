import Counter from "./counter/counter";
import DatePractise from "./date";
import Set from "./sets/Set";
import Todos from "./todo-app/todos";

/**
 ** Working on Life Cycle Hooks
 * TODO: Implement with these life cycle hooks.
 * ! Implement every hook.
 */

function App() {
  return (
    <div className="bg-gray-100 flex h-screen justify-center align-middle items-center">
      <Counter count={1} />
    </div>
  );
}

export default App;
