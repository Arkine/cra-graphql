import mongoose from 'mongoose';

const User = mongoose.model('User');

module.exports = {
	addUser: (data) => {
		const user = new User({
			name: data.name,
			email: data.email,
			password: data.password
		});

		user.save();

		return user;
	},

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