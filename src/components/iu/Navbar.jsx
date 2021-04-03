import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContex";
import { linkRoutes } from "../../data/linkRoutes";
import { types } from "../../types/types";

export const Navbar = () => {
  const { heroUser, dispatch } = useContext(AuthContext);
  const history = useHistory()

  const handleLogout = () =>{

    dispatch({
      type: types.logout
    })

    history.replace('/login')

  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          {linkRoutes.map((linkRoute) => (
            <NavLink
              key={linkRoute.url}
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to={linkRoute.url}
            >
              {linkRoute.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="d-flex">
        <ul className="navbar-nav ml-auto">
          {heroUser.logged && (
            <span className="nav-item nav-link text-info">{heroUser.name}</span>
          )}
          <button 
            className="nav-item nav-link btn"
            onClick={ handleLogout }
            >Logout</button>
        </ul>
      </div>
    </nav>
  );
};
