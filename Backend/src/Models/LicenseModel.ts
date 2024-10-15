import mongoose, { Document, Schema } from 'mongoose';

interface ILicense extends Document {
    licenseId: string;
    fullName: string;
    specialization: string;
    licenseExpiry: Date;
    issuingAuthority: string;
    isVerified: boolean;
}

const licenseSchema: Schema = new Schema({
    licenseId: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    specialization: { type: String, required: true },
    licenseExpiry: { type: Date, required: true },
    issuingAuthority: { type: String, required: true },
    isVerified: { type: Boolean, default: false }
});

const License = mongoose.model<ILicense>('License', licenseSchema);
export default License;
