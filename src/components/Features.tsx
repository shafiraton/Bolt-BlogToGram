import { motion } from 'framer-motion';

const features = [
  {
    title: 'Smart Content Analysis',
    description: 'Our AI analyzes your blog posts to identify key topics, themes, and insights worth sharing.',
    icon: '🔍',
  },
  {
    title: 'Automated Idea Generation',
    description: 'Get fresh Instagram post ideas that align with your blog content and brand voice.',
    icon: '💡',
  },
  {
    title: 'Customizable Templates',
    description: 'Choose from a variety of post templates designed for maximum engagement.',
    icon: '📱',
  },
  {
    title: 'Performance Analytics',
    description: 'Track which ideas perform best and optimize your content strategy.',
    icon: '📊',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features to Transform Your Content
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to turn your blog posts into engaging Instagram content
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
              >
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <span className="text-3xl">{feature.icon}</span>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}