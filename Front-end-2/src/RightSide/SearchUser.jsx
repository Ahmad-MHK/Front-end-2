import React, { useState, useEffect } from 'react';
import db from '../Firebase/FirebaseConfig'; 
import { collection, query, where, getDocs } from 'firebase/firestore';

const SearchUser = () => {
  const [Searchquery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      const q = query(collection(db, 'logins'));
      const querySnapshot = await getDocs(q);
      const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAllUsers(users);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) {
      setResults(allUsers);
      return;
    }

    try {
      const q = query(collection(db, 'logins'), where('username', '==', Searchquery));
      const querySnapshot = await getDocs(q);
      const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setResults(users);
    } catch (error) {
      console.error("Error searching for users: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={Searchquery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search username..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map(user => (
          <li key={user.id}>
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchUser;
