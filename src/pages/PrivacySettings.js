import React from 'react';
import { privacySettings } from '../data/mockData';
import { Info, Shield } from 'lucide-react';

const PrivacySettings = () => {
  return (
    <div>
      <h2 className="dashboard-title text-2xl">Privacy Settings</h2>
      
      <div className="dashboard-card">
        <div className="flex items-start">
          <Shield className="text-blue-500 mr-3" size={24} />
          <div>
            <h3 className="text-lg font-medium">Data Collection Settings</h3>
            <p className="text-gray-600 mt-1">
              Control what data is collected and analyzed by the Trust Index system.
            </p>
          </div>
        </div>
        
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-md p-4">
          <div className="flex items-start">
            <Info className="text-blue-500 mr-2" size={18} />
            <p className="text-sm text-blue-800">
              The Trust Index system respects user privacy and only collects aggregated metadata. 
              No message content is stored or analyzed without explicit opt-in from users.
              All data is anonymized when displayed in reports and dashboards.
            </p>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex items-center justify-between pb-4 border-b">
            <div>
              <h4 className="font-medium">Enable Data Collection</h4>
              <p className="text-sm text-gray-600">
                Master toggle for all data collection activities
              </p>
            </div>
            <div className="relative inline-block w-12 h-6">
              <input 
                type="checkbox" 
                className="opacity-0 w-0 h-0" 
                id="master-toggle"
                defaultChecked={privacySettings.dataCollectionEnabled}
              />
              <label 
                htmlFor="master-toggle" 
                className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full ${
                  privacySettings.dataCollectionEnabled ? 'bg-blue-600' : 'bg-gray-300'
                } transition-colors`}
              >
                <span className={`absolute w-4 h-4 bg-white rounded-full top-1 ${
                  privacySettings.dataCollectionEnabled ? 'left-7' : 'left-1'
                } transition-all`}></span>
              </label>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-medium mb-4">Data Collection Methods</h4>
            
            {privacySettings.dataCollectionMethods.map(method => (
              <div key={method.id} className="mb-4 pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium">{method.name}</h5>
                    <p className="text-sm text-gray-600 mt-1">{method.description}</p>
                  </div>
                  <div className="relative inline-block w-12 h-6">
                    <input 
                      type="checkbox" 
                      className="opacity-0 w-0 h-0" 
                      id={`toggle-${method.id}`}
                      defaultChecked={method.enabled}
                    />
                    <label 
                      htmlFor={`toggle-${method.id}`} 
                      className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full ${
                        method.enabled ? 'bg-blue-600' : 'bg-gray-300'
                      } transition-colors`}
                    >
                      <span className={`absolute w-4 h-4 bg-white rounded-full top-1 ${
                        method.enabled ? 'left-7' : 'left-1'
                      } transition-all`}></span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <h4 className="font-medium mb-3">Data Retention</h4>
            <select className="border border-gray-300 rounded px-3 py-2 bg-white w-full">
              <option value="30">30 days</option>
              <option value="60">60 days</option>
              <option value="90" selected>90 days</option>
              <option value="180">180 days</option>
            </select>
            <p className="text-sm text-gray-600 mt-2">
              Data older than the selected period will be automatically deleted.
            </p>
          </div>
          
          <div className="mt-8 flex justify-end">
            <button className="btn btn-primary">Save Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;