

type Transaction = {
  id: string;
  date: string;
  paidTo: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Failed';
};

const transactions: Transaction[] = [
  {
    id: '456789356',
    date: 'Oct 10, 2024, 04:30pm',
    paidTo: '0x000000000000000',
    amount: '0.002ETH',
    status: 'Completed',
  },
  {
    id: '456789356',
    date: 'Oct 14, 2024, 02:00pm',
    paidTo: '0x000000000000000',
    amount: '0.002ETH',
    status: 'Completed',
  },
  {
    id: '456789356',
    date: 'Oct 16, 2024, 08:00pm',
    paidTo: '0x000000000000000',
    amount: '0.002ETH',
    status: 'Failed',
  },
  {
    id: '456789356',
    date: 'Oct 19, 2024, 05:30pm',
    paidTo: '0x000000000000000',
    amount: '0.002ETH',
    status: 'Pending',
  },
];

const getStatusClass = (status: 'Completed' | 'Pending' | 'Failed') => {
  switch (status) {
    case 'Completed':
      return 'text-green-500 bg-green-100';
    case 'Pending':
      return 'text-yellow-500 bg-yellow-100';
    case 'Failed':
      return 'text-red-500 bg-red-100';
    default:
      return '';
  }
};


const WalletTransactions: React.FC = () => {

  return (
    <div className="w-full p-6 mt-14 rounded-lg">

      {/* Content area */}
      <div className="w-full max-w-6xl overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">
                Ref ID
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">
                Transaction Date
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">
                Paid To
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">
                Amount
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.id}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.date}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.paidTo}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.amount}</td>
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

export default WalletTransactions;
