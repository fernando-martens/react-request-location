using Newtonsoft.Json;
using System.Net;

namespace server.Utils
{
    public static class IpAddressUtil
    {

        public async static Task<string> GetIpAddress(IPAddress? ipAddress)
        {
            if (ipAddress == null || IsCurrentMachineIpAddress(ipAddress))
                return await GetPublicIpAddress();
            else
                return ipAddress.ToString();
        }

        private static async Task<string> GetPublicIpAddress()
        {
            using (HttpClient client = new HttpClient())
            {
                try
                {
                    HttpResponseMessage response = await client.GetAsync("https://api.ipify.org");
                    response.EnsureSuccessStatusCode();

                    string result = await response.Content.ReadAsStringAsync();

                    return result;

                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: " + ex.Message);
                }
            }

            return string.Empty;
        }

        private static bool IsCurrentMachineIpAddress(IPAddress iPAddress)
        {
            string? localIpAddress = Dns.GetHostEntry(Dns.GetHostName())
                                        .AddressList
                                        ?.FirstOrDefault(ip => ip.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork)
                                        ?.ToString();

            string? remoteIpAddress = iPAddress?.ToString();

            bool isCurrentMachine = remoteIpAddress == "::1" || remoteIpAddress == "10.0.0.7" || remoteIpAddress == localIpAddress;

            return isCurrentMachine;
        }

    }
}
