import { ITask } from "../../../types/tasks"
import style from "./Item.module.scss"

interface Props extends ITask {
    taskSelector: (selectedTask: ITask) => void;
}

export default function Item(
    {
        task,
        time,
        selected,
        completed,
        id,
        taskSelector
    }: Props) {
    return (
        <li
            className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`}
            onClick={() => !completed && taskSelector(
                {
                    task,
                    time,
                    selected,
                    completed,
                    id
                }
            )}
        >
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && <span className={style.concluido} aria-label="tarefa-completada"></span>}
        </li>
    )
}