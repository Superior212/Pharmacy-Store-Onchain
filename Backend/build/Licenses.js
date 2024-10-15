"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const LicenseModel_1 = __importDefault(require("./Models/LicenseModel"));
const licenses = [
    {
        licenseId: 'DOC123456',
        fullName: 'Dr Agbakwuru Oluchi',
        specialization: 'General Physician',
        licenseExpiry: new Date('2026-05-20'),
        issuingAuthority: 'Medical Board of Nigeria',
        isVerified: true
    },
    {
        licenseId: 'DOC124567',
        fullName: 'Dr shuu',
        specialization: 'General Physician',
        licenseExpiry: new Date('2023-05-20'),
        issuingAuthority: 'Medical Board of Nigeria',
        isVerified: true
    },
    {
        licenseId: 'PHA987654',
        fullName: 'Dr Superior',
        specialization: 'Pharmacist',
        licenseExpiry: new Date('2025-12-31'),
        issuingAuthority: 'Pharmacy Board of Nigeria',
        isVerified: true
    },
    {
        licenseId: 'DOC123457',
        fullName: 'Dr Joy',
        specialization: 'Dentist',
        licenseExpiry: new Date('2029-01-31'),
        issuingAuthority: 'Medical Board of Nigeria',
        isVerified: true
    },
    {
        licenseId: 'PHA987655',
        fullName: 'Dr Simi',
        specialization: 'Pharmacist',
        licenseExpiry: new Date('2028-12-03'),
        issuingAuthority: 'Pharmacy Board of Nigeria',
        isVerified: true
    },
];
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect('mongodb+srv://agbakwuruoluchi29:jXZlVJjbx3RmEVqe@cluster0.5ofba.mongodb.net/PharmX', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Connected to MongoDB');
            yield LicenseModel_1.default.deleteMany();
            yield LicenseModel_1.default.insertMany(licenses);
            console.log('Database seeded successfully!');
        }
        catch (error) {
            console.error('Error seeding the database:', error.message);
        }
        finally {
            process.exit();
        }
    });
}
seedDatabase();
