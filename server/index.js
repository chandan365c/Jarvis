const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/Signup")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(YOUR_MONGODB_URI);

app.post("/login", (req, res) =>
    {
        const {email, password} = req.body;
        UserModel.findOne({email: email})
        .then(user => 
            { 
                if(user)
                {
                    if(user.password === password)
                    {
                        res.json("Successfully logged in");
                    }
                    else
                    {
                        res.json("Invalid Password");
                    }
                }
                else
                {
                    res.json("User does not exist!");
                }
            }
        )
    }
)

app.post('/register', (req, res) =>
    {
        const {email} = req.body;
        UserModel.findOne({email: email})
        .then(user =>
            {
                if(user)
                {
                    res.json("User with this email already exists!")
                }
                else
                {
                    UserModel.create(req.body)
                    .then(Credentials => res.json(Credentials))
                    .catch(err => res.json(err))
                }
            }
        )
        
    }
)

app.get('/getUser', (req, res) => 
    {
        const {email} = req.query;
        UserModel.findOne({email: email})
        .then(user => 
            {
                if(user)
                {
                    res.json({
                        username: user.username,
                        email: user.email,
                        phone: user.phone
                    });
                }
                else
                {
                    res.json("User not found!");
                }
            }
        )
    }
)

app.put('/updateUser', (req, res) => {
    const { email, username, phone } = req.body;

    UserModel.findOneAndUpdate(
        { email }, 
        { username, phone }, 
        { new: true } 
    )
    .then((updatedUser) => {
        if (updatedUser) 
        {
            res.json(updatedUser); 
        } 
        else 
        {
            res.status(404).json({ error: "User not found!" });
        }
    })
    .catch((err) => {
        console.error("Error updating user:", err);
        res.status(500).json({ error: "Internal server error" });
    });
});

app.listen(3001, () =>
    {
        console.log("Server is running on port 3001.")
    }
)