import admin from 'firebase-admin';

// This configuration is for SERVER-SIDE operations only.
// It uses environment variables that are securely available on the server.

// Check if the app is already initialized to prevent errors
if (!admin.apps.length) {
  // In a deployed Google Cloud environment (like App Hosting),
  // the SDK automatically finds the service account credentials.
  // For local development, you need to provide a service account key
  // via the GOOGLE_APPLICATION_CREDENTIALS environment variable.
  const credential = process.env.GOOGLE_APPLICATION_CREDENTIALS
    ? admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS)
    : admin.credential.applicationDefault();

  admin.initializeApp({
    credential,
    // You can also add your databaseURL here if needed,
    // though it's often not required with the latest SDKs.
    // databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`
  });
}

const dbAdmin = admin.firestore();

export { dbAdmin };
