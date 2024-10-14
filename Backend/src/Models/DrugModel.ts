import mongoose, { Schema } from 'mongoose';

interface IMedication {
    medicationName: string;
    medicationCategory: string;
    medicationImageUrl?: string;
    isListed: boolean;
    isAvailable: boolean;
    quantity: number
}

const medicationSchema: Schema = new Schema({
    medicationName: { type: String, required: true },
    medicationCategory: { type: String, required: true },
    medicationImageUrl: { type: String },
    isListed: { type: Boolean, default: true },  
    isAvailable: { type: Boolean, default: true },
    quantity: { type: Number, required: true, default: 0 }
});

const Medication = mongoose.model<IMedication>('Medication', medicationSchema);
export default Medication;
export { IMedication };
