# Firebase Storage CORS Configuration Guide

## CORS Error You're Seeing

You're getting an error like this in your browser console:

```
Access to XMLHttpRequest at 'https://firebasestorage.googleapis.com/v0/b/randillanka-2cc47.firebasestorage.app/o?name=blogs%2F1748563096513-wedding-card.jpg'
from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
```

## Root Causes Fixed

1. **Incorrect Storage Bucket Name**:

   - You were using `randillanka-2cc47.firebasestorage.app`
   - The correct format is `randillanka-2cc47.appspot.com`
   - This has been fixed in `libs/firebase.ts`

2. **Missing Storage Initialization**:
   - The storage instance wasn't properly initialized and exported
   - Fixed by adding proper initialization and export in `libs/firebase.ts`

## How to Apply CORS Configuration

### Option 1: Using the PowerShell Script (Recommended)

1. Open PowerShell as Administrator
2. Navigate to your project directory:
   ```powershell
   cd C:\Users\malit\OneDrive\Documents\GitHub\randil_lanka
   ```
3. Run the script:
   ```powershell
   .\apply-cors.ps1
   ```

### Option 2: Using the Batch File

1. Open Command Prompt as Administrator
2. Navigate to your project directory:
   ```cmd
   cd C:\Users\malit\OneDrive\Documents\GitHub\randil_lanka
   ```
3. Run the batch file:
   ```cmd
   apply-cors.bat
   ```

### Option 3: Manual Configuration with gcloud

1. Install Google Cloud SDK from https://cloud.google.com/sdk/docs/install
2. Open PowerShell or Command Prompt
3. Run these commands:
   ```powershell
   gcloud auth login
   gcloud config set project randillanka-2cc47
   gcloud storage buckets update gs://randillanka-2cc47.appspot.com --cors-file=firebase-cors.json
   ```

### Option 4: Firebase Console (Limited Configuration)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (randillanka-2cc47)
3. Go to Storage in the left menu
4. Click on "Rules" tab
5. Update the rules to allow read/write access to the blogs folder:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow read access on all files
    match /{allPaths=**} {
      allow read: if true;
    }

    // Allow write access specifically to blogs folder
    match /blogs/{fileName} {
      allow write: if true;
    }

    // Allow write access specifically to products folder
    match /products/{fileName} {
      allow write: if true;
    }
  }
}
```

## Verifying the Fix

After applying the CORS configuration:

1. Wait a few minutes for the settings to propagate
2. Clear your browser cache or use an incognito window
3. Try uploading an image in your blog post form
4. Check the browser console for any errors

## CORS Configuration Details

The CORS configuration in `firebase-cors.json` allows:

- Requests from any origin (`*`)
- HTTP methods: GET, PUT, POST, DELETE, HEAD, OPTIONS
- Various headers needed for file uploads

If you need a more restrictive setup later, you can modify this configuration to only allow specific origins.
