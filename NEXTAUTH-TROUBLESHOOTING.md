# NextAuth Troubleshooting Guide

This guide helps troubleshoot authentication issues with NextAuth in your Randil Lanka application, especially when deployed to Vercel.

## Common Error: "Login failed" redirecting to `/api/auth/error`

If users are being redirected to the error page during login, try these solutions:

## 1. Check Environment Variables

Make sure these environment variables are correctly set in your Vercel dashboard:

- `NEXTAUTH_URL` - Should be your production URL (e.g., https://www.randillanka.com)
- `NEXTAUTH_SECRET` - A secure string for signing JWTs
- `MONGODB_URI` - Your MongoDB connection string

## 2. MongoDB Connection Issues

Vercel's serverless environment may have intermittent connection issues to MongoDB.

### Solutions:

- Ensure your MongoDB Atlas IP whitelist includes Vercel's IPs or is set to allow access from anywhere (0.0.0.0/0)
- Check that your MongoDB user has the correct permissions
- Test your MongoDB connection string locally with `mongo` command
- Increase connection timeouts if your database is slow to respond

## 3. Check Logs in Vercel

After deployment, check the Function Logs in Vercel dashboard for detailed error messages.

## 4. Common Issues and Solutions

### Issue: "Login failed. Please check your credentials."

- Check that user exists in database
- Verify password hashing is working correctly
- Ensure MongoDB connection is established before authentication

### Issue: CredentialsSignin error

- Commonly means the username/password combination is incorrect
- Check that your login form is sending the correct fields
- Verify your database has users with the provided credentials

### Issue: Database connection timeouts

- Increase the connection timeout values in your MongoDB configuration
- Implement retry mechanisms for database connections
- Consider using connection pooling

## 5. Testing Production Authentication

Use this diagnostic process:

1. Deploy with extra logging enabled
2. Try logging in with a known good account
3. Check Vercel function logs immediately after the failed login
4. Look for database connection errors or authentication failures
5. Fix the specific issue identified in the logs

## 6. Clean Cache and Cookies

If the issue is user-specific, have them:

1. Clear browser cookies
2. Try incognito/private browsing mode
3. Use a different browser

## 7. Contact Support

If you've tried all the above and still have issues, contact MongoDB Atlas support or Vercel support depending on where the error is occurring.
