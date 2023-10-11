const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePic: { type: String, required: false },
    isVerified: { type: Boolean, required: false },
    method: { type: String, required: false },
    role: { type: String, required: false },
    status: { type: String, required: false },
    googleId: { type: String, required: false },
    googlePic: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);