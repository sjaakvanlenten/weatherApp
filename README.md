# CityWeather
> Display temperatures for a given city in a chronological graph from an API endpoint.  
> Live expo demo [_here_](https://expo.dev/@sjaakvanlenten/weatherApp).

## Table of Contents
* [Technologies Used](#technologies-used)
* [Screenshots](#screenshots)
* [Architecture](#Architecture)

## Technologies Used
- React Native Expo - version 44.0
- React Navigation - version 6.0.10
- TypeScript - version 4.3.5
- Gifted Charts - version 1.0.16

## Screenshots
<p float="left">
<img src="./screenshots/homescreen.png" width="270" height="480">
<img src="./screenshots/city_example1.png" width="270" height="480">
<img src="./screenshots/city_example2.png" width="270" height="480">
</p>

## Architecture
For the overall folder structure I chose to keep my components, screens, contexts and utility functions in their own separate folders. I use an index file in the src folder
as the entry point for the app. The app component from my index file gets imported in the originial entry App.tsx file and exported from there like so.
The entire app gets wrapped inside an app-bootstrap component where it keeps showing the splash screen until all fonts are loaded and i18n translation is initialized.

Inside each of the individual folders (for example: components) there is an index.ts entry file that imports all the individual components and/or style files that live inside that components folder
and export them from there to be used elsewhere in the application. I installed a module resolver that will allow for my exported files to be imported with aliases elsewhere instead of typing the 
entire file path everytime. For example: import { Text } from "@components" will resolve to ".src/components" to my index entry point and from there to "./text/text".

React Navigation 6 is used for navigation. I keep the navigation component in a folder called config. This is where the navigation container is set up with 2 different screens inside a stack navigator.
Users can go from the home screen to the temperature details screen of a particular city by clicking one of the city items on the home screen. The navigation component gets imported in the
entry index file of the app where it is the final wrapped child component.

On the home screen the API gets called for the first time the component mounts. The received data gets transformed in a more usable format right away and from there saved in the async storage of the device.
For the context I made an AsyncStorage component inside the contexts directory wich defines the functions for getting and setting data from/in the async storage. The context provider is exported from there and wraps 
the app inside the entry index file of the app. The context itself is exported as a hook to be imported from the components that use it. Inside the components the individual state and getter/setter functions can be destructured from the hook call.

The user can easily grab new data by pulling the list or clicking the refresh button on the top of the home screen. If there is no internet connection or errors occur during fetching, the latest data from async storage will automatically be used by the app. The user will be notified that they need
to check their internet connection in such a case.

For the background a gradient-background component is used that is wrapped over the Home and Details Screen components. For every individual Details screen of a city, there is a corresponding gradient background by passing predefined color props to the 
gradient-background component for every city in the list. For the Home screen, default prop colors are used.  
Images get wrapped in a CachedImage component that checks if the picture uri of a city corresponds with an image file already in cache. 
If so the cached image will be used and otherwise the new picture will be downloaded to cache, so the next time the image has to be loaded it won't have to fetch from 
the uri again.

Utlity functions like sorting and transforming data are kept in their own respective files inside the utils folder. 
This is where also reusable type definitions are written and the unit tests for the individual utility functions.
