


const General = () => {


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
            <p className="text-gray-500">Profession</p>
            <p className="font-semibold">Patient</p>
            </div>
            <div>
            <p className="text-gray-500">Status</p>
            <p className="font-semibold">--</p>
            </div>
          </div>

      </div>
    </div>
  );
}

export default General
