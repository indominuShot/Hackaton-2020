const bcrypt = require('bcryptjs');
const connection = require('../Database/connections');
const generateToken = require('./utils/generateToken');

module.exports = {
    // LISTAGEM DE ESTUDANTES
    async index(req, res) {
        const response = await connection('students').select('*');

        if (!response.lenght === 0) {
            return res.status(404).json({
                Message:
                    'Não encontramos nenhum estudante cadastrado nesta escola.',
            });
        }

        // Remove a senha do retorno dos dados
        const parsedResponse = response.map((student) => {
            student.password = undefined;

            return student;
        });

        return res.status(200).json(parsedResponse);
    },

    // CRIAÇÃO DE ESTUDANTE
    async create(req, res) {
        const {
            name, email, password, age,
        } = req.body;

        // Criptografia de senha
        const hashedPassword = await bcrypt.hash(password, 10);
        const userType = 'Student';

        // Verifica se já existe um usuário com o mesmo email
        const userExist = await connection('students')
            .select('email')
            .where({
                email,
            })
            .first();

        if (userExist) {
            return res
                .status(401)
                .json({ Message: 'Este usuário já existe!' });
        }

        const response = await connection('students').insert({
            name,
            email,
            password: hashedPassword,
            age,
            user: userType,
        });

        if (!response) {
            return res.status(500).json({
                Message: 'Não foi possível cadastrar este aluno.',
            });
        }

        return res.status(200).json(response);
    },

    async login(req, res) {
        const { email, password } = req.body;

        const userExists = await connection('students')
            .select('email', 'password', 'user')
            .where({ email })
            .first();

        if (!userExists) {
            return res
                .status(404)
                .json({ Message: 'Usuário ou senha incorretos!' });
        }

        if (!(await bcrypt.compare(password, userExists.password))) {
            return res
                .status(404)
                .json({ Message: 'Usuário ou senha incorretos!' });
        }

        userExists.password = undefined;

        const { user } = userExists;

        return res.json({
            userExists,
            userToken: generateToken({
                userEmail: email,
                userType: user,
            }),
        });
    },
};
