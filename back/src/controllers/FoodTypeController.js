import FoodType from '../models/FoodType';

class FoodTypeController{
    async index(request, response){
        const FoodTypes = FoodType.find()
        FoodType.find({}, function(err, FoodTypes) {
            return response.json(FoodTypes);
         });
    }

    async show(request, response){
        const {id} = request.params;

        const foodType = await FoodType.findOne({id});

        if (!foodType){
            return response.status(401).json({error: "Tipo de prato não cadastrado"});
        }
        
        return response.json(foodType);
    }

    async create(request, response) {
        const { description } = request.body;
        const created = new Date();
        const updated = new Date();

        const foodType = await FoodType.create({description, created, updated});
        return response.json(foodType);
        
    }

    async delete(request, response) {
        try {
            const { id } = request.params;
            await FoodType.findByIdAndDelete(id);
            return response.status(200).json({sucess: "Registro apagado com sucesso"});
            
        } catch (error) {
            console.log(error);
            return response.status(500).json({error: "Erro ao processar solicitação"});
        }
    }
}

export default FoodTypeController;