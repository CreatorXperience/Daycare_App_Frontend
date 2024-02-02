import Button from "./components/Button";
import DiscountCard from "./components/DiscountCard";
import Profile from "./components/Profile";
import SafetyCard from "./components/SafetyCard";

function App() {
  let contentBlue = {
    percentage: "100%",
    message: "Your Child Safety",
    desc: "trust your child with us your child safety is our priority",
  };
  let contentGreen = {
    image: "",
    message: "Register and get Discount up to",
    desc: "30%",
  };

  return (
    <div className="App">
      <Button text="Login" />
      <SafetyCard data={contentBlue} />
      <DiscountCard dataGreen={contentGreen} />
      <Profile/>
    </div>
  );
}

export default App;
