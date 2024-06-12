
import { signOut } from 'firebase/auth';
import { auth } from './FirebaseConfig';
 
const signOutUser = () => {
  signOut(auth).then(() => {
    console.log('User signed out');
  }).catch((error) => {
    console.error('Error signing out:', error);
  });
};
export {signOutUser};