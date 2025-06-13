import { db, storage } from "./firebase.config";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export const blogUtils = {
  // Upload blog image to Firebase Storage
  uploadBlogImage: async (file, fileName) => {
    try {
      const storageRef = ref(storage, `destinations/${fileName}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading blog image:", error);
      throw error;
    }
  },

  // Delete blog image from Firebase Storage
  deleteBlogImage: async (imageUrl) => {
    try {
      if (!imageUrl) return;
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
    } catch (error) {
      console.error("Error deleting blog image:", error);
      throw error;
    }
  },

  // Add blog to Firestore
  addBlog: async (blogData) => {
    try {
      const docRef = await addDoc(collection(db, "destinations"), {
        ...blogData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      return {
        id: docRef.id,
        ...blogData,
      };
    } catch (error) {
      console.error("Error adding blog:", error);
      throw error;
    }
  },

  // Get single blog by ID
  getBlog: async (id) => {
    try {
      const docRef = doc(db, "destinations", id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        return null;
      }

      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } catch (error) {
      console.error("Error getting blog:", error);
      throw error;
    }
  },

  // Get all blogs with optional filters
  getBlogs: async (filters = {}) => {
    try {
      let q = collection(db, "destinations");
      const constraints = [];

      if (filters.category) {
        constraints.push(where("category", "==", filters.category));
      }

      if (filters.tags && filters.tags.length > 0) {
        constraints.push(where("tags", "array-contains-any", filters.tags));
      }

      if (filters.author) {
        constraints.push(where("author", "==", filters.author));
      }

      // Always sort by createdAt in descending order
      constraints.push(orderBy("createdAt", "desc"));

      if (constraints.length > 0) {
        q = query(q, ...constraints);
      }

      const querySnapshot = await getDocs(q);
      const destinations = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return destinations;
    } catch (error) {
      console.error("Error getting destinations:", error);
      throw error;
    }
  },

  // Update blog
  updateBlog: async (id, blogData) => {
    try {
      const docRef = doc(db, "destinations", id);
      const updateData = {
        ...blogData,
        updatedAt: new Date().toISOString(),
      };
      await updateDoc(docRef, updateData);
      return {
        id,
        ...updateData,
      };
    } catch (error) {
      console.error("Error updating blog:", error);
      throw error;
    }
  },

  // Delete blog
  deleteBlog: async (id) => {
    try {
      const docRef = doc(db, "destinations", id);
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      console.error("Error deleting blog:", error);
      throw error;
    }
  },
};
