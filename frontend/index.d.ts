interface UserInputs {
    firstName: string;
    lastName: string;
    description: string;
    isWalletVerified: boolean;
  };

  interface HealthOfficerFormInputs extends UserInputs {
      yearsOfExperience: string;
      clinicName: string;
      licenceNumber: string;
      

  }