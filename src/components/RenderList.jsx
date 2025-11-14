const RenderList = () =>{
    const arr = [1,2,3,4,5,6,7,8,9,10]

    return (
        <>
            {
                arr.map((num)=>(
                <ul key={Math.random()} >
                    <li className="list">{num}</li>
                </ul>
                ))
            }
        
        </>
    )
}

export default RenderList