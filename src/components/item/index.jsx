import styles from "./styles.module.css";
import { removeTodoFromList, toggleTodo } from "../../redux/slices/todoSlice";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { Button, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

const { confirm } = Modal;

export default function Item({ id, title, complete }) {
  const dispatcher = useDispatch();
  function showConfirm() {
    confirm({
      title: "Do you want to delete this item?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        handleRemove();
      },
      onCancel() {},
    });
  }

  function handleRemove() {
    dispatcher(removeTodoFromList(id));
  }
  function handleComplete() {
    dispatcher(toggleTodo(id));
  }

  return (
    <div className={styles.item_container}>
      <h2
        className={clsx({
          [styles.completed]: complete === true,
        })}
      >
        {title}
      </h2>
      <Button onClick={handleComplete}>complete</Button>
      <Button onClick={showConfirm}>remove</Button>
    </div>
  );
}
