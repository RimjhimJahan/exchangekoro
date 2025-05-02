const Balance = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-600 text-sm">Total Balance</h2>
        <button className="text-gray-400">•••</button>
      </div>
      
      <div className="mb-6">
        <h1 className="text-4xl font-semibold">125,647.00 USD</h1>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 bg-black text-white py-3 rounded-lg">Send Money</button>
        <button className="flex-1 bg-yellow-400 py-3 rounded-lg">Receive Money</button>
      </div>
    </div>
  );
};

export default Balance;
