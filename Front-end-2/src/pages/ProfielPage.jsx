import React, { useState, useEffect } from 'react';
import '../App.css';
import LeftBar from '../LeftBar/LeftBar';
import Profiel from '../RightSide/Profiel'

function ProfielPage() {

  return (
    <div className="row">
      <LeftBar />
      <div className="Right">
        <Profiel/>
      </div>
    </div>
  );
}

export default ProfielPage;
