import React, { useState, useEffect } from 'react';
import '../App.css';
import LeftBar from '../LeftBar/LeftBar';
import Topbar from '../RightSide/TopBar';
import UserSearch from '../RightSide/UserSearch';

function Search() {
  return (
    <div className="row">
      <LeftBar />
      <div className="Right">
        <Topbar />
        {/* <UserSearch/> */}
      </div>
    </div>
  );
}

export default Search;
