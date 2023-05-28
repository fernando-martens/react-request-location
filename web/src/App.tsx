import useLocation from './useLocation'

function App() {

  const { location, loading, registerUserByIP, requestUserLocation, getUserLocation } = useLocation();

  return (
    <>

      <div className='buttons'> 
        <button disabled={loading} onClick={getUserLocation}>Get user location</button>
        <button disabled={loading} onClick={registerUserByIP}>Request location by IP Address</button>
        <button disabled={loading} onClick={requestUserLocation}>Request location by browser</button>
      </div>

      {location && (
        <>
          <h2>Your current position is:</h2>
          <p>{`Latitude : ${location.latitude}`}</p>
          <p>{`Longitude: ${location.longitude}`}</p>
        </>
      )}
    </>
  )
}

export default App
