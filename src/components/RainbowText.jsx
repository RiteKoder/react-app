    const RainbowText = () => {
    let rainbowStyle = {
        color: "blue",
    };
    const handleMove = () => {
        rainbowStyle.color = "red"
    };

    return (
        <div>
        <p style={rainbowStyle} onMouseMove={handleMove}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam at
            eum hic sint sapiente corporis iure eos quia. Veniam, voluptatem.
        </p>
        </div>
    );
    };

    export default RainbowText;
