// This is a standalone script to add data to your Firestore database.
// To run it, use the command: `node seed-db.mjs`

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, writeBatch, doc } from 'firebase/firestore';

// IMPORTANT: Paste your Firebase config here, just like in the other file.
const firebaseConfig = {
  apiKey: "AIzaSyCYiJw67SZS-OxvLz8SazmMqxqQwEtjalY",
  authDomain: "almacen-de-viveres-sii.firebaseapp.com",
  projectId: "almacen-de-viveres-sii",
  storageBucket: "almacen-de-viveres-sii.appspot.com",
  messagingSenderId: "131283692576",
  appId: "1:131283692576:web:143805235252c7151ae045",
  measurementId: "G-BXZYMT3NHH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const users = [
    { id: 'USR001', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { id: 'USR002', name: 'Bob Williams', email: 'bob@example.com', role: 'Warehouse Manager', status: 'Active' },
    { id: 'USR003', name: 'Charlie Brown', email: 'charlie@example.com', role: 'Supplier', status: 'Inactive' },
    { id: 'USR004', name: 'Diana Miller', email: 'diana@example.com', role: 'Dietologist', status: 'Active' },
    { id: 'USR005', name: 'Ethan Davis', email: 'ethan@example.com', role: 'Legal Team', status: 'Active' },
];

async function seedDatabase() {
  const batch = writeBatch(db);
  const usersCollection = collection(db, 'users');

  console.log("Starting to seed users collection...");

  users.forEach((user) => {
    // We'll use the user's `id` as the document ID in Firestore
    const userRef = doc(usersCollection, user.id);
    batch.set(userRef, user);
  });

  await batch.commit();
  console.log(`Seeding complete! ${users.length} users have been added to the 'users' collection.`);
  
  // Node.js process needs to be explicitly terminated
  process.exit(0);
}

seedDatabase().catch((err) => {
  console.error("Error seeding database:", err);
  process.exit(1);
});
