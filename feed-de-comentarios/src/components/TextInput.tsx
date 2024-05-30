import React from "react"

interface inputFunc {
    tag: string;
    id: string;
    name: string;
    label: string;
    value: string;
    type?: string;
    rows?: number;
    cols?: number;
    setValue: Function;
}

export default function textInput(inputFunc: inputFunc) {
    return (
        <div>
            <label htmlFor={inputFunc.id}>{inputFunc.label}</label>
            {inputFunc.tag === 'textarea' ? (
                <textarea
                    name={inputFunc.name}
                    id={inputFunc.id}
                    value={inputFunc.value}
                    rows={inputFunc.rows}
                    cols={inputFunc.cols}
                    onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => {
                        inputFunc.setValue(ev.target.value)
                    }}
                />
            )
                : (
                    <input
                        type={inputFunc.type}
                        name={inputFunc.name}
                        id={inputFunc.id}
                        value={inputFunc.value}
                        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                            inputFunc.setValue(ev.target.value)
                        }}
                    />
                )}
        </div>
    )
}