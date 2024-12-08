import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'How does BlogToGram generate post ideas?',
    answer: 'BlogToGram uses advanced AI to analyze your blog content, identifying key themes, insights, and quotable moments that would make great Instagram posts. It considers your writing style and topic areas to suggest relevant content ideas.',
  },
  {
    question: 'Do I need to have a lot of blog posts to use BlogToGram?',
    answer: 'No, you can start with just a few blog posts. Our AI can generate multiple Instagram post ideas from even a single blog post, helping you maximize your content.',
  },
  {
    question: 'Can I customize the generated ideas?',
    answer: 'Absolutely! While BlogToGram provides initial ideas, you have full control to edit, modify, or combine suggestions to match your brand voice and style.',
  },
  {
    question: 'How often can I generate new post ideas?',
    answer: 'You can generate new post ideas as often as you like. We recommend generating ideas in batches for content planning and maintaining a consistent posting schedule.',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <dl className="space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform transition duration-200'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}