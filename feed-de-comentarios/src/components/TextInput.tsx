import React from "react"

interface inputFunc {
    type: string
    id: string
    name: string
    label: string
    value: string
    setValue: Function
}

export default function textInput(inputFunc: inputFunc) {
    return (
        <div>
            <label htmlFor={inputFunc.id}>{inputFunc.label}</label>
            <input
                type={inputFunc.type}
                name={inputFunc.name}
                id={inputFunc.id}
                value={inputFunc.value}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                    inputFunc.setValue(ev.target.value)
                }}
            />
        </div>
    )
}