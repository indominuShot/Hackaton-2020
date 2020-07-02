const bcrypt = require('bcryptjs');
const connection = require('../Database/connections');

module.exports = {
    async index(req, res) {
        const response = await connection('teachers').select('*');

        if (!response.lenght === 0) {
            return res.status(404).json({
                Message:
                    'Não encontramos nenhum professor cadastrado nesta escola.',
            });
        }

        return res.status(200).json(response);
    },

    async create(req, res) {
        const {
            name, email, password, cpf, age
        } = req.body;

        // Criptografia de senha
        const hashedPassword = await bcrypt.hash(password, 10);
        const userType = 'Teacher';

        // Verifica se já existe um usuário com o mesmo email
        const userExist = await connection('teachers')
            .select('email')
            .where({
                email,
            })
            .first();

        if (userExist) {
            return res
                .status(401)
                .json({ Message: 'Este professor já existe!' });
        }

        const response = await connection('teachers').insert({
            name,
            email,
            password: hashedPassword,
            cpf,
            age,
            user: userType,
        });

        if (!response) {
            return res.status(500).json({
                Message: 'Não foi possível cadastrar este professor.',
            });
        }

        return res.status(200).json(response);
    },
};