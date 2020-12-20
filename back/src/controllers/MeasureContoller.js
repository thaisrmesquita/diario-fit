import User from '../models/User';
import Measure from '../models/Measure';

class MeasureController{
    async index(request, response){
        const measures = Measure.find()
        Measure.find({}, function(err, measures) {
            return response.json(measures);
         });
    }

    async show(request, response){
        const {id} = request.params;
        const measure = await Measure.findById(id);

        if (!measure){
            return response.status(401).json({error: "Medidas não cadastradas"});
        }
        
        return response.json(measure);
    }

    async create(request, response) {
        const { rightThigh, leftThigh, rightArm, leftArm, waist, hip, height, userId } = request.body;
        const created = new Date();
        const updated = new Date();

        const user = User.findById(userId);

        if (!user){
            return response.status(401).json({error: "Usuário não cadastrado"});
        }

        const measure = await Measure.create({rightThigh, leftThigh, rightArm, leftArm, waist, hip, height, userId, created, updated});
        return response.json(measure);
        
    }

    async delete(request, response) {
        try {
            const { id } = request.params;
            await Measure.findByIdAndDelete(id);
            return response.status(200).json({sucess: "Registro apagado com sucesso"});
            
        } catch (error) {
            console.log(error);
            return response.status(500).json({error: "Erro ao processar solicitação"});
        }
    }
}

export default MeasureController;