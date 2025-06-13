# Verify NextAuth Configuration Script
# Run this script to verify your NextAuth configuration

# Function to check environment variables
function Check-NextAuthEnv {
    Write-Host "Checking NextAuth environment variables..." -ForegroundColor Cyan
    
    # Check NEXTAUTH_URL
    if (-not $env:NEXTAUTH_URL) {
        Write-Host "❌ NEXTAUTH_URL is not set!" -ForegroundColor Red
        Write-Host "  This must be set to your site's full URL, e.g. http://localhost:3000 or https://www.randillanka.com" -ForegroundColor Yellow
    } else {
        Write-Host "✅ NEXTAUTH_URL is set to: $env:NEXTAUTH_URL" -ForegroundColor Green
        
        # Validate URL format
        try {
            $uri = [System.Uri]$env:NEXTAUTH_URL
            if ($uri.Scheme -ne "http" -and $uri.Scheme -ne "https") {
                Write-Host "❌ NEXTAUTH_URL must start with http:// or https://" -ForegroundColor Red
            }
        } catch {
            Write-Host "❌ NEXTAUTH_URL is not a valid URL" -ForegroundColor Red
        }
    }
    
    # Check NEXTAUTH_SECRET
    if (-not $env:NEXTAUTH_SECRET) {
        Write-Host "❌ NEXTAUTH_SECRET is not set!" -ForegroundColor Red
        Write-Host "  Generate one with: openssl rand -base64 32" -ForegroundColor Yellow
    } else {
        Write-Host "✅ NEXTAUTH_SECRET is set" -ForegroundColor Green
    }
    
    # Check MONGODB_URI
    if (-not $env:MONGODB_URI) {
        Write-Host "❌ MONGODB_URI is not set!" -ForegroundColor Red
    } else {
        Write-Host "✅ MONGODB_URI is set" -ForegroundColor Green
        
        # Validate MongoDB URI format
        if (-not ($env:MONGODB_URI -match "^mongodb(\+srv)?://")) {
            Write-Host "❌ MONGODB_URI doesn't appear to be valid. Should start with mongodb:// or mongodb+srv://" -ForegroundColor Red
        }
    }
    
    Write-Host "`nIf you're using Vercel, make sure these environment variables are also set in your Vercel project settings." -ForegroundColor Cyan
}

# Run the check
Check-NextAuthEnv

# Test connection to auth endpoint
Write-Host "`nTesting connection to NextAuth session endpoint..." -ForegroundColor Cyan
try {
    $baseUrl = if ($env:NEXTAUTH_URL) { $env:NEXTAUTH_URL } else { "http://localhost:3000" }
    $response = Invoke-WebRequest -Uri "$baseUrl/api/auth/session" -Method GET -Headers @{"Accept"="application/json"} -UseBasicParsing
    
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Successfully connected to /api/auth/session" -ForegroundColor Green
        Write-Host "Response Content-Type: $($response.Headers['Content-Type'])" -ForegroundColor Green
        
        if ($response.Headers['Content-Type'] -match "application/json") {
            Write-Host "✅ Endpoint is returning JSON as expected" -ForegroundColor Green
        } else {
            Write-Host "❌ Endpoint is not returning JSON! This is likely causing the CLIENT_FETCH_ERROR" -ForegroundColor Red
        }
    } else {
        Write-Host "❌ Failed to connect to /api/auth/session - Status code: $($response.StatusCode)" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Error testing auth endpoint: $_" -ForegroundColor Red
}
