import mongoose from 'mongoose';

const User = mongoose.model('User');

module.exports = {
	addUser: async (data) => {
		const user = new User({
			name: data.name,
			email: data.email,
			password: data.password
		});

		await user.save();

		return user;
	},

    getUsers: async () => {
        const users = await User.find({}).limit(10);

        // if (!users) {
		// 	throw new Error('No users found');
        // }

        return users;
    },

    getUser: async (id) => {
        const user = await User.findById(id);

        if (!user) {
			throw new Error('User not found');
        }

        return user;
    }
}