import mongoose, { Schema } from 'mongoose';

interface IMedication {
    name: string;
    category: string;
    imageUrl?: string;
    isListed: boolean;
    isAvailable: boolean;
}

const medicationSchema: Schema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String },
    isListed: { type: Boolean, default: true },  
    isAvailable: { type: Boolean, default: true } 
});

const Medication = mongoose.model<IMedication>('Medication', medicationSchema);
export default Medication;
export { IMedication };
