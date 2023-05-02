import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm = event.target.confirm.value;
        setError('')
        if (password !== confirm) {
            setError('Your password did not match');
            return
        }
        else if(password.length < 6){
            setError('Password must be 6 character or longer');
            return
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                event.target.reset()
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    return (
        <div className='form-container'>
            <h4 className='form-title'>Register Now!</h4>
            <form onSubmit={handleSignUp}>
                <div>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" id="" required />
                    </div>
                    <input type="submit" value="Sign Up" className='btn-submit' />
                    <div>
                        <p className='toogle-page'>Already have an Account? <Link to='/login'>Login</Link></p>
                    </div>
                    <div>
                        <p className='text-error'>
                            {error}
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;