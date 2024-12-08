import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative isolate pt-14">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Blog Posts Into
              <span className="block text-primary">Instagram Gold</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Turn your blog content into engaging Instagram posts automatically. Get AI-powered post ideas that keep your audience coming back for more.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#waitlist"
                className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-black shadow-sm hover:bg-primary-dark transition-colors"
              >
                Join the Waitlist
              </a>
              <a href="#how-it-works" className="text-base font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}