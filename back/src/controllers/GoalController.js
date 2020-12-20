import Goal from '../models/Goal';
import User from '../models/User';

class GoalController{
    async index(request, response){
        const goals = Goal.find()
        Goal.find({}, function(err, goals) {
            return response.json(goals);
         });
    }

    async show(request, response){
        const {id} = request.params;

        const goal = await Goal.findOne({id});

        if (!goal){
            return response.status(401).json({error: "Objetivo não cadastrado"});
        }
        
        return response.json(goal);
    }

    async create(request, response) {
        const { description, goalDate, userId } = request.body;
        const created = new Date();
        const updated = new Date();

        const user = await User.findById(userId);

        if (!user){
            return response.status(401).json({error: "Usuário não cadastrado"});
        }

        const goal = await Goal.create({description, goalDate, userId, created, updated});
        return response.json(goal);
        
    }

    async delete(request, response) {
        try {
            const { id } = request.params;
            await Goal.findByIdAndDelete(id);
            return response.status(200).json({sucess: "Registro apagado com sucesso"});
            
        } catch (error) {
            console.log(error);
            return response.status(500).json({error: "Erro ao processar solicitação"});
        }
    }
}

export default GoalController;