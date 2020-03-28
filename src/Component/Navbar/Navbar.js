import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.isAuthenticated);
  dispatch({ type: "ADD_USER" }, [dispatch])
  return (
    <div>
      <Navbar>
        {isAuth ? (
          <Nav>
            <NavItem >
              <Link to="/" 
                    onClick = {()=>(dispatch({ type: "CLEAR_USER" }, [dispatch]))} >
                    Logout
              </Link>
            </NavItem>
          </Nav>
        ) : (
          <Nav>
            <NavItem>
              <Link to="/home">Home</Link>
            </NavItem>
            &nbsp; &nbsp; 
            <NavItem>
              <Link to="/signin">SignIn</Link>
            </NavItem>
           
          </Nav>
        )}
      </Navbar>
    </div>
  );
};
export default NavbarComponent;