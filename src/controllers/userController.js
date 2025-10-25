const UserService = require('../services/userServices');
const UserRepository = require('../repositories/userRepository');

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

const userController = {
    // Crear usuario
    async createUser(req, res, next) {
        try {
            const userData = req.body;
            console.log('Creando usuario:', userData);
            const user = await userService.createUser(userData);
            res.status(201).json({
                message: 'Usuario creado exitosamente',
                data: user
            });
        } catch (error) {
            next(error);
        }
    },

    // Obtener todos los usuarios
    async getAllUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();
            res.json({
                message: 'Usuarios encontrados',
                data: users
            });
        } catch (error) {
            next(error);
        }
    },

    // Obtener usuario por ID
    async getUserById(req, res, next) {
        try {
            const { id } = req.params;
            const user = await userService.getUserById(id);
            if (!user) {
                return res.status(404).json({
                    message: 'Usuario no encontrado'
                });
            }
            res.json({
                message: 'Usuario encontrado',
                data: user
            });
        } catch (error) {
            next(error);
        }
    },

    // Actualizar usuario
    async updateUser(req, res, next) {
        try {
            const { id } = req.params;
            const userData = req.body;
            const updatedUser = await userService.updateUser(id, userData);
            if (!updatedUser) {
                return res.status(404).json({
                    message: 'Usuario no encontrado'
                });
            }
            res.json({
                message: 'Usuario actualizado exitosamente',
                data: updatedUser
            });
        } catch (error) {
            next(error);
        }
    },

    // Eliminar usuario
    async deleteUser(req, res, next) {
        try {
            const { id } = req.params;
            const result = await userService.deleteUser(id);
            if (!result) {
                return res.status(404).json({
                    message: 'Usuario no encontrado'
                });
            }
            res.json({
                message: 'Usuario eliminado exitosamente'
            });
        } catch (error) {
            next(error);
        }
    }
};

module.exports = userController;