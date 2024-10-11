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
exports.deleteMedication = exports.updateAvailability = exports.updateMedication = exports.getMedication = exports.unlistMedication = exports.listMedications = exports.createMedication = void 0;
const DrugModel_1 = __importDefault(require("../Models/DrugModel"));
const createMedication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, category, imageUrl } = req.body;
        const medication = new DrugModel_1.default({ name, category, imageUrl });
        const savedMedication = yield medication.save();
        res.status(201).json({ message: 'Medication created successfully', medication: savedMedication });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating medication', error });
    }
});
exports.createMedication = createMedication;
const listMedications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medications = yield DrugModel_1.default.find({ isListed: true, isAvailable: true });
        res.status(200).json(medications);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving medications', error });
    }
});
exports.listMedications = listMedications;
const unlistMedication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medication = yield DrugModel_1.default.findByIdAndUpdate(req.params.id, { isListed: false }, { new: true });
        if (!medication) {
            res.status(404).json({ message: 'Medication not found' });
        }
        else {
            res.status(200).json({ message: 'Medication unlisted successfully', medication });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error unlisting medication', error });
    }
});
exports.unlistMedication = unlistMedication;
const getMedication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medication = yield DrugModel_1.default.findById(req.params.id);
        if (!medication) {
            res.status(404).json({ message: 'Medication not found' });
        }
        else {
            res.status(200).json(medication);
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving medication', error });
    }
});
exports.getMedication = getMedication;
const updateMedication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, category, imageUrl } = req.body;
        const medication = yield DrugModel_1.default.findByIdAndUpdate(req.params.id, { name, category, imageUrl }, { new: true });
        if (!medication) {
            res.status(404).json({ message: 'Medication not found' });
        }
        else {
            res.status(200).json({ message: 'Medication updated successfully', medication });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating medication', error });
    }
});
exports.updateMedication = updateMedication;
const updateAvailability = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { isAvailable } = req.body;
        const medication = yield DrugModel_1.default.findByIdAndUpdate(req.params.id, { isAvailable }, { new: true });
        if (!medication) {
            res.status(404).json({ message: 'Medication not found' });
        }
        else {
            res.status(200).json({ message: 'Medication availability updated successfully', medication });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating availability', error });
    }
});
exports.updateAvailability = updateAvailability;
const deleteMedication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medication = yield DrugModel_1.default.findByIdAndDelete(req.params.id);
        if (!medication) {
            res.status(404).json({ message: 'Medication not found' });
        }
        else {
            res.status(200).json({ message: 'Medication deleted successfully' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting medication', error });
    }
});
exports.deleteMedication = deleteMedication;
