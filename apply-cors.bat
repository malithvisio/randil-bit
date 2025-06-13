@echo off
echo ===== Setting up Firebase Storage CORS Configuration =====
echo.

REM Check if gcloud is available
where gcloud >nul 2>&1
if %ERRORLEVEL% neq 0 (
  echo ERROR: gcloud command not found. Please install Google Cloud SDK.
  echo Visit https://cloud.google.com/sdk/docs/install for installation instructions.
  goto :EOF
)

echo Logging in to Google Cloud...
gcloud auth login

echo.
echo Setting project to randillanka-2cc47...
gcloud config set project randillanka-2cc47

echo.
echo Applying CORS configuration to Firebase Storage bucket...
gcloud storage buckets update gs://randillanka-2cc47.appspot.com --cors-file=firebase-cors.json

if %ERRORLEVEL% neq 0 (
  echo.
  echo ERROR: Failed to apply CORS configuration.
  echo Please check your permissions and try again.
) else (
  echo.
  echo CORS configuration successfully applied!
  echo.
  echo You can now upload files to Firebase Storage without CORS errors.
)

echo.
pause