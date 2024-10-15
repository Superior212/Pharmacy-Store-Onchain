import mongoose, { ConnectOptions } from 'mongoose';
import License from './Models/LicenseModel'; 

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

async function seedDatabase(): Promise<void> {
    try {
       
        await mongoose.connect('mongodb+srv://agbakwuruoluchi29:jXZlVJjbx3RmEVqe@cluster0.5ofba.mongodb.net/PharmX', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);

        console.log('Connected to MongoDB');

        await License.deleteMany(); 
        await License.insertMany(licenses);

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding the database:', (error as Error).message);
    } finally {

        process.exit();
    }
}

seedDatabase();
