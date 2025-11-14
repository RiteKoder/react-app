// import Header  from "./components/Header.jsx"
// import Footer from "./components/Footer.jsx"
// import MainContent from "./components/MainContent.jsx"
// import Product from "./components/Product.jsx"
// import CurrDate from "./components/CurrDate.jsx";
// import RenderList from "./RenderList.jsx";
// import {Card} from "./components/Card.jsx"
import { Weather } from "./components/Weather.jsx";

const App = () => {
  return (
    <>
      <Weather temperature={15}/>

      {/* <Header />
    <MainContent />
    <Footer /> 
    <Product eType="pc" />
    <CurrDate />
    <RenderList /> */}
      {/* <Card>
      <h1>Hello 1</h1>
      <p>This is from card component</p>
    </Card>
    <Card>
      <h1>Hello 2</h1>
      <p>This is from card component</p>
    </Card> */}
    </>
  );
};

export default App;
