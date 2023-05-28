import { useState } from "react";

function useLocation(){

  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<{ latitude: number, longitude: number }>();

  async function getUserLocation(){
    setLoading(true);
    fetch('http://localhost:5265/location/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((data) => {
      if(data.status != 200)
       return undefined;
      return data.json();
    })
    .then((data) => {
      setLocation(data);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  async function registerUserByIP(){
    setLoading(true);
    fetch('http://localhost:5265/location/registerByIPAddress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      getUserLocation();
    })
    .finally(() => {
      setLoading(false);
    });
  }

  function registerByGeolocation(geolocationPosition: GeolocationPosition){
    setLoading(true);
    fetch('http://localhost:5265/location/registerByGeolocation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        latitude: geolocationPosition.coords.latitude,
        longitude: geolocationPosition.coords.longitude,
      })
    })
    .then(() => {
      getUserLocation();
    })
    .finally(() => {
      setLoading(false);
    });
  }

  function requestUserLocation(){
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(registerByGeolocation);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(registerByGeolocation, undefined, {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0,
            });
          }
        });
    }
  }

  return {
    loading,
    location,
    getUserLocation,
    registerUserByIP,
    requestUserLocation
  }
}

export default useLocation