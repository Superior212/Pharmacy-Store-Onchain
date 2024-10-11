import { Request, Response } from 'express';
import Medication, { IMedication } from '../Models/DrugModel';

export const createMedication = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, category, imageUrl } = req.body;
        //add quantity
        const medication = new Medication({ name, category, imageUrl });
        const savedMedication = await medication.save();
        res.status(201).json({ message: 'Medication created successfully', medication: savedMedication });
    } catch (error) {
        res.status(500).json({ message: 'Error creating medication', error });
    }
};

// export const listMedications = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const medications = await Medication.find({ isListed: true, isAvailable: true }); 
//         res.status(200).json(medications);
//     } catch (error) {
//         res.status(500).json({ message: 'Error retrieving medications', error });
//     }
// };

export const unlistMedication = async (req: Request, res: Response): Promise<void> => {
    try {
        const medication = await Medication.findByIdAndUpdate(
            req.params.id,
            { isListed: false },
            { new: true }
        );
        if (!medication) {
            res.status(404).json({ message: 'Medication not found' });
        } else {
            res.status(200).json({ message: 'Medication unlisted successfully', medication });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error unlisting medication', error });
    }
};

export const getMedication = async (req: Request, res: Response): Promise<void> => {
    try {
        const medication = await Medication.findById(req.params.id);
        if (!medication) {
            res.status(404).json({ message: 'Medication not found' });
        } else {
            res.status(200).json(medication);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving medication', error });
    }
};

export const updateMedication = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, category, imageUrl } = req.body;
        const medication = await Medication.findByIdAndUpdate(
            req.params.id,
            { name, category, imageUrl },
            { new: true }
        );
        if (!medication) {
            res.status(404).json({ message: 'Medication not found' });
        } else {
            res.status(200).json({ message: 'Medication updated successfully', medication });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating medication', error });
    }
};
export const updateAvailability = async (req: Request, res: Response): Promise<void> => {
    try {
        const { isAvailable } = req.body;
        const medication = await Medication.findByIdAndUpdate(
            req.params.id,
            { isAvailable },
            { new: true }
        );
        if (!medication) {
            res.status(404).json({ message: 'Medication not found' });
        } else {
            res.status(200).json({ message: 'Medication availability updated successfully', medication });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating availability', error });
    }
};


export const deleteMedication = async (req: Request, res: Response): Promise<void> => {
    try {
        const medication = await Medication.findByIdAndDelete(req.params.id);
        if (!medication) {
            res.status(404).json({ message: 'Medication not found' });
        } else {
            res.status(200).json({ message: 'Medication deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting medication', error });
    }
};
