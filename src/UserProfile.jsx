import React, { useEffect, useState } from 'react';
import './UserProfile.css'; 
import { assets } from './assets/assets'
import { useNavigate } from 'react-router-dom';
import ParticleEffect from './components/Particle.jsx';
import axios from 'axios';
import { useUser } from './UserContext.jsx';

const UserProfile = () => {

    const { user } = useUser();

    // Sample user data (In a real application, this would come from an API or context)
    const [profile, setProfile] = useState({
        username: '',
        email: '',
        phone: '',
        profilePicture: './profilePic/default-profile-pic.png', // Placeholder image
    });

    // State for editing mode
    const [isEditing, setIsEditing] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...user, [name]: value });
    };

    // Toggle edit mode
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const navigate = useNavigate();

    useEffect(() => {
        if(user?.email)
        {
            axios.get('http://localhost:3001/getUser', { params: {email: user.email}})
            .then((response) => {
                if(response.data != "User not found!")
                {
                    setProfile(response.data);
                }
                else
                {
                    console.error("User not found!");
                }
            })
            .catch((err) => {
                console.error("Error fetching user data: ", err);
            });
        }
    }, [user, navigate]);

    return (
        <div className='profile-main'>
            <ParticleEffect className="particle" />
            <div className="profile-container-wrapper">
                <div className="user-profile">
                    <button className="back-button" onClick={() => navigate('/Page2')}>
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
                                    name="username"
                                    value={profile.username}
                                    onChange={handleChange}
                                />
                            ) : (
                                <span>{profile.username}</span>
                            )}
                        </label>
                        <label>
                            Email: 
                            {isEditing ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleChange}
                                />
                            ) : (
                                <span>{profile.email}</span>
                            )}
                        </label>
                        <label>
                            Phone: 
                            {isEditing ? (
                                <input
                                    type="tel"
                                    name="phone"
                                    value={profile.phone}
                                    onChange={handleChange}
                                />
                            ) : (
                                <span>{profile.phone}</span>
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