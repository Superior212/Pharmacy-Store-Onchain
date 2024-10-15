import { Request, Response } from 'express';
import License from '../Models/LicenseModel';

export const verifyLicense = async (req: Request, res: Response): Promise<void> => {
    const { licenseId } = req.body;

    try {
        const license = await License.findOne({ licenseId });

        if (!license) {
            res.status(404).json({ message: 'License not found' });
            return;
        }
        const isLicenseValid = license.isVerified && new Date(license.licenseExpiry) > new Date();

        if (isLicenseValid) {
            res.status(200).json({ message: 'License is valid', license });
        } else if (!license.isVerified) {
            res.status(400).json({ message: 'License is not verified' });
        } else {
            res.status(400).json({ message: 'License is expired' });
        }

    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).json({ message: 'Server error', error: errorMessage });
    }
};
