import { validate } from 'gerador-validador-cpf';
import bcrypt from 'bcryptjs';
import User from '../models/User';

class UserController{
    async index(request, response){
        try {
            const users = User.find()
            User.find({}, function(err, users) {
                return response.json(users);
             });
            
        } catch (error) {
            return response.status(401).json({error: "Algo deu errado, tente novamente!"});
        }
    }

    async show(request, response){
        try {
            const {id} = request.params;
            const users = await User.findById(id);
    
            if (!users){
                return response.status(401).json({error: "Usuário não cadastrado"});
            }
            
            return response.json(users);
        } catch (error) {
            return response.status(401).json({error: "Algo deu errado, tente novamente!"});
        }
    }

    async create(request, response) {
        try {
            const { name, email, cpf, start_weight, wished_weight, date_birth, password } = request.body;
            const created = new Date();
            const updated = new Date();
    
            let cpfIsValid = validate(cpf);
    
            if(!cpfIsValid) {
                return response.status(401).json({error: "CPF inválido"});
            }
    
            let user = await User.findOne({cpf});
            
            if(!user) {
                let passwordHash = await bcrypt.hash(password, 8);
                user = await User.create({name, cpf, password:passwordHash, email, start_weight, wished_weight, date_birth, created, updated});
                return response.json(user);
            } else {
                return response.status(401).json({error: "Usuário Já existe"});
            }
        } catch (error) {
            return response.status(401).json({error: "Algo deu errado, tente novamente!"});
        }
    }

    async delete(request, response) {
        try {
            const { id } = request.params;
            await User.findByIdAndDelete(id);
            return response.status(200).json({sucess: "Registro apagado com sucesso"});
            
        } catch (error) {
            console.log(error);
            return response.status(500).json({error: "Erro ao processar solicitação"});
        }
        
    }
}

export default UserController;