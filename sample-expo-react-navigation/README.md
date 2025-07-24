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

## Key Files

### `src/integrations/QualtricsWrapper.ts`

TypeScript wrapper for Qualtrics SDK.

### `src/App.tsx`

Root application that:

- Configures Qualtrics project information
- Tracks route changes automatically
- Triggers evaluation on screen visits
