# Testing Firebase Storage with Postman

This guide explains how to use the provided Postman collection to test Firebase Storage connectivity and diagnose CORS issues.

## Setup

1. **Install Postman**

   - Download and install from [postman.com](https://www.postman.com/downloads/)

2. **Import Collection**

   - Open Postman
   - Click "Import" button
   - Select the `firebase-storage-postman-collection.json` file

3. **Set Environment Variables**
   - Create a new environment (click "Environments" > "Create Environment")
   - Add these variables:
     - `image_filename`: A filename that exists in your blogs folder (e.g., "test-image.jpg")
     - `content_length`: Set to an approximate file size (e.g., "10000" for a 10KB file)
     - `upload_url`: Leave blank for now (will be filled during testing)

## Running Tests

### 1. List Objects in blogs folder

This request lists all objects in the blogs folder to verify read access.

1. Select the "List Objects in blogs folder" request
2. Click "Send"
3. Verify you get a 200 response with a list of files (or empty if no files exist)

**What to check:**

- Response status: Should be 200 OK
- Response headers: Look for `Access-Control-Allow-Origin` header
- Response body: Should contain a JSON object with "items" or "prefixes"

### 2. Check CORS preflight

This request simulates a browser's CORS preflight OPTIONS request.

1. Select the "Check CORS preflight" request
2. Click "Send"
3. Verify you get a 204 No Content response with CORS headers

**What to check:**

- Response status: Should be 204 No Content
- Response headers: Should include:
  - `Access-Control-Allow-Origin`
  - `Access-Control-Allow-Methods`
  - `Access-Control-Allow-Headers`

If these headers are missing, your CORS configuration is not working correctly.

### 3. Test Direct Upload

This is a two-step process that mimics how Firebase SDK uploads files.

#### Step 1: Initiate Upload

1. Select the "Test Direct Upload (Initiate)" request
2. Update the body JSON with proper metadata if needed
3. Click "Send"
4. Look for a 200 response with a "Location" header
5. Copy the full URL from the "Location" header

#### Step 2: Complete Upload

1. Select the "Test Direct Upload (Complete)" request
2. Paste the URL you copied into the `upload_url` variable
3. Click "Body" > "Select File" and choose a small test image
4. Click "Send"
5. Verify you get a 200 response with metadata about your uploaded file

### 4. Delete Test File

After testing, you can clean up by deleting the test file.

1. Select the "Delete Test File" request
2. Click "Send"
3. Verify you get a 204 No Content response

## Interpreting Results

### Successful Results

If all tests pass, you should see:

- 200 OK for listing and uploads
- 204 No Content for OPTIONS and DELETE
- Proper CORS headers in all responses
- No error messages

### Common Errors

1. **403 Forbidden**

   - Issue: Storage rules don't allow the operation
   - Solution: Update storage rules in Firebase console

2. **CORS Headers Missing**

   - Issue: CORS not configured correctly
   - Solution: Update and deploy CORS configuration

3. **404 Not Found**

   - Issue: Wrong bucket name or path
   - Solution: Double check your bucket name and file paths

4. **Network Error**
   - Issue: Connectivity problems
   - Solution: Check your internet connection and firewall settings

## Next Steps

If Postman tests work but browser uploads still fail:

1. Compare network requests in browser vs. Postman
2. Look for differences in headers or request format
3. Check for browser extensions that might be interfering
4. Try in an incognito/private browsing window

## Support

If you encounter issues not covered in this guide:

1. Check Firebase Storage documentation
2. Run the diagnostic script: `firebase-storage-diagnostic.bat`
3. Look for detailed error messages in browser console logs
