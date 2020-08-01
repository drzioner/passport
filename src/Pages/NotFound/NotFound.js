import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <div>ERROR 404</div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}

export default NotFound;
