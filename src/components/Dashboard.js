import React from 'react';
import accountData from '../data/accounts.json';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">{accountData.company}</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Financial Summary</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="pb-2">Code</th>
              <th className="pb-2">Account Name</th>
            </tr>
          </thead>
          <tbody>
            {accountData.chart_of_accounts.assets.map(item => (
              <tr key={item.code} className="border-b">
                <td className="py-2 text-blue-600 font-mono">{item.code}</td>
                <td className="py-2">{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
  
