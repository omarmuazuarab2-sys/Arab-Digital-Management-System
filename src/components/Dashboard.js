import React from 'react';
import accountData from '../data/accounts.json';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{accountData.company}</h1>
      <h2 className="text-xl mt-4">Chart of Accounts Summary</h2>
      <ul className="mt-2">
        {accountData.chart_of_accounts.assets.map(item => (
          <li key={item.code}>{item.code} - {item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
    
