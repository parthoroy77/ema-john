import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const Login = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                event.target.reset();
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='form-container'>
            <h4 className='form-title'>Login</h4>
            <form onSubmit={handleLogin}>
                <div>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <input type="submit" value="Login" className='btn-submit' />
                    <div>
                        <p className='toogle-page'>New To Ema-John? <Link to='/sign-up'>Create New Account</Link></p>
                    </div>
               </div>
            </form>
        </div>
    );
};

export default Login;