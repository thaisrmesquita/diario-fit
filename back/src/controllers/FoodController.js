import Food from '../models/Food';
import FoodType from '../models/FoodType';

class FoodController{
    async index(request, response){
        const Foods = Food.find()
        Food.find({}, function(err, Foods) {
            return response.json(Foods);
         });
    }

    async show(request, response){
        const {id} = request.params;
        const food = await Food.findById(id);

        if (!food){
            return response.status(401).json({error: "Prato não cadastrado"});
        }
        
        return response.json(food);
    }

    async create(request, response) {
        const { name, portionType, quantity, foodTypeId } = request.body;
        const created = new Date();
        const updated = new Date();

        const foodType = FoodType.findById(foodTypeId);

        if (!foodType){
            return response.status(401).json({error: "Tipo de prato não cadastrado"});
        }

        const food = await Food.create({name, portionType, quantity, foodTypeId, created, updated});
        return response.json(food);
        
    }

    async delete(request, response) {
        try {
            const { id } = request.params;
            await Food.findByIdAndDelete(id);
            return response.status(200).json({sucess: "Registro apagado com sucesso"});
            
        } catch (error) {
            console.log(error);
            return response.status(500).json({error: "Erro ao processar solicitação"});
        }
    }
}

export default FoodController;