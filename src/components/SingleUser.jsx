import React from 'react';
import './SingleUser.css'

const SingleUser = () => {
    return (
        <div className='single-user'>
            <img src="https://randomuser.me/api/portraits/women/76.jpg" alt="" />
            <div className='user-info'>
                <h3>daniëlle de veen</h3>
                <p className='user-email'>email:daniëlle.de veen@example.com</p>
                <p className='city'>valkenburg aan de geul</p>
            </div>
        </div>
    );
};

export default SingleUser;

// {user.picture} 