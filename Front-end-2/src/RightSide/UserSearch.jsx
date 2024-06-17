// UserSearch.js

import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import db from "../Firebase/FirebaseConfig"; 

function UserSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to search for users by email
  const searchUserByEmail = (email) => {
    const usersRef = db.collection("users"); // Assuming you have a 'users' collection in Firestore

    usersRef
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        const results = [];
        querySnapshot.forEach((doc) => {
          // Handle found user
          results.push({ id: doc.id, data: doc.data() });
        });
        setSearchResults(results);
      })
      .catch((error) => {
        console.error("Error searching for user: ", error);
      });
  };

  // Initialize Firebase Authentication
  const auth = getAuth();

  useEffect(() => {
    // Event listener for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const userEmail = user.email;
        console.log("Signed in user email: ", userEmail);

        // Example search
        searchUserByEmail(userEmail);
      } else {
        // No user is signed in
        console.log("No user signed in.");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchUserByEmail(searchQuery);
  };

  return (
    <div>
      <h2>User Search</h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Enter email"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            <h3>{result.data.email}</h3>
            {/* Display other user data here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserSearch;
