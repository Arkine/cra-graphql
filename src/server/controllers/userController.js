import mongoose from 'mongoose';

const User = mongoose.model('User');

module.exports = {
    getUsers: async () => {
        const users = await User.find({}).limit(10);

        if (!users) {

        }

        return users;
    },

    getUser: async (id) => {
        const user = await User.findById(id);

        if (!user) {
            
        }

        return user;
    }
}