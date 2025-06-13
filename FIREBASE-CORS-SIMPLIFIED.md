# Firebase Storage CORS Setup Guide

This guide will help you configure CORS (Cross-Origin Resource Sharing) for Firebase Storage to allow uploads from your Next.js application.

## Step 1: Install Required Dependencies

Run the following command to install Firebase Admin SDK:

```bash
npm install firebase-admin --save-dev
```

## Step 2: Get Firebase Service Account Key

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project `randillanka-2cc47`
3. Go to Project Settings (gear icon) > Service accounts
4. Click "Generate new private key"
5. Save the downloaded file as `firebase-service-account.json` in your project root directory

## Step 3: Run the CORS Configuration Script

```bash
node firebase-cors-setup.js
```

If successful, you'll see: "✅ CORS configuration successfully applied!"

## Step 4: Test the Upload

1. Navigate to http://localhost:3000/firebase-test-cors
2. Select a file and try to upload
3. Check the logs to ensure there are no CORS errors

## Troubleshooting

If you still encounter CORS issues:

1. Make sure you're using the correct storage bucket name:

   - It should be `randillanka-2cc47.appspot.com` (not `.firebasestorage.app`)

2. Verify your Firebase configuration in `libs/firebase.ts`

3. Check browser console for detailed error messages

4. For testing uploads, use smaller images (< 1MB)

## Alternative Approach

If the above method doesn't work, you can use the Firebase CLI:

```bash
# Install Firebase CLI if not already installed
npm install -g firebase-tools

# Login to Firebase
firebase login

# Run this command to set CORS configuration
firebase init storage
firebase deploy --only storage
```

## Learn More

- [Firebase Storage CORS Configuration](https://firebase.google.com/docs/storage/web/download-files#cors_configuration)
- [Firebase Admin SDK Documentation](https://firebase.google.com/docs/admin/setup)
