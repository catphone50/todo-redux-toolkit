import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoToList } from "../../redux/slices/todoSlice";
import { uid } from "uid";
import { Button, notification } from "antd";
import styles from "./styles.module.css";

export default function Form() {
  const [title, setTitle] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const dispatcher = useDispatch();

  function openNotification() {
    api.open({
      message: "todo has been added",
      duration: 2,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    title &&
      dispatcher(
        addTodoToList({
          id: uid(),
          title,
          complete: false,
        })
      );
    setTitle("");

    if (title) {
      openNotification();
    }
  }

  return (
    <form className={styles.formTodo}>
      {contextHolder}
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Enter new TODO"
        className={styles.inputTodo}
      />
      <Button className={styles.addButtonTodo} onClick={handleSubmit}>
        ADD
      </Button>
    </form>
  );
}
