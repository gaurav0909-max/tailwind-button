import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

const ModernLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login attempted', { email, password });
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
        <form 
          onSubmit={handleSubmit} 
          className="p-8 space-y-6"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-100 tracking-wide mb-2">Welcome Back</h2>
            <p className="text-gray-400 text-sm">Sign in to continue to your account</p>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-700/50 text-gray-200 rounded-lg border border-gray-600/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition duration-300 ease-in-out"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="Password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-12 py-3 bg-gray-700/50 text-gray-200 rounded-lg border border-gray-600/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition duration-300 ease-in-out"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200 transition"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember-me" 
                className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
              />
              <label 
                htmlFor="remember-me" 
                className="ml-2 block text-sm text-gray-400"
              >
                Remember me
              </label>
            </div>
            <a 
              href="#" 
              className="text-sm text-blue-500 hover:text-blue-400 transition"
            >
              Forgot Password?
            </a>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign In
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              Don't have an account? {' '}
              <a 
                href="#" 
                className="text-blue-500 hover:text-blue-400 transition"
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModernLoginForm;