import Exercise from '../models/Exercise';
import ExerciseType from '../models/ExerciseType';

class ExerciseController{
    async index(request, response){
        const exercises = Exercise.find;
        await Exercise.find({}, function(err, exercises){
            return response.json(exercises);
        });
    }

    async show(request, response){
        const {id} = request.params;

        const exercise = Exercise.findById(id);

        if (!exercise){
            return response.status(401).json({error: "Exercício não cadastrado"});
        }

        return response.json(exercise);
    }

    async create(request, response){
        const {name, exerciseTypeId } = request.body;
        const created = new Date();
        const updated = new Date();

        const exerciseType = ExerciseType.findById(exerciseTypeId);

        if (!exerciseType){
            return response.status(404).json({error: "Tipo de exercício não cadastrado"})
        }

        const exercise = await Exercise.create({name, exerciseTypeId, created, updated})

        return response.json(exercise);
    }

    async delete(request, response){
        try {
            const {id} = request.params;
            await Exercise.findByIdAndDelete(id);
            return response.status(200).json({sucess: "Registro apagado com sucesso"});
            
        } catch (error) {
            console.log(error);
            return response.status(500).json({error: "Erro ao processar solicitação"});
        }
    }
}

export default ExerciseController;