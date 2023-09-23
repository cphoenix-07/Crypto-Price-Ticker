# Crypto Price Ticker
 
Certainly! To set up and run an Expo project with the real-time price ticker component locally and demonstrate real-time updates, follow these steps:

**Step 1: Create a New Expo Project**

If you haven't already installed Expo CLI, you can install it globally with npm:

```bash
npm install -g expo-cli
```

1. Create a new Expo project by running the following command:

```bash
expo init RealTimePriceTicker
```

Follow the prompts to choose a template and project settings.

2. Navigate to the project directory:

```bash
cd RealTimePriceTicker
```

**Step 2: Install Dependencies**

1. Install Axios for making API requests and React Native Paper for UI components:

```bash
npm install axios react-native-paper
```

**Step 3: Replace App.js Content**

Replace the content of the `App.js` file in your project directory with the updated code provided earlier.

**Step 4: Start the Expo Development Server**

Start the Expo development server by running:

```bash
expo start
```

This will open the Expo DevTools in your web browser and display a QR code.

**Step 5: Run the App on a Device or Emulator**

- To run the app on your physical device, install the "Expo Go" app from your device's app store, scan the QR code in the Expo DevTools, and the app will load on your device.
- To run the app on an Android or iOS emulator, follow the instructions provided by Expo for your specific platform.

**Step 6: Demonstrate Real-Time Updates**

1. With the app running on your device or emulator, you will see the Real-Time Price Ticker on the home screen.
2. The app will automatically fetch and display the latest cryptocurrency price data.
3. The prices will be updated every 60 seconds, as specified in the code.

**Step 7: Demo Video/GIF**

![image](https://github.com/cphoenix-07/Crypto-Price-Ticker/assets/71826054/7fdeea4a-2f97-4552-919e-a1057ec52251)

To generate an Expo share link, follow these steps:

1. In the Expo DevTools that open in your browser, you'll see options to share your project.
2. Select the share option and follow the prompts to generate a link.
3. Share the link with others, and they can open it in the Expo Go app on their devices to see your app in real-time.

Now, you have set up, run, and demonstrated the real-time price ticker component in your Expo project.
