import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result=> { })
            .catch(error => console.error(error))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user ? <></> : <><Link to="/login">Login</Link>
                        <Link to="/sign-up">Sign Up</Link></>
                }
                {
                    user &&
                        <span style={{color: 'white'}}>
                            <Link onClick={handleLogOut}>Log Out</Link>
                        </span>
                }
            </div>
        </nav>
    );
};

export default Header;