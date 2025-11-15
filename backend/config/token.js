import jwt from 'jsonwebtoken';

export const generateToken = (userId) => {
    try {
        return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
    } catch (error) {
        console.error("Token generation error:", error);
        throw new Error("Could not generate token");
    }
};