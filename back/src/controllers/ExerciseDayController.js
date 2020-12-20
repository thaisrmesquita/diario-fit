import Exercise from '../models/Exercise';
import ExerciseDay from '../models/ExerciseDay';

class ExerciseDayController{
    async index(request, response){
        const exerciseDays = ExerciseDay.find;
        await ExerciseDay.find({}, function(err, exerciseDays){
            return response.json(exerciseDays);
        });
    }

    async show(request, response){
        const {id} = request.params;

        const exerciseDay = ExerciseDay.findById(id);

        if (!exerciseDay){
            return response.status(401).json({error: "Dia de exercício não cadastrado"});
        }

        return response.json(exerciseDay);
    }

    async create(request, response){
        const {repetitions, exerciseId } = request.body;
        const created = new Date();
        const updated = new Date();

        const exercise = Exercise.findById(exerciseId);

        if (!exercise){
            return response.status(404).json({error: "Tipo de exercício não cadastrado"})
        }

        const exerciseDay = await ExerciseDay.create({repetitions, exerciseId, created, updated})

        return response.json(exerciseDay);
    }

    async delete(request, response){
        try {
            const {id} = request.params;
            await ExerciseDay.findByIdAndDelete(id);
            return response.status(200).json({sucess: "Registro apagado com sucesso"});
            
        } catch (error) {
            console.log(error);
            return response.status(500).json({error: "Erro ao processar solicitação"});
        }
    }
}

export default ExerciseDayController;