export const PowerCalculator = () => {
    const numberXnumber = (num: number) => {
        return num * num
    }

    return (
        < h3 style={{
            color: "#ee4444"
        }}>
            A potencia de 12 é: {numberXnumber(12)}</h3 >
    )
}