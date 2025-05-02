const Accounts = () => {
  const accounts = [
    { currency: "Euro", amount: "15,235.50", flag: "🇪🇺" },
    { currency: "US Dollar", amount: "72,839.00", flag: "🇺🇸" },
    { currency: "Singapore Dollar", amount: "31,321.00", flag: "🇸🇬" },
  ];

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Accounts</h2>
        <button className="text-blue-600 text-sm">+ Add Account</button>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {accounts.map((account) => (
          <div key={account.currency} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{account.flag}</span>
              <span className="text-sm text-gray-600">{account.currency}</span>
            </div>
            <div className="text-xl font-semibold">{account.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accounts;
