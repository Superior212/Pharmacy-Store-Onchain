import { UserManagementContract } from "@/constant";
import { useAccount, useReadContract } from "wagmi";

const General = () => {
  const { address } = useAccount();

  const { data: profileData, isLoading: loadingProfile, error } = useReadContract({
    abi: UserManagementContract.abi,
    address: UserManagementContract.address as `0x${string}`,
    functionName: "getPatientProfile",
    args: [address],
  });
  
  const { data: roleData, isLoading: loadingRole } = useReadContract({
    abi: UserManagementContract.abi,
    address: UserManagementContract.address as `0x${string}`,
    functionName: "getRole",
    args: [address],
  });

  if (error || loadingProfile) return <p>Loading...</p>
  if (error || loadingRole) return <p>Loading...</p>
  if(error) return <p>Error Loading Profile: {error}</p>
  if (error) return <p>Error loading role: {error}</p>;

  const PatientProfile = profileData as string[];
  const role = roleData as number;
  console.log("getRole: ", role);

  const getRoleDescription = (role: number) => {
    switch (role) {
      case 1:
        return "Patient";

      default:
        return "Unknown Role";
    }
  };

  return (
    <div className="w-full p-6">

      {/* Content area */}
      <div className="mt-6">
  
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Date Joined</p>
              <p className="font-semibold">Friday, 21st October, 2024</p>
            </div>
            <div>
            <p className="text-gray-500">Number of Sessions</p>
            <p className="font-semibold">40</p>
            </div>
            <div>
            <p className="text-gray-500">Status</p>
            <p className="font-semibold">{getRoleDescription(role)}</p>
            </div>
            <div>
            <p className="text-gray-500">DOB</p>
            <p className="font-semibold">{PatientProfile[2]}</p>
            </div>
          </div>

      </div>
    </div>
  );
}

export default General
