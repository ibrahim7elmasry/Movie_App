# Movie App
![iOS - Home](https://github.com/ibrahim7elmasry/MovieApp/assets/19375545/e2f1a4c4-e838-4052-b94e-b5db4632366b)

![iOS - Movie Details](https://github.com/ibrahim7elmasry/MovieApp/assets/19375545/49b147c6-9614-448a-a9f1-80ee69d93dbd)

![Android -  Home](https://github.com/ibrahim7elmasry/MovieApp/assets/19375545/1dfd68da-a5cb-47e5-9c70-9aa071988869)

![Android - Movie Details](https://github.com/ibrahim7elmasry/MovieApp/assets/19375545/cc34b5e0-ac06-427b-84bf-2fd38118762c)

The Movie App is a React Native application that allows users to discover and explore a vast collection of movies. It fetches data from the [The Movie Database (TMDb) API](http://api.themoviedb.org/3/discover/movie?api_key=2509c15c1c1370bae35cf31052da581c).

## Features

- Browse a list of movies.
- View movie details including poster image, title, IMDb rating, year, and the release date.
- Works in offline mode by caching data.
- Handles error states for no data or offline connection.

## Installation

Please follow these steps to set up and run the app:

1. Clone this repository:
   git clone https://github.com/ibrahim7elmasry/MovieApp.git

2. Navigate to the project directory:
   cd MovieApp

3. Install dependencies:
   npm install 
   # or
   yarn install

4. Start the development server:
   npm start 
   # or
   yarn start

5. Run the app on your preferred platform (iOS/Android):

   npm run ios -> for iOS platform
   # or
   npm run android -> for android platform

## Usage
   - Open the app and explore a list of movies.
   - Click on a movie to view its details, including poster image, title, IMDb rating, year, and release date.
   - Use the app in offline mode to access cached data.


## Build and Deployment Instructions
 # iOS
To build and deploy the app on iOS, follow these steps:
1. Make sure you have Xcode installed.
2. Open the project in Xcode:
   - cd ios
   - open MovieApp.xcworkspace  

3. Configure your development team in Xcode.
4. Build and run the app using Xcode's simulator or a physical iOS device.

 # Android
To build and deploy the app on Android, follow these steps:
   1. Make sure you have Android Studio and the Android SDK installed.
   2. Open the project in Android Studio.
   3. Build and run the app using the Android emulator or a physical Android device.

   ## Run unit test
   1. npx jest --all --watch 
   # or 
   npm test
# Movie_App
