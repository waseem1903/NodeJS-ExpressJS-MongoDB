const db = require('../models')
const User = db.user

exports.newUser = (req, res) => {
    const { name, email, age, username, password } = req.body
    const user = new User({
        name,
        email,
        age,
        username,
        password
    })
    user.save((err) => {
        if (err) {
            res.status(500).send('Unable to add the User!')
        }
        res.status(200).send('User Added Successfully!')
    })
}

exports.allUsers = (req, res) => {
    User.find((err, users) => {
        if (err) {
            res.status(500).send('Failed to Connect to the Users!')
        }
        res.status(200).send(users)
    })
}

exports.oneUser = (req, res) => {
    const _id = req.params.id
    User.findOne({ _id }, (err, user) => {
        if (err) {
            res.status(500).send('Failed to Fetch Single User!')
        }
        res.status(200).send(user)
    })
}

exports.editUser = (req, res) => {
    res.status(200).send("Edit Route Working!")
}

exports.removeUser = (req, res) => {
    const _id = req.params.id
    User.deleteOne({ _id }, (err, record) => {
        if (err) {
            res.status(500).send('Unable to Delete the Record!')
        }
        res.status(200).send({ message: "Record Deleted Successfully!" })
    })
}

// exports.allAccess = (req, res) => {
//     res.status(200).send("Public Content.");
// };

// exports.userBoard = (req, res) => {
//     res.status(200).send("User Content.");
// };

// exports.adminBoard = (req, res) => {
//     res.status(200).send("Admin Content.");
// };

// exports.moderatorBoard = (req, res) => {
//     res.status(200).send("Moderator Content.");
// };