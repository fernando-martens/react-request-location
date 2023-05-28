# Request location

![giphy (1)](https://github.com/fernando-martens/request-location/assets/63741837/53241c86-60af-42fc-8b70-9f879bd0894c)

This is a software project that consists of a frontend developed in React using the Vite library, along with a backend that provides a C# .NET API. The purpose of this project is to allow users to obtain latitude and longitude information, either through IP lookup or by requesting browser location.

## Features

- **IP Location Lookup:** Users have the option to enter an IP address and retrieve location information associated with that IP, including latitude and longitude.

- **Browser Location:** Users can also choose to use the browser's location request. By clicking the corresponding button, the system will prompt the user for permission to access their location information. Upon obtaining permission, the system will retrieve and display the latitude and longitude coordinates of the user's current location.

## Technologies Used

- **Frontend:**
  - React: A JavaScript library for building user interfaces.
  - Vite: A fast and lightweight build tool for React projects, providing an agile and efficient development environment.

- **Backend:**
  - C# .NET: A framework for developing applications, including APIs, using the C# language.
  
- **Location APIs:**
  - IPStack: We will use the IPStack API to retrieve location information based on a specific IP address. To use the API, you will need to sign up for an account and obtain an API key. You can find more information about IPStack and sign up for an API key at [https://ipstack.com/](https://ipstack.com/).
  - IPify: We will also use the IPify API to obtain the public IP address of the user. This will be used as a fallback option if the user does not provide an IP address. You can find more information about IPify at [https://www.ipify.org/](https://www.ipify.org/).


## Setup and Execution

To set up and run this project on your local environment, follow the steps below:

1. Clone this GitHub repository.

2. Ensure that you have Node.js and Yarn installed on your machine.

3. Navigate to the project directory in the terminal.

4. **Set up the frontend:**
   - Run the command `cd web` to enter the frontend directory.
   - Run the command `yarn` to install project dependencies.
   - Run the command `yarn dev` to start the frontend development server.

5. **Configure the backend:**
   - Open the `launchSettings.json` file in the backend directory.
   - Locate the `IPSTACK_KEY` environment variable and replace its value with your IPStack API key.
   - Save the file.

6. Open the project in Visual Studio.
   - Build and run the project using Visual Studio to start the backend API.

7. Once both the frontend and backend are running, you can access the application in your browser at [http://localhost:5173](http://localhost:5173).


<br> <br>

![image](https://github.com/fernando-martens/request-location/assets/63741837/403d933d-f867-46d0-8fa9-9cbaab42cc41)
