# uber_clone

## reference

- [Vadim Savin - Build the Uber clone in React Native (Tutorial for Beginners)](https://www.youtube.com/watch?v=sIRcN0MeZVU)
- [Vadim Savin - Build the Uber clone in React Native (Tutorial for Beginners) [2]](https://www.youtube.com/watch?v=_U4zgWcw2Ws)

## dependencies

- [React-Native-CLI](https://reactnative.dev/docs/environment-setup)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-google-places-autocomplete](https://github.com/FaridSafi/react-native-google-places-autocomplete)
- [react-native-maps](https://github.com/react-native-maps/react-native-maps)
- [react-native-maps-directions](https://github.com/bramus/react-native-maps-directions)

## init

- Chocolatey : openjdk8
- 환경변수 : JAVA_HOME, ANDROID_HOME, path 등록.

```sh
> npx react-native init Uber

> cd Uber
> yarn start

// New Terminal
> yarn android
```

### [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

```
> yarn add react-native-vector-icons
```

```js
// android : add to the android/app/build.gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

### [react-native-google-places-autocomplete](https://github.com/FaridSafi/react-native-google-places-autocomplete)

```sh
> yarn add react-native-google-places-autocomplete
```

- google APIs : Places API

### [react-native-maps](https://github.com/react-native-maps/react-native-maps)

- [installation](https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md)

```sh
> yarn add react-native-maps -E
```

- "react-native": "0.63.4", Build configuration on Android

```sh
//! android/build.gradle
...
buildscript {
    ext {
        ...
        playServicesVersion = "17.0.0" // or find latest version
        androidMapsUtilsVersion = "2.2.0"
    }
}
...


//! android/app/src/main/AndroidManifest.xml
<application>
    //# You will only need to add this meta-data tag, but make sure it's a child of application
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>

    //# You will also only need to add this uses-library tag
   <uses-library android:name="org.apache.http.legacy" android:required="false"/>
</application>
```

### [react-native-maps-directions](https://github.com/bramus/react-native-maps-directions)

```sh
> yarn add react-native-maps-directions
```

- GoogleAPIs : Directions API

### Maps: Marker direction

- Rotate the cars in the direction of their movement
  - make sure all images (assets) are facing up

### Places Autocomplete styles

### Places Autocomplete Current Location

- [react-native-geolocation/react-native-geolocation](https://github.com/react-native-geolocation/react-native-geolocation)

  - install geolocation

  ```
  > yarn add @react-native-community/geolocation
  ```

  - request permission to use location
  - use the location in places autocomplete component
  - add predefined location (HOME, WORK)?

### [React Navigation](https://reactnavigation.org/docs/getting-started)

- Install React-Navigation library and follow the installation guide

```
> yarn add @react-navigation/native

> yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

- Defined all the screens in a Stack Navigator
- Implement the Navigation between screens
- Send data between screens

### Drawer Navigation(Hamburger Menu)

- install Drawer Navigation package
- Setup Basic Drawer Navigation
- Customize the Drawer Navigation

### [Setup AWS Amplify Project](https://docs.amplify.aws/start/q/integration/react-native?sc_icampaign=react-native-start&sc_ichannel=choose-integration)

```
> amplify init

> Choose your default editor : None
> Choose the type of app that you`re building : javascript
> What javascript framework are tou using : react-native
> Source Directory Paths : /

> yarn add aws-amplify aws-amplify-react-native amazon-cognito-identity-js @react-native-community/netinfo
```

- Configure the App.js

```js
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
```

### Authentication

<img src="./image/1.png" width="100%" height="100%" alt="typescript-logo"></img>

### try

- where from? : current location
- where to? : 1750 lundy avenue, san jose, ca

## Error

- 1. jdk 설치 문제
  - oracle || openjdk
  - 기존 설치된 oracle은 jre만 있음
  - Chocolatey : openjdk8 설치로 해결
