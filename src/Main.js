import React from 'react';
import Search from './Search.js';
// import './Search.css';
import Footer from './Footer.js';
export default function Main() {
  return (
    <div>
      <Search default="bbc-news" />
      <Footer />
    </div>
  );
}
