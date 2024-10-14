import { Router } from 'express';
import {
    uploadMedication,
    getMedication,
    updateMedication,
    deleteMedication,
    unlistMedication,
    updateDrugAvailability,
} from '../Controllers/DrugController';

const router: Router = Router();

router.post('/createMedications', uploadMedication);
router.put('/medications/:id/unlist', unlistMedication);  
router.get('/getMedicationsById/:id', getMedication);
router.put('/updateMedicationsById/:id', updateMedication);
router.put('/medications/:id/availability', updateDrugAvailability); 
router.delete('/deleteMedications/:id', deleteMedication);

export default router;
