import React from 'react';
import { 
  BarChart, Bar, 
  LineChart, Line, 
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer 
} from 'recharts';
import { trustIndexData } from '../data/mockData';

const Dashboard = () => {
  const { organizationScore, scoreHistory, departmentScores, riskFactors } = trustIndexData;
  
  const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b'];
  
  return (
    <div>
      <h2 className="dashboard-title text-2xl">Trust Index Dashboard</h2>
      
      <div className="card-grid">
        <div className="dashboard-card">
          <h3 className="text-lg font-medium mb-3">Organization Trust Score</h3>
          <div className="flex items-center mb-4">
            <div className="text-4xl font-bold text-blue-600">{organizationScore}</div>
            <div className="ml-3 bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              +2 from last month
            </div>
          </div>
          <p className="text-gray-600">Current organizational trust health index</p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="text-lg font-medium mb-3">Trust Breakdown</h3>
          <div className="flex justify-between text-sm mb-2">
            <div>
              <div className="font-medium">Communication</div>
              <div className="text-gray-600">72/100</div>
            </div>
            <div>
              <div className="font-medium">Transparency</div>
              <div className="text-gray-600">65/100</div>
            </div>
            <div>
              <div className="font-medium">Reliability</div>
              <div className="text-gray-600">78/100</div>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full mt-2">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: '72%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="dashboard-card">
        <h3 className="text-lg font-medium mb-3">Trust Score Trend</h3>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={scoreHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[50, 100]} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#3b82f6" 
                strokeWidth={2}
                activeDot={{ r: 8 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="dashboard-card">
          <h3 className="text-lg font-medium mb-3">Department Trust Scores</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentScores}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis domain={[50, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="dashboard-card">
          <h3 className="text-lg font-medium mb-3">Trust Risk Factors</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskFactors}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="factor"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {riskFactors.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;