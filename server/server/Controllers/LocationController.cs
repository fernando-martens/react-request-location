using Microsoft.AspNetCore.Mvc;
using server.Business;
using server.Models;
using System.Net;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LocationController : ControllerBase
    {

        [HttpGet]
        [Route("Get")]
        public IActionResult Get()
        {
            return Ok(new LocationBusiness().GetGeolocation());
        }

        [HttpPost]
        [Route("RegisterByIPAddress")]
        public IActionResult RegisterByIPAddress()
        {
            return Ok(new LocationBusiness().RegisterByIPAddress(HttpContext.Connection.RemoteIpAddress).Result);
        }

        [HttpPost]
        [Route("RegisterByGeolocation")]
        public IActionResult RegisterByGeolocation([FromBody] GeolocationModel geolocationModel)
        {
            new LocationBusiness().RegisterByGeolocation(geolocationModel);
            return Ok();
        }

    }
}