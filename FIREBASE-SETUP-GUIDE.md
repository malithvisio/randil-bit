# Firebase Storage Setup Guide

## Quick Fix for CORS Issues

1. **Fix your Firebase configuration**:

   Open `libs/firebase.ts` and make sure your bucket name is correct:

   ```typescript
   storageBucket: "randillanka-2cc47.appspot.com",
   ```

   Not:

   ```typescript
   storageBucket: "randillanka-2cc47.firebasestorage.app",
   ```

2. **Apply CORS settings**:

   ```powershell
   # Open PowerShell and run
   .\apply-cors.ps1
   ```

3. **Update Firebase Storage Rules**:

   Go to Firebase Console > Storage > Rules and paste the content from `firebase-storage-rules.txt`

## Complete Firebase Storage Setup

### 1. Firebase Configuration (`libs/firebase.ts`)

Ensure your Firebase config has these settings:

```typescript
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4Aeu_GOvef2sUaUjoYfQv3ub-VTC-OhM",
  authDomain: "randillanka-2cc47.firebaseapp.com",
  projectId: "randillanka-2cc47",
  storageBucket: "randillanka-2cc47.appspot.com", // Correct format
  messagingSenderId: "132554188377",
  appId: "1:132554188377:web:409d2e8634ab8a14b63348",
  measurementId: "G-RR71FPWC4S",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Storage
const storage = getStorage(firebaseApp);

// Export the storage instance
export { storage };
export default firebaseApp;
```

### 2. Firebase Storage Rules

Go to [Firebase Console](https://console.firebase.google.com/), select your project, go to Storage > Rules, and paste:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow read access to all files for all users
    match /{allPaths=**} {
      allow read: if true;
    }

    // Allow write access to blog images
    match /blogs/{imageId} {
      allow write: if true;
    }

    // Allow write access to product images
    match /products/{imageId} {
      allow write: if true;
    }

    // Allow write access to test files
    match /test-uploads/{fileName} {
      allow write: if true;
    }
  }
}
```

### 3. CORS Configuration

1. Create a file named `firebase-cors.json` with:

```json
[
  {
    "origin": ["*"],
    "method": ["GET", "PUT", "POST", "DELETE", "HEAD", "OPTIONS"],
    "maxAgeSeconds": 3600,
    "responseHeader": [
      "Content-Type",
      "Content-Length",
      "Content-Range",
      "Content-Encoding",
      "Content-Location",
      "Cache-Control",
      "ETag",
      "Last-Modified",
      "Accept",
      "Origin",
      "X-Requested-With",
      "Authorization"
    ]
  }
]
```

2. Apply this configuration using gcloud:

```powershell
gcloud auth login
gcloud config set project randillanka-2cc47
gcloud storage buckets update gs://randillanka-2cc47.appspot.com --cors-file=firebase-cors.json
```

### 4. Testing Your Setup

1. Visit `/firebase-test-cors` in your application
2. Upload a test file
3. Verify it uploads without CORS errors

### 5. Troubleshooting

If you still see CORS errors:

1. Check browser console for specific error messages
2. Verify storage bucket name is correct
3. Make sure CORS settings have been applied (wait 5-10 minutes)
4. Try clearing browser cache or using incognito mode
5. Restart your Next.js development server
