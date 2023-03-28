import './Loginpage.css';
import React from 'react';
import { Link } from 'react-router-dom';
function Loginpage(){
    return(
        <div id='lp'>
        <div id='head'>
        <header id='hd'>Login Page</header>
        </div>
        <div className='log '>
        <div className='child '>
        <div className='lg'>
            <form className='l'>
            <div className='line'>
                <div className='username'>
                <p>Username:</p>
                <input type="text" height="60%" name="username" id="username" placeholder="Username" className='bigtext form-control ' size="10" />
                </div>
                <div className='pass'>
                    <p>Password:</p>
                    <input type="password" name="password" id="password" placeholder='password' className='form-control bigtext' size="10"/>
                </div>
                </div>
            <Link to='/Home'><button type='submit' className='btn btn-primary c'>Login</button></Link>
            </form>
            </div>
    </div>
    </div>
    </div>
    )
}
export default Loginpage