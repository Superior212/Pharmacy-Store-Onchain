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
exports.deleteMedication = exports.updateDrugAvailability = exports.updateMedication = exports.getMedication = exports.unlistMedication = exports.uploadMedication = void 0;
const DrugModel_1 = __importDefault(require("../Models/DrugModel"));
const uploadMedication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productName, category, brandName, drugType, isPrescriptionRequired, price, expiryDate, description, medicationImageUrl, quantityInStock } = req.body;
        const medication = new DrugModel_1.default({
            productName, category, brandName, drugType, isPrescriptionRequired,
            price, expiryDate, description, medicationImageUrl, quantityInStock
        });
        const savedMedication = yield medication.save();
        res.status(201).json({ message: 'Medication uploaded successfully', medication: savedMedication });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating medication', error });
    }
});
exports.uploadMedication = uploadMedication;
const unlistMedication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medication = yield DrugModel_1.default.findByIdAndUpdate(req.params.id, { isListed: false, isAvailable: false }, { new: true });
        if (!medication) {
            res.status(404).json({ message: 'Medication not found' });
        }
        else {
            res.status(200).json({ message: 'Medication unlisted successfully', medication });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error unlisting this medication', error });
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
        const { productName, category, brandName, drugType, price, expiryDate, description, medicationImageUrl, quantityInStock } = req.body;
        const medication = yield DrugModel_1.default.findByIdAndUpdate(req.params.id, { productName, category, brandName, drugType, price, expiryDate, description, medicationImageUrl, quantityInStock }, { new: true, runValidators: true });
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
const updateDrugAvailability = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.updateDrugAvailability = updateDrugAvailability;
const deleteMedication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medication = yield DrugModel_1.default.findByIdAndDelete(req.params.id);
        if (!medication) {
            res.status(404).json({ message: 'Medication not found' });
        }
        else {
            res.status(200).json({ message: 'Medication deleted successfully', medication });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting medication', error });
    }
});
exports.deleteMedication = deleteMedication;
