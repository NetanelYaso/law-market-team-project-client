import "./Map.css";
import {
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import MapInfoWindow from "../MapInfoWindow/MapInfoWindow";
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  InfoWindowF,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useState } from "react";
import { useEffect } from "react";
// const GOOGLE_MAPS_API_KEY = 'AIzaSyBuymyezM5emJbmNyCmLLr3bLL7U3oMIu0'
// const center = { lat: 31.949181, lng: 34.893261 };
function Map({ address }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBuymyezM5emJbmNyCmLLr3bLL7U3oMIu0",
  });
  async function getGeocodeCoords(address) {
    const result = await geocodingLocationConvert(address);
    return {
      lat: result.results[0].geometry.location.lat(),
      lng: result.results[0].geometry.location.lng(),
    };
  }
  function geocodingLocationConvert(address) {
    return new window.google.maps.Geocoder().geocode({ address });
  }
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState(null);
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);
  const [directionResponse, setDirectionResponse] = useState(null);
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");
  useEffect(() => {
    async function startMap() {
      const temp = await getGeocodeCoords(address);
      setCenter(temp);
      if (!isLoaded) {
        return <div>Map cannot be loaded right now</div>;
      }
    }
    startMap();
  }, []);
  async function calculateRoute(userPosition) {
    if (!userPosition) return;
    console.log(userPosition, center);
    const directionService = new window.google.maps.DirectionsService();
    const result = await directionService.route({
      origin: userPosition,
      destination: center,
      travelMode: "DRIVING",
      provideRouteAlternatives: false,
    });
    setDirectionResponse(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDuration(result.routes[0].legs[0].duration.text);
  }
  const getPosition = () => {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  };
  const getCurrentLocation = async () => {
    const position = await getPosition();
    return { lat: position.coords.latitude, lng: position.coords.longitude };
  };
  return (
    <>
      <MDBContainer className="position-relative" id="map_container">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <MarkerF
            position={center}
            onClick={() => setInfoWindowVisible(!infoWindowVisible)}
          />
          {directionResponse && (
            <DirectionsRenderer directions={directionResponse} />
          )}
          {infoWindowVisible && (
            <InfoWindowF
              id="infowindow_con"
              position={center}
              onCloseClick={() => setInfoWindowVisible(!infoWindowVisible)}
            >
              <MDBContainer>
                <MapInfoWindow />
              </MDBContainer>
            </InfoWindowF>
          )}
        </GoogleMap>
        <MDBContainer
          id="on_map_elements"
          className="position-absolute bottom-0 start-50 w-50"
        >
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Direction Information</MDBCardTitle>
              <div className="d-flex justify-content-between">
                <span>Distance: {distance}</span>
                <span>Duration: {duration}</span>
                <MDBBtn
                  className="me-1"
                  color="danger"
                  onClick={async () => {
                    getCurrentLocation().then((location) =>
                      calculateRoute(location)
                    );
                  }}
                >
                  Calculate Route
                </MDBBtn>
              </div>
              <MDBBtn
                className="mx-1 position-absolute top-0 end-0"
                id="location-arrow"
                tag="a"
                color="secondry"
                floating
                onClick={() => map.panTo(center)}
              >
                <MDBIcon fas icon="location-arrow" />
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
    </>
  );
}

export default Map;
