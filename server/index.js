const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/Signup")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/MyDB");

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
        UserModel.create(req.body)
        .then(Credentials => res.json(Credentials))
        .catch(err => res.json(err))
    }
)

app.listen(3001, () =>
    {
        console.log("Server is running")
    }
)