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
interface ProductInfo {
    category: string;
    expiryDate: number;
    id: number;
    imageUrl: string;
    isAvailable: boolean;
    isListed: boolean;
    isPrescriptionRequired: boolean;
    owner: string;
    pricePerUnit: number;
    productName: string;
    stockQuantity: number;
}