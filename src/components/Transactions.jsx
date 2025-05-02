const Transactions = () => {
  const transactions = [
    {
      name: "Eveline Miller",
      date: "20 Apr",
      time: "15:34",
      status: "Completed",
      amount: "+6,895.73 USD",
      type: "USD Balance"
    },
    {
      name: "Rimjhim Jahan",
      date: "20 Apr",
      time: "15:34",
      status: "Completed",
      amount: "+6,895.73 USD",
      type: "USD Balance"
    },
    
    //Add more transactions as needed
  ];

  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Recent Transactions</h2>
        <button className="text-blue-600 text-sm">View All</button>
      </div>
      
      <div className="space-y-4">
        {transactions.map((tx, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-semibold">{tx.name}</p>
                <p className="text-sm text-gray-500">{tx.date} • {tx.time}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                {tx.amount}
              </p>
              <p className="text-sm text-gray-500">{tx.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
