import Button from "./components/Button";
import DiscountCard from "./components/DiscountCard";
import SafetyCard from "./components/SafetyCard";
import ChildProfile from "./components/ChildProfile";
import TeacherProfile from "./components/TeacherProfile";
import NameInput from "./components/NameInput";
import NavBarIcon from "./components/NavBarIcons";
import UserNameInput from "./components/UserNameInput";
import CaretLeft from "./components/CaretLeft";
import MapDetailsNotification from "./components/MapDetailsNotification";
import HelloUser from "./components/HelloUser";

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

  let profileContent = {
    profileName: "Mary joe",
    profileAge: "8 Years Old",
    profileRating: "",
    profileDistance: "60min Away",
  };

  return (
    <div className="App">
      <Button text="Login" />
      <SafetyCard data={contentBlue} />
      <DiscountCard dataGreen={contentGreen} />
      <ChildProfile profileData={profileContent} />
      <TeacherProfile />
      <NameInput />
      <NavBarIcon />
      <UserNameInput />
      <CaretLeft />
      <MapDetailsNotification />
      <HelloUser/>
    </div>
  );
}

export default App;
