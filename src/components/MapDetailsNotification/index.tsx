import ICONS from "../../constants/icons";
import HeaderWrapper from "./MapDetailsWrapper";

const MapDetailsNotification = () => {
  return (
    <HeaderWrapper>
      <div className="map-details-container">
        <div className="header-text">Map Details</div>
        <div className="image">
        {ICONS.bellIcon()}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default MapDetailsNotification;


