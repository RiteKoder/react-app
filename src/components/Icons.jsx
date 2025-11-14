import { BsJustify } from "react-icons/bs";
import { FaBeer } from "react-icons/fa";
const style = {
  color: "red",
  fontSize: "6rem",
  fontFamily: "Arial",
  display: "flex",
  justifyContent: "Center",
  // borderRadius : "100%"
};

const Icons = () => {
  return (
    <div style={style}>
      <FaBeer style={style} />
      <span>Beer</span>
    </div>
  );
};

export default Icons;
