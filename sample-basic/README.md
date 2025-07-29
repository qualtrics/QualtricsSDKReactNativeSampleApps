# Qualtrics React Native Sample App (Basic)

This is a basic React Native application demonstrating integration with the Qualtrics Mobile SDK for surveys and app feedback.

## Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure your Qualtrics project**

   Edit `constans/QualtricsConfig.ts` and replace the placeholder values:

   ```typescript
   export const QualtricsProjectInfo = {
     brandID: '', // Replace with your actual Brand ID
     projectID: '', // Replace with your actual Project ID
   };

   export const interceptID = ''; // Replace with your Intercept ID
   ```

3. **Run the app**

   ```bash
   # Install pods for iOS
   cd ios && pod install && cd ..
   
   # Run on iOS simulator
   npx run ios
   
   # Run on Android emulator  
   npx run android
   ```

## Key Files

### `integrations/QualtricsWrapper.ts`

TypeScript wrapper for Qualtrics SDK.

### `App.tsx`

Root application that:

- Configures Qualtrics project information
- Triggers evaluation based on button click

## Setting up the Intercept

We suggest testing the example applications using the Intercept with Display/Targeting Logic set up to:

> If Time Spent in App Greater Than 10 Seconds

That way, the intercept will show when using the "Display Intercept" button after spending 10 seconds in the app.

You can check out the [Qualtrics Documentation](https://api.qualtrics.com/f23ebb864cba1-getting-started-with-react-native-sdk) for more information on how to set up the Display Logic.

## Issues / Support

For help on the Qualtrics SDK, you will want to reach out to our support team via our [Support Portal](https://www.qualtrics.com/support/). If you do not have a login, please work with your brand admin to file a support ticket.

We do not take support requests or community PRs through GitHub.
