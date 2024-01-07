/*
* User Authentication:
  - Allow users to log in using various methods (Google, Facebook, Github, Email & Password).

* Job Listings:
  - Users should be able to view job listings through a GET request to the database.

* Favourite Jobs:
  - Authenticated users can add jobs to their favourites.
  - Favourite job information should be stored in the database.
  - Each time a user adds a job to favourites, increment a counter associated with that job.

* Job Creation:
  - Authenticated users can create new job posts.
  - Job details, including the user who posted it, should be stored in the database.

* Post Management:
  - Users should be able to delete and update posts they have added.

* Job Applications:
  - Users can apply for jobs.
  - Applied jobs should be associated with the user and stored in the database.
  - Users can view their applied jobs in their profile.

* Profile Page:
  - Users have a profile page where they can:
    - View jobs they have applied for.
    - View jobs they have posted.

Note: Ensure proper data relationships in the database schema to associate jobs with users, track favourites, and manage applications.
*/
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "halal-jibika-c0499.firebaseapp.com",
  projectId: "halal-jibika-c0499",
  storageBucket: "halal-jibika-c0499.appspot.com",
  messagingSenderId: "958809224045",
  appId: "1:958809224045:web:314625886dfb3873e76064",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
