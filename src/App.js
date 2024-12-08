import React from 'react';
import SignUp from './components/AuthForms/SignUp';
import Login from './components/AuthForms/Login';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="flex space-x-6">
        {/* SignUp Form */}
        <div className="w-full max-w-md">
          <SignUp />
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default App;
