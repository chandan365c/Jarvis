import React, { useEffect, useState } from 'react';
import './UserProfile.css'; 
import { assets } from './assets/assets'
import { useNavigate } from 'react-router-dom';
import ParticleEffect from './components/Particle.jsx';
import axios from 'axios';
import { useUser } from './UserContext.jsx';

const UserProfile = () => {

    const { user } = useUser();
    const [error, setError] = useState('');

    //UserProfile data. (Profile Pic is hardcoded)
    const [profile, setProfile] = useState({
        username: '',
        email: '',
        phone: '',
        profilePicture: './profilePic/default-profile-pic.png', // Placeholder image
    });

    //State for editing mode
    const [isEditing, setIsEditing] = useState(false);

    //Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...user, [name]: value });
    };

    //Toggle edit mode
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

    const handleSave = () => {
        axios
            .put('http://localhost:3001/updateUser', {
                email: profile.email, 
                username: profile.username,
                phone: profile.phone,
            })
            .then((response) => {
                if (response.data) 
                {
                    console.log("Profile updated successfully:", response.data);
                    setProfile(response.data); 
                    setIsEditing(false);
                }
            })
            .catch((err) => {
                console.error("Error updating profile:", err);
            });
    };

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
                        <label className='email-label'>
                            Email: 
                            {isEditing ? (
                                <span className='editing-email'>{profile.email}</span>
                            ) : (
                                <span className='display-email'>{profile.email}</span>
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

                    <button className='save-edit' onClick={isEditing ? handleSave : toggleEdit}>
                        {isEditing ? 'Save Changes' : 'Edit Profile'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;