import admin from 'firebase-admin';
import path from 'path';
import fs from 'fs';

// Check if we are in production
const isProduction = process.env.NODE_ENV === 'production';

if (!admin.apps.length) {
  let credential;

  if (isProduction) {
    // In production (App Hosting), credentials are automatically discovered.
    credential = admin.credential.applicationDefault();
  } else {
    // In development, construct an absolute path to the service account key.
    const serviceAccountPath = path.join(process.cwd(), 'service-account-key.json');

    try {
        // Check if the file exists before requiring it. This gives a clearer error.
        if (!fs.existsSync(serviceAccountPath)) {
            throw new Error(`Service account key file not found at path: ${serviceAccountPath}`);
        }
        const serviceAccount = require(serviceAccountPath);
        credential = admin.credential.cert(serviceAccount);
    } catch (error: any) {
        console.error('FATAL ERROR: Could not load Firebase Admin SDK credentials.');
        console.error('Ensure `service-account-key.json` is in the project root.');
        console.error('Detailed error:', error.message);
        throw new Error('Could not initialize Firebase Admin SDK. Check server logs.');
    }
  }

  admin.initializeApp({
    credential
  });
}

const dbAdmin = admin.firestore();
const authAdmin = admin.auth();

export { dbAdmin, authAdmin };
