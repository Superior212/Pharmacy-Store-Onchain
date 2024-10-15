import { Router } from 'express';
import {
verifyLicense
} from '../Controllers/LicenseController';

const router: Router = Router();

router.post('/verifyLicense', verifyLicense);


export default router;
