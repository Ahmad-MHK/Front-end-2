import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import db,{ auth} from '../../Firebase/FirebaseConfig';
import '../css/loginform.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      // Sign in user with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Query the 'logins' collection to find the document with the matching UID
      const loginsCollection = collection(db, 'logins');
      const q = query(loginsCollection, where('uid', '==', user.uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          console.log('Logged in as:', userData.username);
          alert(`You have logged in as: ${userData.username}`);
          window.location.href = '/';
        });
      } else {
        console.log('No user data found');
        alert("No user data found");
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle error, show error message to the user, etc.
      alert(`Error logging in: ${error.message}`);
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleEmailLogin}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
