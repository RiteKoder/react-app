const CurrDate = () =>{
    const myDate = new Date()
    // console.log(myDate)
    return (
        <div>{myDate.getFullYear()}</div>
    )

}

export default CurrDate