// test-auth.js
const { getSession } = require("next-auth/react");

async function testAuth() {
  try {
    // Try to get the current session
    const session = await getSession();

    if (session) {
      console.log("Authenticated as:", {
        user: session.user,
        expires: session.expires,
      });
    } else {
      console.log("Not authenticated");
    }
  } catch (error) {
    console.error("Auth error:", error);
  }
}

testAuth();
