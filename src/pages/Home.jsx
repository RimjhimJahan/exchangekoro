import React from 'react';
import Sidebar from '../components/Sidebar';
import Balance from '../components/Balance';
import Accounts from '../components/Accounts';
import Transactions from '../components/Transactions';
import ExchangeRates from '../components/ExchangeRates';

const Home = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      
      <main className="flex-1 ml-[80px] lg:ml-[240px] p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Balance />
            <Accounts />
            <Transactions />
          </div>
          
          <div className="lg:col-span-1">
            <ExchangeRates />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
