import ExerciseType from '../models/ExerciseType';

class ExerciseTypeController{
    async index(request, response){
        const exerciseTypes = ExerciseType.find;
        await ExerciseType.find({}, function(err, exerciseTypes){
            return response.json(exerciseTypes);
        });
    }

    async show(request, response){
        const {id} = request.params;

        const exerciseType = ExerciseType.findById(id);

        if (!exerciseType){
            return response.status(401).json({error: "Dia de exercício não cadastrado"});
        }

        return response.json(exerciseType);
    }

    async create(request, response){
        const {name } = request.body;
        const created = new Date();
        const updated = new Date();

        const exerciseType = await ExerciseType.create({name, created, updated})

        return response.json(exerciseType);
    }

    async delete(request, response){
        try {
            const {id} = request.params;
            await ExerciseType.findByIdAndDelete(id);
            return response.status(200).json({sucess: "Registro apagado com sucesso"});
            
        } catch (error) {
            console.log(error);
            return response.status(500).json({error: "Erro ao processar solicitação"});
        }
    }
}

export default ExerciseTypeController;