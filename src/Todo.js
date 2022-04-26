import React from 'react'

export default function Todo({todo, toogleComplete}) {
    return (
        <div>
            <label>
            <input type="checkbox" checked={todo.complete} onChange={() => {
                toogleComplete(todo.id)
            }} />
            {todo.desc}

            </label>
        </div>
    )
}
