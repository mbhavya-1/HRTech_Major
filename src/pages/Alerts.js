import React from 'react';
import { alertsData } from '../data/mockData';
import { AlertTriangle, Clock, Users, Lightbulb } from 'lucide-react';

const Alerts = () => {
  return (
    <div>
      <h2 className="dashboard-title text-2xl">Trust Risk Alerts</h2>
      
      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Active Alerts</h3>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded px-3 py-1 bg-white">
              <option value="all">All Priorities</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
            <select className="border border-gray-300 rounded px-3 py-1 bg-white">
              <option value="all">All Teams</option>
              <option value="engineering">Engineering</option>
              <option value="product">Product</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="hr">HR</option>
              <option value="customer-support">Customer Support</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-4">
          {alertsData.map(alert => (
            <div key={alert.id} className={`alert-item alert-${alert.type}`}>
              <div className="flex items-start">
                <div className="mr-3">
                  <AlertTriangle className={`text-${alert.type === 'high' ? 'red' : alert.type === 'medium' ? 'yellow' : 'blue'}-500`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-lg">{alert.title}</h4>
                    <span className={`badge badge-${alert.type}`}>
                      {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)} Priority
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700">{alert.description}</p>
                  
                  <div className="mt-3 flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-1" />
                    <span className="mr-4">{alert.timestamp}</span>
                    <Users size={16} className="mr-1" />
                    <span>{alert.team}</span>
                  </div>
                  
                  <div className="mt-3 p-3 bg-blue-50 rounded-md flex items-start">
                    <Lightbulb size={16} className="text-blue-500 mr-2 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-blue-900">Recommended Action</div>
                      <p className="text-sm text-blue-800">{alert.recommendation}</p>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex justify-end space-x-2">
                    <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm">
                      Dismiss
                    </button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">
                      Take Action
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alerts;