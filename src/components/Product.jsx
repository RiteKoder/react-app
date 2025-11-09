const Product = () =>{
const laptop = {
            name : "Laptop",
            price : "50k",
            isInStock : false
        }
        const message = laptop.isInStock ? "Available" : "not available"
    return(
        <div>
            <section>I am buying a {laptop.name} which costs {laptop.price} and it is { message }  </section>
        </div>
        
    )
}

export default Product