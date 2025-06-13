# NextAuth Debug Guide

## Common error: "CLIENT_FETCH_ERROR" with "<!DOCTYPE..." message

This error indicates that when trying to fetch session data, HTML is being returned instead of JSON.

## Steps to Fix:

### 1. Check your middleware setup

Make sure your middleware is not intercepting and processing `/api/auth/*` routes:

- Update `middleware.js` to exclude auth routes
- Add a proper matcher config

### 2. Verify NEXTAUTH_URL environment variable

The `NEXTAUTH_URL` must be correctly set:

- In development: It should be `http://localhost:3000`
- In production: It should be your full domain, e.g., `https://www.randillanka.com`

### 3. Verify Vercel environment variables

- Log into your Vercel dashboard
- Go to Project Settings → Environment Variables
- Ensure these variables are correctly set:
  - `NEXTAUTH_URL` (full URL with https://)
  - `NEXTAUTH_SECRET` (a secure random string)
  - `MONGODB_URI` (your MongoDB connection string)

### 4. Run diagnostic checks

1. Test API endpoint directly:

   - Try accessing `https://www.randillanka.com/api/auth/session` in your browser
   - You should get JSON, not HTML

2. Clear cache and cookies:
   - Try in an incognito window
   - Clear all browser cookies for your site

### 5. Make sure your CORS headers are properly set

- Check that your `next.config.js` has proper CORS settings
- Make sure auth routes have `Access-Control-Allow-Credentials: true`

### 6. Check for redirects or proxy issues

- If you're using a proxy or CDN, make sure it's not interfering with `/api/auth/*` routes

## Debugging Your Environment

Temporarily add more logging to check environment variables:

```javascript
// Add to your [...nextauth].ts file temporarily
console.log("AUTH DEBUG:", {
  NODE_ENV: process.env.NODE_ENV,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  hasSecret: !!process.env.NEXTAUTH_SECRET,
  hasMongoURI: !!process.env.MONGODB_URI,
});
```

## Fix Checklist:

- [ ] Set proper NEXTAUTH_URL
- [ ] Ensure middleware excludes auth routes
- [ ] Configure CORS headers properly
- [ ] Verify MongoDB connection is working
- [ ] Clear browser cookies and cache
