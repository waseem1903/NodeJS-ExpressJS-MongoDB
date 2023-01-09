const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        name: String,
        email: String,
        age: Number,
        username: String,
        password: String,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    })
);

module.exports = User;