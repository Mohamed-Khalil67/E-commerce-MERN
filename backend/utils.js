import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Load .env (if not already loaded elsewhere)

export const generateToken = (user) => {
  // Debug: Check if secret is loaded
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables.');
  }

  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET, // Ensure this is defined!
    {
      expiresIn: '30d',
    }
  );
};
