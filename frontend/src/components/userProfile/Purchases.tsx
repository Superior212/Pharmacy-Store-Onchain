

type Transaction = {
    id: string;
    date: string;
    Receipient: string;
    product: string;
    Amount: string;
    status: 'Delivered' | 'Pending' | 'Failed';
  };
  
  const transactions: Transaction[] = [
    {
      id: '456789356',
      date: 'Oct 10, 2024, 04:30pm',
      Receipient: '0x000000000000000',
      product: 'Coughlin',
      Amount: '0.002ETH',
      status: 'Delivered',
    },
    {
      id: '456789356',
      date: 'Oct 14, 2024, 02:00pm',
      Receipient: '0x000000000000000',
      product: 'Anapthaline Cite',
      Amount: '0.002ETH',
      status: 'Delivered',
    },
    {
      id: '456789356',
      date: 'Oct 16, 2024, 08:00pm',
      Receipient: '0x000000000000000',
      product: 'Anapthaline',
      Amount: '0.002ETH',
      status: 'Failed',
    },
    {
      id: '456789356',
      date: 'Oct 19, 2024, 05:30pm',
      Receipient: '0x000000000000000',
      product: 'Vitamin C',
      Amount: '0.002ETH',
      status: 'Pending',
    },
  ];
  
  const getStatusClass = (status: 'Delivered' | 'Failed' | 'Pending') => {
    switch (status) {
      case 'Delivered':
        return 'text-green-500 bg-green-100';
      case 'Failed':
        return 'text-yellow-500 bg-yellow-100';
      case 'Pending':
        return 'text-red-500 bg-red-100';
      default:
        return '';
    }
  };


const Purchases: React.FC = () => {


  return (
    <div className="w-full  p-6 mt-14 bg-white shadow-sm rounded-lg">
      
      <div className="bg-white shadow-md rounded-lg w-full max-w-7xl overflow-x-auto">
      
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Ref ID</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase"> Transaction Date</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Receipient</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Product</th>
              <th className="py-2 px-1 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Amount</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.id}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.date}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.Receipient}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.product  }</td>
                <td className="py-2 px-6 w-10 h-10 border-b rounded-sm border-gray-200">{transaction.Amount  }</td>
                <td className="py-3 px-4 border-b border-gray-200">
                  <span className={`inline-block px-3 py-1 rounded-full ${getStatusClass(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
        
    </div>
  );
};

export default Purchases;

      
       
        
      
  