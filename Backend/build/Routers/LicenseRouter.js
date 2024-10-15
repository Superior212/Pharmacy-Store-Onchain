"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LicenseController_1 = require("../Controllers/LicenseController");
const router = (0, express_1.Router)();
router.post('/verifyLicense', LicenseController_1.verifyLicense);
exports.default = router;
