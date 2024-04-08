const helper = require('./helper.js');
const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');

const handleNewPass = (e) => {
    e.preventDefault();
    helper.hideError();

    const oldPass = e.target.querySelector('#oldPass').value;
    const newPass = e.target.querySelector('#newPass').value;
    const newPass2 = e.target.querySelector('#newPass2').value;

    if (!oldPass || !newPass || !newPass2) {
        helper.handleError('All fields are required');
        return false;
    }

    helper.sendPost(e.target.action, { oldPass, newPass, newPass2 }, null);
    return false;
};

const ChangePasswordForm = () => {
    return (
        <div>
            <form id='changePasswordForm'
                onSubmit={e => handleNewPass(e)}
                name='changePasswordForm'
                action="/changePassword"
                method='POST'
            >
                <label htmlFor="oldPass">Old Password: </label>
                <input id='oldPass' type="text" name='oldPass' placeholder='Old Password' />
                <br />
                <label htmlFor="newPass">New Password: </label>
                <input id='newPass' type='text' name='newPass' placeholder='New Password'/>
                <br />
                <label htmlFor="newPass2">New Password Again: </label>
                <input id='newPass2' type='text' name='newPass2' placeholder='New Password Again'/>
                <input className='changePasswordSubmit' type="submit" value='Change Password' />
            </form>
        </div>
    );
};

const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(<ChangePasswordForm />);
};

window.onload = init;