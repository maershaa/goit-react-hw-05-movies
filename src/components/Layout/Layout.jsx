import React, { Suspense, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader'; //npm install react-loader-spinner --save
import { StyledLayout } from 'components/Layout/StyledLayout';

const Layout = ({ children }) => {
  const [isLoading] = useState(false);
  const [error] = useState(null);

  return (
    <Suspense fallback={<Loader />}>
      <StyledLayout>
        {error !== null && (
          <p className="errorBadge">
            Oops, some error occurred... Error message: {error}
          </p>
        )}

        {isLoading && <Loader />}

        <header className="headerContainer">
          <ul className="list">
            <li>
              <NavLink className="headerLink" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="headerLink" to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </header>

        <main>{children}</main>

        <footer>
          <p className="info">Site crafted by Valeria Maers © 2023</p>
        </footer>
      </StyledLayout>
    </Suspense>
  );
};

export default Layout;
