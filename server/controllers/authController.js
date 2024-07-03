const User = require('../models/user');
const { hashPassword, comparePassword, hashPassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken');
const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try {
        const { FirstName, LastName, Email, Password } = req.body;
        //Check if FirstName was entered
        if (!FirstName) {
            return res.json({
                error: 'FirstName is required'
            });
        };
        //Check is LastName was entered
        if (!LastName) {
            return res.json({
                error: 'LastName is required'
            });
        };
        //Check is password is good
        if (!Password || Password.length < 6) {
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            });
        };
        // Check Email
        const exist = await User.findOne({ Email });
        if (exist) {
            return res.json({
                error: 'Email is taken already'
            });
        }

        const hashPassword = await hashPassword(Password)
        //create user in database
        const user = await User.create({
            FirstName, LastName, Email, Password: hashPassword,

        });

        return res.json(user)
    } catch (error) {
        console.log(error)

    }
};

//login endpoint
const loginUser = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        //check if user exsits
        const user = await User.findOne({ Email });
        if (!user) {
            return res.json({
                error: 'No user found'
            })

        }
        //check is passwords match
        const match = await comparePassword(Password, user.Password)

        if (match) {
            jwt.sign({
                Email: user.Email, id: user._id, FirstName: user.FirstName
            }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user)
            })

        }

        if (!match) {
            res.json({
                error: "Passwords Don't Match"
            })
        }
    } catch (error) {

        console.log(error)

    }

}

const getProfile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (error, user) => {
            if (err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}
