import mongoose, { Document, Schema } from 'mongoose';

interface IMedication extends Document {
    productName: string;
    category: string;
    brandName: string;
    drugType: string;
    isPrescriptionRequired: boolean;
    price: number;
    expiryDate: string;
    description: string;
    medicationImageUrl?: string;
    isListed: boolean;
    isAvailable: boolean;
    quantityInStock: number;
}

const medicationSchema: Schema = new Schema({
    productName: { type: String, required: true },
    category: { type: String, required: true },
    brandName: { type: String, required: true },
    drugType: { type: String, required: true },
    isPrescriptionRequired: { type: Boolean, default: false },
    price: { type: Number, required: true },
    expiryDate: { type: String, required: true },
    description: { type: String, required: true },
    medicationImageUrl: { type: String },
    isListed: { type: Boolean, default: true },
    isAvailable: { type: Boolean, default: true },
    quantityInStock: { type: Number, required: true, default: 0 },
});

const Medication = mongoose.model<IMedication>('Medication', medicationSchema);
export default Medication;
export { IMedication };
