import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4Aeu_GOvef2sUaUjoYfQv3ub-VTC-OhM",
  authDomain: "randillanka-2cc47.firebaseapp.com",
  projectId: "randillanka-2cc47",
  storageBucket: "randillanka-2cc47.firebasestorage.app", // Using the actual bucket name
  messagingSenderId: "132554188377",
  appId: "1:132554188377:web:409d2e8634ab8a14b63348",
  measurementId: "G-RR71FPWC4S",
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

// Helper function to upload an image to Firebase Storage
const uploadImage = async (imageFile, path) => {
  if (!imageFile) return null;

  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, imageFile);
  return getDownloadURL(snapshot.ref);
};

// Helper function to add a blog to Firestore
const addBlog = async (blogData) => {
  const blogsCollection = collection(db, "blogs");
  return addDoc(blogsCollection, blogData);
};

export { storage, db, uploadImage, addBlog };
export default firebaseApp;
