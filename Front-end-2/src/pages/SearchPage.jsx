import React, { useState, useEffect } from 'react';
import '../App.css';
import LeftBar from '../LeftBar/LeftBar';
import Topbar from '../RightSide/TopBar';
import SearchUser from "../RightSide/SearchUser";

function SearchPage() {

  return (
    <div className="row">
      <LeftBar />
      <div className="Right">
        <SearchUser/>
      </div>
    </div>
  );
}

export default SearchPage;
