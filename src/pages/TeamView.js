import React, { useState } from 'react';
import { teamData } from '../data/mockData';
import { ChevronUp, ChevronDown, Minus } from 'lucide-react';

const TeamView = () => {
  const [sortConfig, setSortConfig] = useState({
    key: 'trustScore',
    direction: 'desc'
  });
  
  const sortedTeamData = [...teamData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });
  
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  
  const getSortIcon = (columnName) => {
    if (sortConfig.key !== columnName) return <Minus size={16} className="opacity-30" />;
    if (sortConfig.direction === 'asc') return <ChevronUp size={16} />;
    return <ChevronDown size={16} />;
  };
  
  const getTrendIcon = (trend) => {
    if (trend === 'up') return <ChevronUp className="text-green-500" />;
    if (trend === 'down') return <ChevronDown className="text-red-500" />;
    return <Minus className="text-gray-500" />;
  };
  
  const getTrustScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 70) return 'text-blue-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  return (
    <div>
      <h2 className="dashboard-title text-2xl">Team Trust View</h2>
      
      <div className="dashboard-card overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Employee Trust Scores</h3>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded px-3 py-1 bg-white">
              <option value="all">All Teams</option>
              <option value="engineering">Engineering</option>
              <option value="product">Product</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="hr">HR</option>
              <option value="customer-support">Customer Support</option>
            </select>
            <select className="border border-gray-300 rounded px-3 py-1 bg-white">
              <option value="all">All Locations</option>
              <option value="remote">Remote</option>
              <option value="office">Office</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>
        
        <table className="team-table w-full">
          <thead>
            <tr className="bg-gray-50">
              <th>Name</th>
              <th>Team</th>
              <th>Location</th>
              <th onClick={() => requestSort('trustScore')} className="cursor-pointer">
                <div className="flex items-center">
                  Trust Score {getSortIcon('trustScore')}
                </div>
              </th>
              <th>Trend</th>
              <th onClick={() => requestSort('engagement')} className="cursor-pointer">
                <div className="flex items-center">
                  Engagement {getSortIcon('engagement')}
                </div>
              </th>
              <th onClick={() => requestSort('collaboration')} className="cursor-pointer">
                <div className="flex items-center">
                  Collaboration {getSortIcon('collaboration')}
                </div>
              </th>
              <th onClick={() => requestSort('sentiment')} className="cursor-pointer">
                <div className="flex items-center">
                  Sentiment {getSortIcon('sentiment')}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedTeamData.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <div className="font-medium">{employee.name}</div>
                  <div className="text-gray-500 text-sm">{employee.role}</div>
                </td>
                <td>{employee.team}</td>
                <td>{employee.location}</td>
                <td className={`font-medium ${getTrustScoreColor(employee.trustScore)}`}>
                  {employee.trustScore}
                </td>
                <td className="flex justify-center">
                  {getTrendIcon(employee.trend)}
                </td>
                <td>{employee.engagement}</td>
                <td>{employee.collaboration}</td>
                <td>{employee.sentiment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamView;