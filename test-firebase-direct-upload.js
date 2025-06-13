/**
 * Firebase Storage Direct Upload Test
 *
 * This script tests direct uploads to Firebase Storage without going through the app.
 * It helps diagnose if issues are with Firebase configuration or with the application code.
 *
 * Usage:
 * 1. Run with Node.js: node test-firebase-direct-upload.js
 * 2. Check console output for results
 */

// Import Firebase modules
const { initializeApp } = require("firebase/app");
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} = require("firebase/storage");
const fs = require("fs");
const path = require("path");

// Firebase configuration - same as in your app
const firebaseConfig = {
  apiKey: "AIzaSyD4Aeu_GOvef2sUaUjoYfQv3ub-VTC-OhM",
  authDomain: "randillanka-2cc47.firebaseapp.com",
  projectId: "randillanka-2cc47",
  storageBucket: "randillanka-2cc47.appspot.com", // Using correct appspot.com format
  messagingSenderId: "132554188377",
  appId: "1:132554188377:web:409d2e8634ab8a14b63348",
  measurementId: "G-RR71FPWC4S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

console.log(
  `🔥 Firebase initialized with bucket: ${storage.app.options.storageBucket}`
);

// Test image path - change this to a small test image on your system
const TEST_IMAGE_PATH = path.join(
  __dirname,
  "public",
  "assets",
  "images",
  "logo.png"
);
// If the test image doesn't exist, you'll need to provide a path to an existing image

// Function to list files in a folder
async function listFiles(folderPath) {
  console.log(`\n📂 Listing files in folder: ${folderPath}`);

  try {
    const folderRef = ref(storage, folderPath);
    const result = await listAll(folderRef);

    console.log(`✅ Found ${result.items.length} files in ${folderPath}:`);
    result.items.forEach((item, index) => {
      console.log(`  ${index + 1}. ${item.name} (${item.fullPath})`);
    });

    if (result.prefixes.length > 0) {
      console.log(`📁 Found ${result.prefixes.length} subfolders:`);
      result.prefixes.forEach((prefix, index) => {
        console.log(`  ${index + 1}. ${prefix.name}`);
      });
    }

    return result;
  } catch (error) {
    console.error(`❌ Error listing files in ${folderPath}:`, error);
    console.error(`   Error code: ${error.code}`);
    console.error(`   Error message: ${error.message}`);
    if (error.serverResponse) {
      console.error(`   Server response: ${error.serverResponse}`);
    }
    throw error;
  }
}

// Function to upload a test file
async function uploadTestFile() {
  console.log(`\n⬆️ Uploading test file: ${TEST_IMAGE_PATH}`);

  try {
    // Check if test file exists
    if (!fs.existsSync(TEST_IMAGE_PATH)) {
      console.error(`❌ Test image not found at: ${TEST_IMAGE_PATH}`);
      console.log(
        `   Please modify the TEST_IMAGE_PATH variable to point to an existing image.`
      );
      return null;
    }

    // Read the file
    const fileBuffer = fs.readFileSync(TEST_IMAGE_PATH);
    const fileStats = fs.statSync(TEST_IMAGE_PATH);
    const fileExtension = path.extname(TEST_IMAGE_PATH);

    console.log(`📝 File details:`);
    console.log(`   Size: ${(fileStats.size / 1024).toFixed(2)} KB`);
    console.log(`   Type: ${fileExtension}`);

    // Create a unique filename
    const timestamp = new Date().getTime();
    const fileName = `test-direct-${timestamp}${fileExtension}`;
    const destinationPath = `test-direct/${fileName}`;

    console.log(`📝 Uploading to: ${destinationPath}`);

    // Create storage reference
    const storageRef = ref(storage, destinationPath);

    // Set up metadata
    const metadata = {
      contentType:
        fileExtension === ".png"
          ? "image/png"
          : fileExtension === ".jpg" || fileExtension === ".jpeg"
          ? "image/jpeg"
          : fileExtension === ".gif"
          ? "image/gif"
          : "application/octet-stream",
      customMetadata: {
        uploadedBy: "test-script",
        uploadedAt: new Date().toISOString(),
      },
    };

    console.log(`📝 Using metadata:`, metadata);

    // Upload file
    console.time("Upload duration");
    const snapshot = await uploadBytes(storageRef, fileBuffer, metadata);
    console.timeEnd("Upload duration");

    console.log(`✅ Upload successful!`);
    console.log(`📝 File stored at: ${snapshot.ref.fullPath}`);

    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log(`🔗 Download URL: ${downloadURL}`);

    return {
      path: snapshot.ref.fullPath,
      url: downloadURL,
      metadata: snapshot.metadata,
    };
  } catch (error) {
    console.error(`❌ Upload failed:`, error);
    console.error(`   Error code: ${error.code}`);
    console.error(`   Error message: ${error.message}`);
    if (error.serverResponse) {
      console.error(`   Server response: ${error.serverResponse}`);
    }
    throw error;
  }
}

// Run the tests
async function runTests() {
  console.log(`\n🧪 Starting Firebase Storage tests...\n`);
  console.log(`⏱️ Time: ${new Date().toISOString()}`);

  try {
    // First, list existing files in blogs folder
    await listFiles("blogs");

    // Upload a test file
    const uploadResult = await uploadTestFile();

    if (uploadResult) {
      console.log(`\n✅ Test completed successfully!`);
      console.log(
        `   Your Firebase Storage is working correctly from a Node.js environment.`
      );
      console.log(
        `   If uploads are failing in the browser but working here, it's likely a CORS issue.`
      );
    }
  } catch (error) {
    console.error(`\n❌ Tests failed:`, error);
    console.log(`\n🔍 Troubleshooting suggestions:`);

    if (error.code === "storage/unauthorized") {
      console.log(
        `   - Check your Firebase Storage Rules in the Firebase console`
      );
      console.log(`   - Ensure the 'test-direct' folder has write permissions`);
    } else if (error.code === "storage/canceled") {
      console.log(
        `   - The upload was canceled - check your network connection`
      );
    } else if (error.code === "storage/unknown") {
      console.log(
        `   - Unknown error - check Firebase console for more details`
      );
      console.log(`   - Verify your Firebase project is properly set up`);
    } else {
      console.log(`   - Check your Firebase configuration`);
      console.log(`   - Verify internet connectivity`);
      console.log(`   - Check Firebase console for service disruptions`);
    }
  }
}

// Run the tests
runTests();
