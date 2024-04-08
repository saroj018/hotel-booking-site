import GoogleStrategy from 'passport-google-oauth20'
import passport from 'passport';
import dotenv from 'dotenv'
import { hashPassword } from '../utils/encrypt-password.js';
import { User } from '../model/user-model.js';
dotenv.config()

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  async (accessToken,refreshToken,profile,cb) => {
    try {
      const email = profile.emails[0].value;
      const fullname = profile.displayName;
      const password = await hashPassword("iamfromgoogleauth");
      const result = await User.findOne({ email: email });

      if (!result){
         await User.create({
          fullname,
          email,
          password,
        });
      }
      return cb(null,profile)

    } catch (err) {
      return cb(err,profile)
    }

  }
));