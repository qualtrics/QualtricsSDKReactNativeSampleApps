# Qualtrics React Native Sample App (Expo with React Navigation)

This is a React Native Expo application demonstrating integration with the Qualtrics Mobile SDK for surveys and app feedback.

## Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure your Qualtrics project**

   Edit `src/constans/QualtricsConfig.ts` and replace the placeholder values:

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

## Setting up the Intercept

We suggest testing the example applications using the Intercept with Display/Targeting Logic set up to:

> If View Count Total Views Greater Than or Equal to 1

That way, the intercept will show with every call of `registerViewVisit` making it easy to test.

You can check out the [Qualtrics Documentation](https://api.qualtrics.com/f23ebb864cba1-getting-started-with-react-native-sdk) for more information on how to set up the Display Logic.

## Key Files

### `src/integrations/QualtricsWrapper.ts`

TypeScript wrapper for Qualtrics SDK.

### `src/App.tsx`

Root application that:

- Configures Qualtrics project information
- Tracks route changes automatically
- Triggers evaluation on screen visits
