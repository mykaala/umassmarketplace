import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/User.js";
import DatabaseService from "../sequelize-db.js";

dotenv.config();

const userExists = async(username) => { //a helper function which checks to see if the user exists in the database
    const dbService = new DatabaseService('./marketplaceDB.db');
    await dbService.connect();
    await dbService.syncModels();
    const user = await User.findOne({where: {username}});
    return user;
}
export const signup = async (req, res) => {
    try {
        const {username, password, venmo, phoneNumber, email} = req.body; //gets the needed fields from the request body sent from the frontEnd
        const dbService = new DatabaseService('./marketplaceDB.db');
        await dbService.connect();
        await dbService.syncModels();
        if (await userExists(username)) { //checks to see if there is a user with the same username in the database. if yes will send an error letting them know that
            return res.status(400).json("Username already exist"); //username is already taken.
        }

        const hash = await bcrypt.hash(password, 12); //hashing the password
        await User.create({ username: username, password: hash, venmo: venmo, phoneNumber: phoneNumber, email: email }); //creating the user in database
        res.status(200).json("User registered successfully!") //success message to frontEnd 
    }
    catch(error){
        res.status(500).json("An error occured during registeration!"); //if there is an error sending an error message to the frontEnd
    }
}

export const signin = async (req, res, next) => {
    try {
        const {username, password} = req.body; //gets the username and password from the request body
        const dbService = new DatabaseService('./marketplaceDB.db');
        await dbService.connect();
        await dbService.syncModels();
        const user = await User.findOne({where: {username}}); //tries to find a user with the given username
        if (!user || (await bcrypt.compare(password, user.password))) { //if the user does not exist or the password doesnt match, sending an error or invalid credentials
            res.status(401).json("Credentials are Invalid!");
        }
        req.login(user, (err) => //logging in using passport
            err ? next(err) : res.status(401).json("Sign in successful!")
        );
    }
    catch(error) {
        res.status(500).json("An error occured during sign in!"); //sending an error if log in was unsuccessful
    }
}

