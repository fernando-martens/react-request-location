using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using server.Models;
using System.Net;
using System.Text.Json;

namespace server.Business
{
    public class LocationBusiness
    {

        public static GeolocationModel? geolocationModel { get; set; }


        public GeolocationModel? GetGeolocation()
        {
            return geolocationModel;
        }

        public async Task<GeolocationModel?> RegisterByIPAddress(IPAddress? ipAddress)
        {

            string ipToFind = await IpAddressUtil.GetIpAddress(ipAddress);

             HttpClient client = new HttpClient();

            string apiUrl = $"http://api.ipstack.com/{ipToFind}?access_key={Environment.GetEnvironmentVariable("IPSTACK_KEY")}";
            HttpResponseMessage response = await client.GetAsync(apiUrl);

            string responseContent = await response.Content.ReadAsStringAsync();

            JObject json = JObject.Parse(responseContent);

            double? latitude = json?["latitude"]?.Value<double>();
            double? longitude = json?["longitude"]?.Value<double>();


            if (latitude == null || longitude == null)
                return null;

            GeolocationModel geolocation = new GeolocationModel()
            {
                Latitude = latitude ?? 0,
                Longitude = longitude ?? 0,
            };

            geolocationModel = geolocation;


            return geolocation;
        }

        public void RegisterByGeolocation(GeolocationModel model)
        {
            geolocationModel = model;
        }

    }
}
