# Firebase Storage Diagnostic Tool
# This script helps diagnose Firebase Storage connectivity and CORS issues

# Set console color for better readability
$host.UI.RawUI.ForegroundColor = "White"

function Write-ColorOutput {
    param (
        [Parameter(Mandatory = $true)]
        [string]$Message,
        
        [Parameter(Mandatory = $false)]
        [string]$ForegroundColor = "White"
    )
    
    $originalColor = $host.UI.RawUI.ForegroundColor
    $host.UI.RawUI.ForegroundColor = $ForegroundColor
    Write-Output $Message
    $host.UI.RawUI.ForegroundColor = $originalColor
}

function Write-Header {
    param (
        [Parameter(Mandatory = $true)]
        [string]$Title
    )
    
    Write-ColorOutput "`n==================== $Title ====================" "Cyan"
}

function Test-FirebaseStorageCORS {
    param (
        [Parameter(Mandatory = $true)]
        [string]$BucketName,
        
        [Parameter(Mandatory = $false)]
        [string]$Origin = "http://localhost:3000"
    )
    
    $url = "https://firebasestorage.googleapis.com/v0/b/$BucketName/o?prefix=blogs"
    
    Write-ColorOutput "Testing CORS with Origin: $Origin" "Yellow"
    Write-ColorOutput "URL: $url" "Gray"
    
    try {
        $response = Invoke-WebRequest -Uri $url -Method "OPTIONS" -Headers @{
            "Origin" = $Origin
            "Access-Control-Request-Method" = "GET"
            "Access-Control-Request-Headers" = "Content-Type"
        } -ErrorAction Stop
        
        Write-ColorOutput "OPTIONS request successful (Status: $($response.StatusCode))" "Green"
        
        # Check for CORS headers
        if ($response.Headers["Access-Control-Allow-Origin"]) {
            Write-ColorOutput "Access-Control-Allow-Origin: $($response.Headers["Access-Control-Allow-Origin"])" "Green"
        } else {
            Write-ColorOutput "Access-Control-Allow-Origin header not found!" "Red"
        }
        
        if ($response.Headers["Access-Control-Allow-Methods"]) {
            Write-ColorOutput "Access-Control-Allow-Methods: $($response.Headers["Access-Control-Allow-Methods"])" "Green"
        } else {
            Write-ColorOutput "Access-Control-Allow-Methods header not found!" "Red"
        }
        
        if ($response.Headers["Access-Control-Allow-Headers"]) {
            Write-ColorOutput "Access-Control-Allow-Headers: $($response.Headers["Access-Control-Allow-Headers"])" "Green"
        } else {
            Write-ColorOutput "Access-Control-Allow-Headers header not found!" "Red"
        }
        
    } catch {
        Write-ColorOutput "Error testing CORS: $_" "Red"
    }
}

function Test-FirebaseStorageListObjects {
    param (
        [Parameter(Mandatory = $true)]
        [string]$BucketName
    )
    
    $url = "https://firebasestorage.googleapis.com/v0/b/$BucketName/o?prefix=blogs"
    
    Write-ColorOutput "Listing objects in blogs folder" "Yellow"
    Write-ColorOutput "URL: $url" "Gray"
    
    try {
        $response = Invoke-WebRequest -Uri $url -Method "GET" -ErrorAction Stop
        
        Write-ColorOutput "List objects request successful (Status: $($response.StatusCode))" "Green"
        
        # Parse the response content as JSON
        $content = $response.Content | ConvertFrom-Json
        
        if ($content.items -and $content.items.Count -gt 0) {
            Write-ColorOutput "Found $($content.items.Count) objects in blogs folder:" "Green"
            foreach ($item in $content.items) {
                Write-ColorOutput " - $($item.name)" "Gray"
            }
        } else {
            Write-ColorOutput "No objects found in blogs folder" "Yellow"
        }
        
    } catch {
        Write-ColorOutput "Error listing objects: $_" "Red"
    }
}

function Test-FirebaseConfig {
    # Look for firebase.json and check CORS configuration
    if (Test-Path -Path "firebase.json") {
        Write-ColorOutput "Found firebase.json" "Green"
        
        try {
            $firebaseConfig = Get-Content -Path "firebase.json" -Raw | ConvertFrom-Json
            
            if ($firebaseConfig.storage -and $firebaseConfig.storage.cors) {
                Write-ColorOutput "CORS configuration found in firebase.json:" "Green"
                $corsConfig = $firebaseConfig.storage.cors | ConvertTo-Json -Depth 5
                Write-ColorOutput $corsConfig "Gray"
            } else {
                Write-ColorOutput "No CORS configuration found in firebase.json!" "Red"
            }
            
            if ($firebaseConfig.storage -and $firebaseConfig.storage.rules) {
                Write-ColorOutput "Storage rules file: $($firebaseConfig.storage.rules)" "Green"
                
                if (Test-Path -Path $firebaseConfig.storage.rules) {
                    $rulesContent = Get-Content -Path $firebaseConfig.storage.rules -Raw
                    Write-ColorOutput "Storage rules content:" "Gray"
                    Write-ColorOutput $rulesContent "Gray"
                } else {
                    Write-ColorOutput "Storage rules file not found: $($firebaseConfig.storage.rules)" "Red"
                }
            } else {
                Write-ColorOutput "No storage rules configuration found in firebase.json!" "Red"
            }
            
        } catch {
            Write-ColorOutput "Error parsing firebase.json: $_" "Red"
        }
    } else {
        Write-ColorOutput "firebase.json not found!" "Red"
    }
    
    # Check for CORS files
    $corsFiles = @("cors.json", "firebase-cors.json")
    foreach ($file in $corsFiles) {
        if (Test-Path -Path $file) {
            Write-ColorOutput "Found $file" "Green"
            try {
                $corsConfig = Get-Content -Path $file -Raw | ConvertFrom-Json
                Write-ColorOutput "CORS configuration in $file:" "Gray"
                Write-ColorOutput ($corsConfig | ConvertTo-Json -Depth 5) "Gray"
            } catch {
                Write-ColorOutput "Error parsing $file: $_" "Red"
            }
        }
    }
}

