class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async createUser(userData) {
        return await this.userRepository.addUser(userData);
    }

    async getUserById(userId) {
        return await this.userRepository.findUserById(userId);
    }

    async updateUser(userId, userData) {
        return await this.userRepository.updateUser(userId, userData);
    }

    async deleteUser(userId) {
        return await this.userRepository.deleteUser(userId);
    }

    async getAllUsers() {
        return await this.userRepository.findAllUsers();
    }
}

module.exports = UserService;