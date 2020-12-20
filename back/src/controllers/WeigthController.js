import Weight from '../models/Weight';
import User from '../models/User';

class WeightController{
    async index(request, response){
        const weights = Weight.find;
        await Weight.find({}, function(err, weights){
            return response.json(weights);
        });
    }

    async show(request, response){
        const {id} = request.params;

        const weight = Weight.findById(id);

        if (!weight){
            return response.status(401).json({error: "Exercício não cadastrado"});
        }

        return response.json(weight);
    }

    async create(request, response){
        const {weight, userId } = request.body;
        const created = new Date();
        const updated = new Date();

        const user = User.findById(userId);

        if (!user){
            return response.status(404).json({error: "Tipo de exercício não cadastrado"})
        }

        const weights = await Weight.create({weight, userId, created, updated})

        return response.json(weights);
    }

    async delete(request, response){
        try {
            const {id} = request.params;
            await Weight.findByIdAndDelete(id);
            return response.status(200).json({sucess: "Registro apagado com sucesso"});
            
        } catch (error) {
            console.log(error);
            return response.status(500).json({error: "Erro ao processar solicitação"});
        }
    }
}

export default WeightController;