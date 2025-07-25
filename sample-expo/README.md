# Qualtrics React Native Sample App (Expo)

This is a React Native Expo application demonstrating integration with the Qualtrics Mobile SDK for surveys and app feedback.

## Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure your Qualtrics project**

   Edit `constants/QualtricsConfig.ts` and replace the placeholder values:

   ```typescript
    export const QualtricsProjectInfo = {
      brandID: '', // Replace with your actual Brand ID
      projectID: '', // Replace with your actual Project ID\
      extRefId: '', // Optional external reference ID
    };
   ```

3. **Run the app**

   ```bash

   # Start development server
   npx expo start
   
   # Run on iOS simulator
   npx expo run:ios
   
   # Run on Android emulator  
   npx expo run:android
   ```

## Key Files

### `src/integrations/QualtricsWrapper.ts`

TypeScript wrapper for Qualtrics SDK.

### `app/_layout.tsx`

Root application layout that:

- Configures Qualtrics project information
- Initializes SDK on app start
- Tracks route changes automatically
- Triggers evaluation on screen visits

## Setting up the Intercept

We suggest testing the example applications using the Intercept with Display/Targeting Logic set up to:

> If View Count Total Views Greater Than or Equal to 1

That way, the intercept will show with every call of `registerViewVisit` making it easy to test.

You can check out the [Qualtrics Documentation](https://api.qualtrics.com/f23ebb864cba1-getting-started-with-react-native-sdk) for more information on how to set up the Display Logic.

## Issues / Support

For help on the Qualtrics SDK, you will want to reach out to our support team via our [Support Portal](https://www.qualtrics.com/support/). If you do not have a login, please work with your brand admin to file a support ticket.

We do not take support requests or community PRs through GitHub.
