import GoogleMapReact from 'google-map-react';
import GoogleMapWrapper from './GoogleMapWrapper';

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
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_CONSENT_SCREEN as string}}
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

