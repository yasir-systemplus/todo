import Counter from "./counter/counter";
import DatePractise from "./date";
import Set from "./sets/Set";
import Todos from "./todo-app/todos";
import Table from "./pagination/table";

/**
 ** Working on Life Cycle Hooks
 * TODO: Implement with these life cycle hooks.
 * ! Implement every hook.
 */

function App() {
  const element = (
    <div className="bg-gray-100 py-6 flex-1 ">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <Table />
        </div>
      </div>
    </div>
  );

  return element;
}

export default App;
