import React from 'react'
import {
  MessageCircle,
  Smartphone,
  FileText,
  Globe,
  Code,
  Lock,
  CheckCircle,
  Calendar
} from 'lucide-react'

export const featuredData = [
  {
    title: 'Case Law Research',
    description:
      'Access key Pakistani legal cases to assist in case preparation and decision-making.',
    icon: MessageCircle
  },
  {
    title: 'Predictive Analysis',
    description:
      'AI analyzes past judgments to predict legal outcomes and trends.',
    icon: Smartphone
  },
  {
    title: 'Application and Contract Drafting',
    description:
      'Seamless drafting of compliant applications and contracts for the Pakistani legal system.',
    icon: FileText
  },
  {
    title: 'Generative AI Conversations',
    description:
      'Engage with AI to generate legal text and answer legal queries.',
    icon: Globe
  },
  {
    title: 'Domain-Specific Knowledge',
    description:
      'Built with deep, Pakistan-specific legal knowledge for accurate, localized insights.',
    icon: Code
  },
  {
    title: 'Data Security and Confidentiality',
    description:
      'Encrypted interactions and robust protection ensure your data stays secure.',
    icon: Lock
  },
  {
    title: 'Legal Compliance Monitoring',
    description:
      'Monitor and ensure your legal practices are always in compliance with local laws.',
    icon: CheckCircle
  },
  {
    title: 'Court Date Management',
    description:
      'Track and manage court dates seamlessly to avoid delays and missed hearings.',
    icon: Calendar
  }
]

const MyFeatures = () => {
  return (
    <div>
      <div className='relative container mx-auto px-4 py-16 max-w-7xl'>
        <div className='text-center space-y-4 pb-6 mx-auto'>
          <h2 className='text-sm text-primary font-mono font-medium tracking-wider uppercase'>
            Features
          </h2>
          <h3 className='mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl'>
            Enhance Your Legal Workflows Using YourMunshi
          </h3>
        </div>
        <section>
          <div className='container mx-auto'>
            <div className='max-w-6xl mx-auto'>
              <div>
                <div className='hidden md:flex order-1 md:order-[0] justify-start'>
                  <div
                    data-orientation='vertical'
                    className='grid md:grid-cols-4 gap-x-10 py-8'
                  >
                    {featuredData.map((feature, index) => (
                      <div
                        key={index}
                        className='mt-px focus-within:relative focus-within:z-10 relative mb-8'
                      >
                        <div className='absolute left-0 right-0 w-full h-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 bottom-0'></div>
                        <div
                          style={{ transitionDuration: '0s' }}
                          className='absolute left-0 bottom-0 h-full w-0 origin-left bg-primary transition-all ease-linear dark:bg-white'
                        ></div>
                        <h3>
                          <button>
                            <div className='flex items-center relative flex-col'>
                              <div className='item-box size-16 bg-primary/10 rounded-full sm:mx-6 mx-2 shrink-0 flex items-center justify-center'>
                                <feature.icon />
                              </div>
                              <div className='font-bold text-xl my-3'>
                                {feature.title}
                              </div>
                              <div className='justify-center text-center mb-4'>
                                {feature.description}
                              </div>
                            </div>
                          </button>
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='w-auto overflow-hidden relative rounded-lg false'></div>
                <ul></ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MyFeatures
