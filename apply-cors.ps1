# Firebase CORS Configuration Script for PowerShell

Write-Host "===== Setting up Firebase Storage CORS Configuration =====" -ForegroundColor Cyan
Write-Host ""

# Check if gcloud is available
try {
    $gcloudVersion = gcloud --version
    Write-Host "Google Cloud SDK found:" -ForegroundColor Green
    Write-Host $gcloudVersion[0]
}
catch {
    Write-Host "ERROR: gcloud command not found. Please install Google Cloud SDK." -ForegroundColor Red
    Write-Host "Visit https://cloud.google.com/sdk/docs/install for installation instructions."
    Exit
}

Write-Host ""
Write-Host "Logging in to Google Cloud..." -ForegroundColor Yellow
gcloud auth login

Write-Host ""
Write-Host "Setting project to randillanka-2cc47..." -ForegroundColor Yellow
gcloud config set project randillanka-2cc47

Write-Host ""
Write-Host "Applying CORS configuration to Firebase Storage bucket..." -ForegroundColor Yellow
$result = gcloud storage buckets update gs://randillanka-2cc47.appspot.com --cors-file=firebase-cors.json

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Failed to apply CORS configuration." -ForegroundColor Red
    Write-Host "Please check your permissions and try again."
} else {
    Write-Host ""
    Write-Host "CORS configuration successfully applied!" -ForegroundColor Green
    Write-Host ""
    Write-Host "You can now upload files to Firebase Storage without CORS errors."
}

Write-Host ""
Write-Host "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
