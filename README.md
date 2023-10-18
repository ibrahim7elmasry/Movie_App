# Movie App
![ios-home](https://github.com/ibrahim7elmasry/Movie_App/assets/19375545/0cb89b4d-709a-4d0b-a5af-843dd50d2f11)


![ios-details](https://github.com/ibrahim7elmasry/Movie_App/assets/19375545/a8626f89-3ae5-4e1e-bbb6-e545fcfe4f67)


![android-home](https://github.com/ibrahim7elmasry/Movie_App/assets/19375545/f0faa570-f5b0-4cd9-8fcb-714bb9f2fc2f)


![androis-details](https://github.com/ibrahim7elmasry/Movie_App/assets/19375545/65b1bf81-6eb5-4684-a16e-28a29826d276)


![ios-details](https://github.com/ibrahim7elmasry/Movie_App/assets/19375545/44b2c674-dd38-428f-82d0-3963edf932f4)

The Movie App is a React Native application that allows users to discover and explore a vast collection of movies. It fetches data from the [The Movie Database (TMDb) API](https://api.themoviedb.org/3/movie/popular?api_key=2509c15c1c1370bae35cf31052da581c&language=en-US&pag).

## Features

- Browsea a list of popular movies.
- View movie details including poster image, title, IMDb rating, year, and the release date.
- Works in offline mode by caching data.
- Handles error states for no data or offline connection.

## Installation

Please follow these steps to set up and run the app:

1. Clone this repository:
   git clone https://github.com/ibrahim7elmasry/Movie_App.git

2. Navigate to the project directory:
   cd Movie_App

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
   - Open the app and explore a list of popular movies.
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

   # Install APK: 
# Movie_App
