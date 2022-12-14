import "@fontsource/raleway";
import Navbar from "./Navbar";
import Box from "./Box";
import Module from "./Modulebox";
import Button from "./Button";
import Picture from "./Picture";
import Hrmanager from "./Hrmanager";
import Text from "./Text";
import "./App.css";
import Register from "./Register";
import Input from "./Input";
import Footer from "./Footer";
import Features from "./Features";
import DataArray from "./DataArray";
function App() {
  const modulbox=DataArray.map(function(value){
    return <Module key={value.id} {...value}/>
  })
  return (
    <div>
      <Navbar />
      <Hrmanager />
      <Box head="Module" />
      {modulbox}
      <Button />
      <Box head="Top Features" />
      <Features/>
      <Box head="Screenshot" />
      <div className="high">
        <Picture src="/images/Interview.png" />
        <Text />
      </div>
      <div className="high">
        <Text />
        <Picture src="/images/Remote.png" />
      </div>
      <Box head="Registration Form" />
      <div className="abhi">
        <Register />
        <Input/>
      </div>
      <Footer />
    </div>
  );
}
export default App;
