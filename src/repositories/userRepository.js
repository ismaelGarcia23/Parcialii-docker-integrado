class UserRepository {
    constructor() {
        this.users = [];
        this.currentId = 1;
    }

    createUser(user) {
        user.id = this.currentId++;
        this.users.push(user);
        return user;
    }

    getUserById(id) {
        return this.users.find(user => user.id === id);
    }

    updateUser(id, updatedUser) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            updatedUser.id = id;
            this.users[index] = updatedUser;
            return updatedUser;
        }
        return null;
    }

    deleteUser(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            return this.users.splice(index, 1)[0];
        }
        return null;
    }

    getAllUsers() {
        return this.users;
    }
}

module.exports = new UserRepository();