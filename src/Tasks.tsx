import React from 'react'
import {DataType, TasksType} from './App'

type TasksPropsType = {
    data: DataType
}

export const Tasks: React.FC<TasksPropsType> = (props: TasksPropsType) => {
    return (
        <div>
            <h2>{props.data.title}</h2>
            {props.data.tasks.map((el: TasksType) => {
                return (
                    <div key={el.taskId}>
                        <h3>{el.title}</h3>
                        <input type={'checkbox'} checked={el.isDone}/>
                    </div>
                )
            })}

            {props.data.students.map((el: string) => {
                return (
                    <ul>
                        <li>{el}</li>
                    </ul>
                )
            })}
        </div>
    )
}