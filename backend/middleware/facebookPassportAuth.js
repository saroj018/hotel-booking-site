import FacebookStrategy from 'passport-facebook'
import passport from 'passport';
import { hashPassword } from '../utils/encrypt-password';
import { User } from '../model/user-model';

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
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