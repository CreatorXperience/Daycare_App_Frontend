import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

type TAny = {
    lat:number,
    lng: number,
    text: string
}
const GoogleMap  = ()=>{
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
      const AnyReactComponent = ({ text }: TAny) => <div>{text}</div>;
    return (
        <GoogleMapWrapper>
        <div className="map-container" style={{ height: '200px', borderRadius: "10px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBKURk-fB0f1-rEuA6nlOjXo5qZrAkEV5U" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}

        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
        </GoogleMapWrapper>
    )
}

export default GoogleMap

const GoogleMapWrapper = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    .map-container {
        width: 90%;
        border-radius: 40px;
        overflow: hidden;
    }
`