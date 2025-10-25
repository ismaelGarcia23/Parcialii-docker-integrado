class UserServices {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    // Crear usuario
    async createUser(userData) {
        try {
            // Validaciones básicas
            if (!userData.email || !userData.password || !userData.nombre) {
                throw new Error('Faltan campos requeridos');
            }

            // Verificar si el email ya existe
            const existingUser = await this.userRepository.findByEmail(userData.email);
            if (existingUser) {
                throw new Error('El email ya está registrado');
            }

            return await this.userRepository.addUser(userData);
        } catch (error) {
            console.error('Error en createUser service:', error);
            throw error;
        }
    }

    // Obtener todos los usuarios
    async getAllUsers() {
        try {
            return await this.userRepository.findAllUsers();
        } catch (error) {
            console.error('Error en getAllUsers service:', error);
            throw error;
        }
    }

    // Obtener usuario por ID
    async getUserById(id) {
        try {
            const user = await this.userRepository.findUserById(id);
            if (!user) {
                throw new Error('Usuario no encontrado');
            }
            return user;
        } catch (error) {
            console.error('Error en getUserById service:', error);
            throw error;
        }
    }

    // Actualizar usuario
    async updateUser(id, userData) {
        try {
            // Verificar si el usuario existe
            const existingUser = await this.userRepository.findUserById(id);
            if (!existingUser) {
                throw new Error('Usuario no encontrado');
            }

            // Si se está actualizando el email, verificar que no exista
            if (userData.email && userData.email !== existingUser.email) {
                const userWithEmail = await this.userRepository.findByEmail(userData.email);
                if (userWithEmail) {
                    throw new Error('El email ya está registrado');
                }
            }

            return await this.userRepository.updateUser(id, userData);
        } catch (error) {
            console.error('Error en updateUser service:', error);
            throw error;
        }
    }

    // Eliminar usuario
    async deleteUser(id) {
        try {
            const result = await this.userRepository.deleteUser(id);
            if (!result) {
                throw new Error('Usuario no encontrado');
            }
            return true;
        } catch (error) {
            console.error('Error en deleteUser service:', error);
            throw error;
        }
    }
}

module.exports = UserServices;