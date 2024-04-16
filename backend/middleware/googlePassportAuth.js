import GoogleStrategy from 'passport-google-oauth20'
import passport from 'passport';
import dotenv from 'dotenv'
import { hashPassword } from '../utils/encrypt-password.js';
import { User } from '../model/user-model.js';
dotenv.config()

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3001/auth/google/callback'
  },
  async (accessToken,refreshToken,profile,cb) => {
    console.log('i am happy');
  }
    
  
));