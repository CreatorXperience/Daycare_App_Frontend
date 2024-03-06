const getTime = (hour: number) => {
    if(hour > 11){
        return `${hour} PM`
    }
    return `${hour} AM`
}

export default getTime