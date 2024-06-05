import { useRef } from "react"

export default function RefExample() {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focar no input</button>
        </>
    )
}