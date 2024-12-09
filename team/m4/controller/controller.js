import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/User.js";
import DatabaseService from "../sequelize-db.js";

dotenv.config();

const userExists = async(username) => {
    const user = await User.findOne({where: {username}});
    return user;
}
export const signup = async (req, res) => {
    try {
        const {username, password, venmo, phoneNumber, email} = req.body;
    
        if (await userExists(username)) {
            return res.status(400).json("Username already exist");
        }

        const hash = await bcrypt.hash(password, 12);
        await User.set({ username, password: hash, venmo: venmo, phoneNumber: phoneNumber, email: email });
        res.status(200).json("User registered successfully!")
    }
    catch(error){
        res.status(500).json("An error occured during registeration!");
    }
}

export const signin = async (req, res, next) => {
    try {
        console.log("Here!");
        const {username, password} = req.body;
        const user = await User.findOne({where: {username}});
        if (!user || (await bcrypt.compare(password, user.password))) {
            res.status(401).json("Credentials are Invalid!");
        }
        req.login(user, (err) =>
            err ? next(err) : res.status(401).json("Credentials are Invalid!")
        );
    }
    catch(error) {
        res.status(500).json("An error occured during sign in!");
    }
}

