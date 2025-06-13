// A Node.js script to apply CORS settings to Firebase Storage using the Firebase Admin SDK
const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

// Path to your Firebase service account credentials file
// You need to download this from Firebase Console -> Project Settings -> Service Accounts
const serviceAccountPath = path.join(
  __dirname,
  "firebase-service-account.json"
);

// Check if the service account file exists
if (!fs.existsSync(serviceAccountPath)) {
  console.error("Error: Service account file not found at", serviceAccountPath);
  console.log("Please download your service account key from:");
  console.log(
    "Firebase Console -> Project Settings -> Service Accounts -> Generate new private key"
  );
  console.log(
    'Save the file as "firebase-service-account.json" in the project root directory.'
  );
  process.exit(1);
}

// Load the service account key
const serviceAccount = require(serviceAccountPath);

// Initialize Firebase Admin SDK with your credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "randillanka-2cc47.appspot.com",
});

// Load CORS configuration
const corsConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, "firebase-cors.json"), "utf8")
);

console.log("Applying CORS configuration to Firebase Storage bucket...");
console.log("CORS Config:", JSON.stringify(corsConfig, null, 2));

// Get a reference to the storage bucket
const bucket = admin.storage().bucket();

// Apply CORS configuration
bucket
  .setCorsConfiguration(corsConfig)
  .then(() => {
    console.log("✅ CORS configuration successfully applied!");
    console.log(
      "You can now upload files to Firebase Storage without CORS errors."
    );
  })
  .catch((error) => {
    console.error("❌ Error applying CORS configuration:", error);
  });
