const connection = require('../Database/connections');

module.exports = {
    async index(req, res) {
        const response = await connection('students').select('*');

        if (!response.lenght === 0) {
            return res.status(404).json({
                Message:
                    'Não encontramos nenhum estudante cadastrado nesta escola.',
            });
        }

        return res.status(200).json(response);
    },

    async create(req, res) {
        const {
            name, email, password, age,
        } = req.body;

        const response = await connection('students').insert({
            name,
            email,
            password,
            age,
        });

        if (!response) {
            return res.status(500).json({
                Message: 'Não foi possível cadastrar este aluno.',
            });
        }
        return res.status(200);
    },
};
