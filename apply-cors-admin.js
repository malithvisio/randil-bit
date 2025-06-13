/**
 * Firebase CORS Configuration Helper
 *
 * This script applies CORS configuration to your Firebase Storage bucket
 * using the Firebase Admin SDK (doesn't require gcloud)
 */

const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

// Path to the service account key file
// You'll need to download this from Firebase Console > Project Settings > Service Accounts
const SERVICE_ACCOUNT_PATH = path.join(
  __dirname,
  "firebase-service-account-key.json"
);

// Check if service account file exists
if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
  console.error("\x1b[31mERROR: Service account key file not found.\x1b[0m");
  console.log(
    "Please download your service account key from Firebase Console:"
  );
  console.log(
    "1. Go to Firebase Console > Project Settings > Service Accounts"
  );
  console.log('2. Click "Generate new private key"');
  console.log(
    '3. Save the file as "firebase-service-account-key.json" in this directory'
  );
  process.exit(1);
}

// Initialize Firebase Admin
try {
  admin.initializeApp({
    credential: admin.credential.cert(SERVICE_ACCOUNT_PATH),
  });
  console.log("\x1b[32mFirebase Admin SDK initialized successfully.\x1b[0m");
} catch (error) {
  console.error(
    "\x1b[31mERROR: Failed to initialize Firebase Admin SDK:\x1b[0m",
    error.message
  );
  process.exit(1);
}

// Read CORS configuration
const corsFilePath = path.join(__dirname, "firebase-cors.json");
let corsConfig;

try {
  const corsFileContent = fs.readFileSync(corsFilePath, "utf8");
  corsConfig = JSON.parse(corsFileContent);
  console.log("\x1b[32mCORS configuration loaded successfully.\x1b[0m");
} catch (error) {
  console.error(
    "\x1b[31mERROR: Failed to read CORS configuration file:\x1b[0m",
    error.message
  );
  process.exit(1);
}

// Function to apply CORS configuration
async function applyCorsConfiguration() {
  try {
    const bucket = admin.storage().bucket("randillanka-2cc47.appspot.com");
    console.log("\x1b[33mApplying CORS configuration to bucket...\x1b[0m");

    await bucket.setCorsConfiguration(corsConfig);

    console.log("\x1b[32mCORS configuration applied successfully!\x1b[0m");
    console.log(
      "\x1b[32mYou can now upload files to Firebase Storage without CORS errors.\x1b[0m"
    );
  } catch (error) {
    console.error(
      "\x1b[31mERROR: Failed to apply CORS configuration:\x1b[0m",
      error.message
    );
    if (error.message.includes("permission")) {
      console.log(
        "\x1b[33mThis might be a permission issue. Make sure your service account has Storage Admin role.\x1b[0m"
      );
    }
    process.exit(1);
  }
}

// Apply the configuration
applyCorsConfiguration();
