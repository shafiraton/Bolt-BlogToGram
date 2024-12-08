import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Connect Your Blog',
    description: 'Simply paste your blog URL and let our AI analyze your content.',
  },
  {
    number: '02',
    title: 'Get Post Ideas',
    description: 'Receive AI-generated Instagram post ideas based on your blog content.',
  },
  {
    number: '03',
    title: 'Customize & Share',
    description: 'Edit the suggestions to match your style and schedule your posts.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How BlogToGram Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Three simple steps to transform your blog content into Instagram gold
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <dt className="flex flex-col items-center gap-y-4">
                  <span className="text-4xl font-bold text-primary">{step.number}</span>
                  <span className="text-xl font-semibold leading-7 text-gray-900">{step.title}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}