import { Router } from 'express';
import {
    createMedication,
    getMedication,
    updateMedication,
    deleteMedication,
    unlistMedication,
    updateAvailability,
} from '../Controllers/DrugController';

const router: Router = Router();

router.post('/createMedications', createMedication);
router.put('/medications/:id/unlist', unlistMedication);  
router.get('/getMedicationsById/:id', getMedication);
router.put('/updateMedicationsById/:id', updateMedication);
router.put('/medications/:id/availability', updateAvailability); 
router.delete('/deleteMedications/:id', deleteMedication);

export default router;
