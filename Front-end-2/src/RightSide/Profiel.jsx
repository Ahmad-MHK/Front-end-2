import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import db, { auth, storage } from '../Firebase/FirebaseConfig'; 

function Profiel() {
  const [bio, setBio] = useState('');
  const [username, setUsername] = useState('');
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [userId, setUserId] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserId(user.uid);
        const userDocRef = doc(db, 'logins', user.uid); 
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setBio(userData.bio);
          setUsername(userData.username);
          setPhotoURL(userData.photoURL); 
        }
      }
    });
    return unsubscribe;
  }, []);

  const handleEditBio = () => setIsEditingBio(true);

  const handleSaveBio = async () => {
    if (userId) {
      const userDocRef = doc(db, 'logins', userId); 
      await updateDoc(userDocRef, { bio });
      setIsEditingBio(false);
    }
  };

  const handleEditName = () => setIsEditingName(true);

  const handleSaveName = async () => {
    if (userId) {
      const userDocRef = doc(db, 'logins', userId); 
      await updateDoc(userDocRef, { username });
      setIsEditingName(false);
    }
  };

  const handlePhotoChange = (e) => setPhotoFile(e.target.files[0]);

  const handleSavePhoto = async () => {
    if (userId && photoFile) {
      const photoRef = ref(storage, `profile_photos/${userId}/${photoFile.name}`);
      await uploadBytes(photoRef, photoFile);
      const url = await getDownloadURL(photoRef);
      setPhotoURL(url);
      const userDocRef = doc(db, 'logins', userId); 
      await updateDoc(userDocRef, { photoURL: url });
      setPhotoFile(null);
    }
  };

  return (
    <div className="insta_codepen_wrap">
      <div className='insta__container insta__acc'>
        <section className='insta__header insta__acc_menu'>
          <div id='insta__acc_menu-panel'>
            <img alt="Instagram" className="insta__acc_menu_logo"
              src="https://forumstatic.ru/files/001b/96/e0/12445.png" />
            <div className="insta__acc_menu_search">
              <svg aria-label="Поиск" className="insta__acc_menu_search_icon"
                color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16">
                <path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor"
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" x1="16.511" x2="22" y1="16.511" y2="22"></line>
              </svg> Search
            </div>
            {/* Other SVGs and Menu Items */}
          </div>
        </section>

        <section className='insta__acc_header'>
          <div className='insta__icon-wrap insta__acc_about_icon-wrap'>
            <img src={photoURL || 'http://via.placeholder.com/150'} alt='Фото профиля' className='insta__acc_about_icon' />
            <input type="file" onChange={handlePhotoChange} style={{ display: 'none' }} id="photo-input" />
            <label htmlFor="photo-input" className="insta__acc_about_btn insta__acc_about_btn-blue">Edit profiel Foto</label>
            {photoFile && <button onClick={handleSavePhoto} className="insta__acc_about_btn insta__acc_about_btn-blue">Save Foto</button>}
          </div>
          <div className='insta__acc_about'>
            <div className="insta__acc_about_btns">
              <div className="insta__acc_about_btn insta__acc_about_btn-blue" onClick={handleEditName}>Edit Name</div>
              <div className="insta__acc_about_btn insta__acc_about_btn-blue" onClick={handleEditBio}>Edit Bio</div>
            </div>
            <div className='insta__acc_about_username'>
              {isEditingName ? (
                <>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="username-edit"
                  />
                  <button onClick={handleSaveName} className="save-button">Save</button>
                </>
              ) : (
                <span>{username}</span>
              )}
            </div>
            <div className='insta__acc_about_stat'>
              <div className='insta__acc_about_stat-item'>
                <span className='insta__acc_about_number'>32</span> Post
              </div>
              <div className='insta__acc_about_stat-item'>
                <span className='insta__acc_about_number'>117</span> Follow
              </div>
              <div className='insta__acc_about_stat-item'>
                <span className='insta__acc_about_number'>61</span> Following
              </div>
            </div>
            <div className='insta__acc_about_name'>
              Bio
            </div>
            <div className='insta__acc_about_bio'>
              {isEditingBio ? (
                <>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="bio-edit"
                  />
                  <button onClick={handleSaveBio} className="save-button">Save</button>
                </>
              ) : (
                <span>{bio}</span>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profiel;
