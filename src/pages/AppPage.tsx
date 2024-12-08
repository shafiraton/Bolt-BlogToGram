import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

type AIDAStage = 'Attention' | 'Interest' | 'Desire' | 'Action';
type PostType = 'Single Image' | 'Video' | 'Carousel' | 'Story' | 'Reel';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AppPage() {
  const navigate = useNavigate();
  const [blogUrl, setBlogUrl] = useState('');
  const [selectedStage, setSelectedStage] = useState<AIDAStage | null>(null);
  const [selectedPostType, setSelectedPostType] = useState<PostType | null>(null);

  const handleLogout = () => {
    toast.success('Logged out successfully');
    navigate('/logged-out');
  };

  const handleGenerate = () => {
    if (!blogUrl || !selectedStage || !selectedPostType) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Generating ideas...');
  };

  const aidaStages: AIDAStage[] = ['Attention', 'Interest', 'Desire', 'Action'];
  const postTypes: PostType[] = ['Single Image', 'Video', 'Carousel', 'Story', 'Reel'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary-light/5 to-white">
      {/* Creative Header */}
      <motion.header 
        className="bg-white shadow-lg relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
            >
              <SparklesIcon className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BlogToGram
              </h1>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center space-x-2"
            >
              Log Out
            </motion.button>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-primary/10"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <LightBulbIcon className="h-10 w-10 text-primary" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Welcome to Your Creative Hub</h2>
                <p className="text-gray-600">Transform your blog content into engaging Instagram posts</p>
              </div>
            </motion.div>
          </div>

          <div className="p-8 space-y-8">
            {/* Input Section */}
            <motion.div 
              className="space-y-6"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <div className="relative">
                <label htmlFor="blog-url" className="block text-sm font-medium text-gray-700 mb-1">
                  Blog URL
                </label>
                <input
                  id="blog-url"
                  type="url"
                  value={blogUrl}
                  onChange={(e) => setBlogUrl(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="https://yourblog.com/post"
                />
                <div className="absolute right-3 top-9">
                  <SparklesIcon className="h-5 w-5 text-primary opacity-50" />
                </div>
              </div>

              {/* AIDA Stage Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  AIDA Stage
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {aidaStages.map((stage, index) => (
                    <motion.button
                      key={stage}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedStage(stage)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedStage === stage
                          ? 'bg-gradient-to-r from-primary to-secondary text-black shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {stage}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Post Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Post Type
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {postTypes.map((type, index) => (
                    <motion.button
                      key={type}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedPostType(type)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedPostType === type
                          ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerate}
                className="w-full flex items-center justify-center px-6 py-4 text-base font-medium rounded-xl text-black bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-lg transition-all duration-200"
              >
                Generate Creative Ideas
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>

            {/* Output Section */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="mt-8 p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <SparklesIcon className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-medium text-gray-900">Generated Ideas</h3>
              </div>
              <p className="text-gray-600">
                Your creative Instagram post ideas will appear here...
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}