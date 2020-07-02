const bcrypt = require('bcryptjs');
const connection = require('../Database/connections');

module.exports = {
    async index(req, res) {
        const response = await connection('school').select('*');

        if (!response.lenght === 0) {
            return res.status(404).json({
                Message:
                    'Não encontramos nenhuma escola cadastrada.',
            });
        }

        return res.status(200).json(response);
    },

    async create(req, res) {
        const {
            name, email, password, cnpj,
        } = req.body;

        // Criptografia de senha
        const hashedPassword = await bcrypt.hash(password, 10);
        const userType = 'School';

        // Verifica se já existe um usuário com o mesmo email
        const userExist = await connection('school')
            .select('email')
            .where({
                email,
            })
            .first();

        if (userExist) {
            return res
                .status(401)
                .json({ Message: 'Essa escola já existe!' });
        }

        const response = await connection('school').insert({
            name,
            email,
            password: hashedPassword,
            cnpj,
            user: userType,
        });

        if (!response) {
            return res.status(500).json({
                Message: 'Não foi possível cadastrar essa escola.',
            });
        }

        return res.status(200).json(response);
    },
};