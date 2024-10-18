interface UserInputs {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    description: string;
    isInAgreement: boolean;
  };
  
  interface HealthOfficerFormInputs extends UserInputs {
    yearsOfExperience: number;
    licenceNumber: string;
    clinicName: string;
    dateOfBirth?: string;
    medicalCertificateHash: string;
  }
  
  interface CareProvidersFormInputs extends UserInputs {
    licenseNumberCertificateHash: string;
    businessNumberCertificate: string;
    dateOfBirth?: string;
    businessNumber: number;
  }
  
  interface ProductInfo {
    category: string;
    manufacturerName: string;
    expiryDate: number;
    id: number;
    imageUrl: string;
    isPrescriptionRequired: boolean;
    pricePerUnit: number;
    productName: string;
    stockQuantity: number;
  }