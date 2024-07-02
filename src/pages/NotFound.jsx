import React from 'react';

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-700">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;
