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