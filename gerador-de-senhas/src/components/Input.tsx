import { ChangeEvent } from 'react'

export default function Input(props: { passwordSize: number, setPasswordSize: Function }) {
    return (
        < input
            type='number'
            id='passwordSize'
            min={1}
            value={props.passwordSize}
            onChange={(ev: ChangeEvent<HTMLInputElement>) => props.setPasswordSize(parseInt(ev.target.value))
            }
        />
    )
}