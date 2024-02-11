import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/tasks";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss"

interface Props {
    selected: ITask | undefined,
    endTask: () => void
}

export default function Timer({selected, endTask} : Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time)
            setTime(timeToSeconds(selected?.time));
    },[selected])

    function countdown(timer: number = 0) {
        setTimeout (() => {
            if (timer > 0) { 
                setTime(timer - 1);
                return countdown(timer - 1);
            }
            endTask();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={() => countdown(time)}>
                Começar!
            </Button>
        </div>
    )
}