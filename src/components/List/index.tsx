import { useState } from "react";
import Item from "./Item";
import style from "./List.module.scss"
import { ITask } from "../../types/tasks";

interface Props {
    tasks: ITask[]
    taskSelector: (selectedTask:ITask) => void;
}

function List({tasks, taskSelector}: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tasks.map(item => (
                    <Item
                        taskSelector={taskSelector}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;