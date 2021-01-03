import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
const containerStyle = {
  width: '100vw',
  height: '500px'
};

const center = {
  lat: 23.8773,
  lng: 90.3901
};
const mapContainerStyle = {
  height: "400px",
  width: "800px"
}


const position = {
  lat: 23.882250,
  lng: 90.391167
}

const onLoad = marker => {
  console.log('marker: ', marker)
}

class SimpleMap extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyDzKEzjSU_ImQH9pRsAZvrrbI0RW4W27jg"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
         <Marker
      onLoad={onLoad}
      position={position}
    />

          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default SimpleMap