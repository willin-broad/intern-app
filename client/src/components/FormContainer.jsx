import React from 'react';

export default function FormContainer({ title, children }) {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 