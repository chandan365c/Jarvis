import React, { useState } from 'react';
import './UserProfile.css'; 
import { assets } from './assets/assets'
import ParticleEffect from './components/Particle';

const UserProfile = () => {
    // Sample user data (In a real application, this would come from an API or context)
    const [user, setUser] = useState({
        name: 'User1',
        email: 'User1@example.com',
        phone: '9876543210',
        profilePicture: './profilePic/default-profile-pic.png', // Placeholder image
    });

    // State for editing mode
    const [isEditing, setIsEditing] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // Toggle edit mode
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className='profile-main'>
            <ParticleEffect className="particle" />
            <div className="profile-container-wrapper">
                <div className="user-profile">
                    <button className="back-button" onClick={() => window.history.back()}>
                        {'<'}<i className="fas fa-arrow-left"></i>
                    </button>
                    <h1>User Profile</h1>
                    <div className="profile-picture">
                        <img src={assets.user_icon} alt="Profile" />
                    </div>
                    <div className="profile-details">
                        <label>
                            Name: 
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                />
                            ) : (
                                <span>{user.name}</span>
                            )}
                        </label>
                        <label>
                            Email: 
                            {isEditing ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            ) : (
                                <span>{user.email}</span>
                            )}
                        </label>
                        <label>
                            Phone: 
                            {isEditing ? (
                                <input
                                    type="tel"
                                    name="phone"
                                    value={user.phone}
                                    onChange={handleChange}
                                />
                            ) : (
                                <span>{user.phone}</span>
                            )}
                        </label>
                    </div>
                    <button className='save-edit' onClick={toggleEdit}>
                        {isEditing ? 'Save Changes' : 'Edit Profile'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile; 