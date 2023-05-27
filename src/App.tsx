import { useState } from 'react'
import useLocation from './useLocation'

function App() {

  const [location, setLocation] = useState<GeolocationPosition>()

  const { requestLocationUser } = useLocation()

  function handleClickRequestLocation(){
    requestLocationUser((geolocationPosition: GeolocationPosition) => {
      setLocation(geolocationPosition);
    });
  }

  return (
    <>

      <button onClick={handleClickRequestLocation}>Request location</button>

      {location && (
        <>
          <h2>Your current position is:</h2>
          <p>{`Latitude : ${location.coords.latitude}`}</p>
          <p>{`Longitude: ${location.coords.longitude}`}</p>
          <p>{`More or less ${location.coords.accuracy} meters.`}</p>
        </>
      )}
    </>
  )
}

export default App
