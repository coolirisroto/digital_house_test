# Front end test documentation

## Folder Structure

```
.
├── src
│   ├── assets
│   │   ├── img
│   │   ├── fonts
│   │   │
│   ├── clients
│   │   ├── mockAPI
│   │   │
│   ├── components
│   │   ├── Button
│   │   ├── MoneyCard
│   │   ├── Product
│   │   │
│   ├── screens
│   │   ├── Home
│   │   ├── Detail
│   │   │
│   ├── styles
│   │   ├── colors
│   │   ├── family
│   │   │
│   ├── utils
│   │   ├── http
│   │   ├── date
│
```

#### All http requests should be made through the Http util.

## Unit Testing.

- Unit tests with [Jest](https://github.com/facebook/jest) and [react-native-testing-library](https://github.com/callstack/react-native-testing-library).
- Create Unit Testing for any implementation under the `__tests__` folder, for example `components/Button.test.tsx`.

## Typescript.

- Prefer Ambient declarations style.
- In components use type for state and props definitions.
- For global shared definitions use interfaces in the typing definition.
- For global shared enums use interfaces in the enums definition

## libraries

|                Library                | Usage | Coverage | License |
| :-----------------------------------: | :---: | :------: | :-----: |
|         axios                         |       |          |         |
|      classnames                       |       |          |         |
|        React Navigation               |       |          |         |


## UI components

|     Component     | Description |
| :---------------: | :---------: |
|     Button        |             |
|     MoneyCard     |             |
|     Product       |             |


## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

Demo 

https://streamable.com/3pim56



Home
![Simulator Screen Shot - iPhone 14 - 2023-04-21 at 15 02 29](https://user-images.githubusercontent.com/20715889/233725412-d51a8daa-8c26-4d9c-a05b-5cbed65ff709.png)

Filter
![Simulator Screen Shot - iPhone 14 - 2023-04-21 at 15 02 33](https://user-images.githubusercontent.com/20715889/233725428-6a2bb388-49b7-472c-af33-832108726fbf.png)

Detail
![Simulator Screen Shot - iPhone 14 - 2023-04-21 at 15 02 36](https://user-images.githubusercontent.com/20715889/233725439-f333de0b-1b90-4e01-9e34-db03274c8af9.png)

