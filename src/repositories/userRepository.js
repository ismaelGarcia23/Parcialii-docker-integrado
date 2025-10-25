const User = require('../models/userModels');

class userRepository {
    async addUser(userData) {
        return await User.create(userData);
    }

    async findAllUsers() {
        return await User.findAll();
    }

    async findUserById(id) {
        return await User.findByPk(id);
    }

    async updateUser(id, userData) {
        const user = await User.findByPk(id);
        if (!user) return null;
        return await user.update(userData);
    }

    async deleteUser(id) {
        const user = await User.findByPk(id);
        if (!user) return null;
        await user.destroy();
        return true;
    }
}

module.exports = userRepository;