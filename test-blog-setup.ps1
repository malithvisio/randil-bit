# Run diagnostics and test blog functionality
Write-Host "Running MongoDB connection test..." -ForegroundColor Cyan
node test-db-connection.js

Write-Host "`nTesting Blog model..." -ForegroundColor Cyan
node test-blog-model.js

Write-Host "`nChecking blog API connection..." -ForegroundColor Cyan
Write-Host "Fetching from /api/blogs endpoint..." -ForegroundColor Yellow
curl -X GET "http://localhost:3000/api/blogs" -H "Content-Type: application/json"

Write-Host "`n`nAll tests completed. Please check for any errors in the output above." -ForegroundColor Green
Write-Host "If the tests pass but the blog page still shows 'No blog posts found', try clearing your browser cache and reloading the page." -ForegroundColor Yellow
