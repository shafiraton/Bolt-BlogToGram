import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function LoggedOutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-light/5 to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            You've Been Logged Out
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Thank you for using BlogToGram
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/signin"
            className="block w-full py-3 px-4 rounded-xl text-black bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 font-medium"
          >
            Sign In Again
          </Link>
          
          <Link
            to="/"
            className="block w-full py-3 px-4 rounded-xl text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 font-medium"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}