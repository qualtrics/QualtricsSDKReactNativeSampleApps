# Qualtrics React Native Sample App (Expo)

This is a React Native Expo application demonstrating integration with the Qualtrics Mobile SDK for surveys and app feedback.

## Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure your Qualtrics project**

   Edit `app/_layout.tsx` and replace the placeholder values:

   ```typescript
   Qualtrics.setProjectInfo({
     brandID: 'YOUR_BRAND_ID',      // From Qualtrics dashboard
     projectID: 'YOUR_PROJECT_ID',   // From Qualtrics dashboard  
     interceptID: 'YOUR_INTERCEPT_ID', // From your Mobile App Intercept
     extRefId: '', // Optional
   });
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

### `utils/QualtricsWrapper.ts`

TypeScript wrapper providing:

- Promise-based and callback-based APIs
- Automatic initialization management
- Type-safe interfaces
- Error handling

### `app/_layout.tsx`

Root application layout that:

- Configures Qualtrics project information
- Initializes SDK on app start
- Tracks route changes automatically
- Triggers evaluation on screen visits
