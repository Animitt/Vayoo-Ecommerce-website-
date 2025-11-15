import User from '../model/userModel.js';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import { generateToken } from '../config/token.js';

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Enter valid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters long. Enter a stronger password" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser =await User.create({
            name,
            email,
            password: hashedPassword,
        });
        let token=generateToken(newUser._id);
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        });

        return res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {

        console.error("Registration error:", error);
        res.status(500).json({ message: `Error registering user ${error}` });
    }   
  
};

export const login= async (req,res)=> {
    try {
        let { email, password } = req.body;
        let user= await User.findOne({ email });
        if(!user){
            return res.status(400).json({ message: "User does not exist" });
        }
        else {
            console.log("User found:", user);
        }
        let isPasswordCorrect= await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({ message: "Invalid credentials" });
        }
        else {
            console.log("Password is correct");
        }
        let token=generateToken(user._id);
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        });
        return res.status(200).json({ message: "Login successful", user });
    }
    catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: `Error logging in user ${error}` });
    }
  };

  export const logout= async (req,res)=>{
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error("Logout error:", error);
        res.status(500).json({ message: `Error logging out user ${error}` });
    }
    };