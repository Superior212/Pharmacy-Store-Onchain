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
exports.verifyLicense = void 0;
const LicenseModel_1 = __importDefault(require("../Models/LicenseModel"));
const verifyLicense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { licenseId } = req.body;
    try {
        const license = yield LicenseModel_1.default.findOne({ licenseId });
        if (!license) {
            res.status(404).json({ message: 'License not found' });
            return;
        }
        const isLicenseValid = license.isVerified && new Date(license.licenseExpiry) > new Date();
        if (isLicenseValid) {
            res.status(200).json({ message: 'License is valid', license });
        }
        else if (!license.isVerified) {
            res.status(400).json({ message: 'License is not verified' });
        }
        else {
            res.status(400).json({ message: 'License is expired' });
        }
    }
    catch (error) {
        const errorMessage = error.message;
        res.status(500).json({ message: 'Server error', error: errorMessage });
    }
});
exports.verifyLicense = verifyLicense;