function Test-FirebaseLibs {
    # Check firebase.ts
    if (Test-Path -Path "libs/firebase.ts") {
        Write-ColorOutput "Found libs/firebase.ts" "Green"
        
        $firebaseTs = Get-Content -Path "libs/firebase.ts" -Raw
        
        # Check for storage bucket configuration
        if ($firebaseTs -match "storageBucket:\s*[`"']([^`"']+)[`"']") {
            $storageBucket = $matches[1]
            Write-ColorOutput "Storage bucket configured as: $storageBucket" "Green"
            
            # Validate storage bucket format
            if ($storageBucket -match "\.appspot\.com$") {
                Write-ColorOutput "Storage bucket format looks correct (ends with .appspot.com)" "Green"
            } elseif ($storageBucket -match "\.firebasestorage\.app$") {
                Write-ColorOutput "Storage bucket format may be incorrect (ends with .firebasestorage.app instead of .appspot.com)" "Red"
            } else {
                Write-ColorOutput "Storage bucket format is unusual: $storageBucket" "Yellow"
            }
        } else {
            Write-ColorOutput "Could not find storage bucket configuration in firebase.ts" "Red"
        }
        
        # Check for proper storage export
        if ($firebaseTs -match "export\s*{\s*storage\s*}") {
            Write-ColorOutput "Storage instance is properly exported" "Green"
        } else {
            Write-ColorOutput "Could not confirm storage export in firebase.ts" "Yellow"
        }
        
    } else {
        Write-ColorOutput "libs/firebase.ts not found!" "Red"
    }
}

function Test-NetworkConnectivity {
    param (
        [Parameter(Mandatory = $true)]
        [string]$BucketName
    )
    
    $endpoints = @(
        "firebasestorage.googleapis.com",
        "storage.googleapis.com"
    )
    
    foreach ($endpoint in $endpoints) {
        Write-ColorOutput "Testing connectivity to $endpoint..." "Yellow"
        
        try {
            $result = Test-NetConnection -ComputerName $endpoint -Port 443
            
            if ($result.TcpTestSucceeded) {
                Write-ColorOutput "Connection to $endpoint successful" "Green"
            } else {
                Write-ColorOutput "Connection to $endpoint failed" "Red"
            }
        } catch {
            Write-ColorOutput "Error testing connection to $endpoint: $_" "Red"
        }
    }
}

# Main script execution
Clear-Host
Write-Header "Firebase Storage Diagnostic Tool"

# Ask for Firebase bucket name
$defaultBucket = "randillanka-2cc47.appspot.com"
$bucketName = Read-Host "Enter your Firebase Storage bucket name (default: $defaultBucket)"

if ([string]::IsNullOrWhiteSpace($bucketName)) {
    $bucketName = $defaultBucket
}

Write-Header "Testing Firebase Configuration"
Test-FirebaseConfig

Write-Header "Checking Firebase Library Setup"
Test-FirebaseLibs

Write-Header "Testing Network Connectivity"
Test-NetworkConnectivity -BucketName $bucketName

Write-Header "Testing Firebase Storage CORS Configuration"
Test-FirebaseStorageCORS -BucketName $bucketName

Write-Header "Testing Firebase Storage Listing"
Test-FirebaseStorageListObjects -BucketName $bucketName

Write-Header "Diagnostic Summary"
Write-ColorOutput "This diagnostic tool has checked:" "Cyan"
Write-ColorOutput "1. Firebase configuration files" "White"
Write-ColorOutput "2. Firebase library setup" "White"
Write-ColorOutput "3. Network connectivity to Firebase endpoints" "White"
Write-ColorOutput "4. CORS configuration" "White"
Write-ColorOutput "5. Storage bucket access" "White"
Write-ColorOutput "`nIf you're experiencing CORS issues:" "Yellow"
Write-ColorOutput "1. Ensure storageBucket in firebase.ts is set to '<project-id>.appspot.com'" "White"
Write-ColorOutput "2. Verify CORS configuration in firebase.json" "White"
Write-ColorOutput "3. Check storage rules in storage.rules" "White"
Write-ColorOutput "4. Deploy updated CORS configuration with 'firebase deploy --only storage'" "White"
Write-ColorOutput "5. Test with the test-firebase-storage page" "White"

Write-ColorOutput "`nPress any key to exit..." "Gray"
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
