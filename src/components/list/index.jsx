import { useSelector } from "react-redux";
import Item from "../item";

export default function List() {
  const todos = useSelector((state) => state.todo.list);
  return (
    <div>
      {todos.map((todo, idx) => {
        return <Item key={idx} {...todo} />;
      })}
    </div>
  );
}
