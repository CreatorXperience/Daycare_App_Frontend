import styled from "styled-components";
import notificationbell from "../../constants/images/notificationBell.png";

const MapDetailsNotification = () => {
  return (
    <MapDetailsWrapper>
      <div className="map-details-container">
        <h1>Map Details</h1>
        <div className="image">
          <img src={notificationbell} alt={notificationbell} />
        </div>
      </div>
    </MapDetailsWrapper>
  );
};

export default MapDetailsNotification;

const MapDetailsWrapper =styled.div`
    .map-details-container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        place-items: center;
        padding: 10px;
    }
`
