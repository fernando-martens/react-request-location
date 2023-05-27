function useLocation(){

  function errors(err: GeolocationPositionError) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }


  function requestLocationUser(callbackSucess: (geolocationPosition: GeolocationPosition) => void){
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(callbackSucess);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(callbackSucess, errors, {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0,
            });
          }
        });
    }
  }
  return {
    requestLocationUser,
  }
}

export default useLocation