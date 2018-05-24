import passport from 'passport';
import mongoose from 'mongoose';

import { Strategy, ExtractJwt } from "passport-jwt";

const User = mongoose.model('User');

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// passport.use("jwt", )