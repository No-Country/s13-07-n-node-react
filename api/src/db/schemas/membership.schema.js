import mongoose from 'mongoose';

const membresiaSchema = new mongoose.Schema({
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario', 
        required: true
    },
    planActual: {
        type: Schema.Types.ObjectId,
        ref: 'Plan', 
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true
    },
    historialPlanes: [{
        planAnterior: {
            type: Schema.Types.ObjectId,
            ref: 'Plan'  //Array para guardar plan anterior
        }
    }]
});
const Membresia = mongoose.model('Membresia', membresiaSchema);

export default Membresia;
