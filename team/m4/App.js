import express from "express";
import session from "express-session";
import passport from "passport";
import routes from "../routes/routes.js";
import { urlencoded } from "body-parser";


const app = express();

app.use(express.static("../m3/signin&up")); //Connecting the express to the frontEnd
app.use(express.json()); //So it can use and communicate with json
app.use(urlencoded({extended: false}));
app.use( //session management
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false    
    })
)
app.use(passport.initialize());
app.use(passport.session());
app.use("/", routes);

app.listen(3000, () => console.log("Server is running!"));

export default app;