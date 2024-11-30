import React from 'react'

const Blog = () => {
  return (
    <div>
      <div className='relative container mx-auto px-4 py-16 max-w-7xl'>
        <div className='text-center space-y-4 pb-6 mx-auto'>
          <h2 className='text-sm text-primary font-mono font-medium tracking-wider uppercase'>
            BLOG
          </h2>
          <h3 className='mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl'>
            Latest Article
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <a
              className='block'
              href='/blog/transforming_legal_service_delivery'
            >
              <div className='bg-background rounded-lg p-4 mb-4 border hover:shadow-sm transition-shadow duration-200'>
                <img
                  alt='AI and Client Relations: Transforming Legal Service Delivery'
                  width={1200}
                  height={630}
                  decoding='async'
                  data-nimg={1}
                  className='rounded-t-lg object-cover border'
                  style={{ color: 'transparent' }}
                  srcSet='/_next/image?url=%2Fblog%2Ftransforming_legal_service_delivery.png&w=1200&q=75 1x, /_next/image?url=%2Fblog%2Ftransforming_legal_service_delivery.png&w=3840&q=75 2x'
                  src='/_next/image?url=%2Fblog%2Ftransforming_legal_service_delivery.png&w=3840&q=75'
                />
                <p className='mb-2'>
                  <time
                    dateTime='2024-10-16'
                    className='text-sm text-muted-foreground'
                  >
                    Today
                  </time>
                </p>
                <h3 className='text-xl font-semibold mb-2'>
                  AI and Client Relations: Transforming Legal Service Delivery
                </h3>
                <p className='text-foreground mb-4'>
                  Exploring how AI is reshaping lawyer-client relationships and
                  revolutionizing legal service delivery, with a focus on
                  SwiftLaw's innovative solutions.
                </p>
              </div>
            </a>
            <a className='block' href='/blog/is_chatgpt_safe_for_law'>
              <div className='bg-background rounded-lg p-4 mb-4 border hover:shadow-sm transition-shadow duration-200'>
                <img
                  alt='Is ChatGPT Really Safe for Law?'
                  width={1200}
                  height={630}
                  decoding='async'
                  data-nimg={1}
                  className='rounded-t-lg object-cover border'
                  style={{ color: 'transparent' }}
                  srcSet='/_next/image?url=%2Fblog%2Fis_chatgpt_safe_for_law.png&w=1200&q=75 1x, /_next/image?url=%2Fblog%2Fis_chatgpt_safe_for_law.png&w=3840&q=75 2x'
                  src='/_next/image?url=%2Fblog%2Fis_chatgpt_safe_for_law.png&w=3840&q=75'
                />
                <p className='mb-2'>
                  <time
                    dateTime='2024-10-12'
                    className='text-sm text-muted-foreground'
                  >
                    October 12, 2024 (4d ago)
                  </time>
                </p>
                <h3 className='text-xl font-semibold mb-2'>
                  Is ChatGPT Really Safe for Law?
                </h3>
                <p className='text-foreground mb-4'>
                  Examining the safety concerns of using ChatGPT in legal
                  practice and introducing SwiftLaw as a secure AI alternative.
                </p>
              </div>
            </a>
            <a className='block' href='/blog/evolution_of_legal_writing'>
              <div className='bg-background rounded-lg p-4 mb-4 border hover:shadow-sm transition-shadow duration-200'>
                <img
                  alt='The Evolution of Legal Writing: From Quill to Quantum Leaps'
                  loading='lazy'
                  width={1200}
                  height={630}
                  decoding='async'
                  data-nimg={1}
                  className='rounded-t-lg object-cover border'
                  style={{ color: 'transparent' }}
                  srcSet='/_next/image?url=%2Fblog%2Fevolution_of_legal_writing.png&w=1200&q=75 1x, /_next/image?url=%2Fblog%2Fevolution_of_legal_writing.png&w=3840&q=75 2x'
                  src='/_next/image?url=%2Fblog%2Fevolution_of_legal_writing.png&w=3840&q=75'
                />
                <p className='mb-2'>
                  <time
                    dateTime='2024-10-11'
                    className='text-sm text-muted-foreground'
                  >
                    October 11, 2024 (5d ago)
                  </time>
                </p>
                <h3 className='text-xl font-semibold mb-2'>
                  The Evolution of Legal Writing: From Quill to Quantum Leaps
                </h3>
                <p className='text-foreground mb-4'>
                  Exploring how AI is revolutionizing legal writing and what it
                  means for modern lawyers.
                </p>
              </div>
            </a>
            <a className='block' href='/blog/maximizing_firm_knowledge'>
              <div className='bg-background rounded-lg p-4 mb-4 border hover:shadow-sm transition-shadow duration-200'>
                <img
                  alt='Maximizing Firm Knowledge: Leveraging Precedents and Playbooks'
                  loading='lazy'
                  width={1200}
                  height={630}
                  decoding='async'
                  data-nimg={1}
                  className='rounded-t-lg object-cover border'
                  style={{ color: 'transparent' }}
                  srcSet='/_next/image?url=%2Fblog%2Fmaximizing_firm_knowledge.png&w=1200&q=75 1x, /_next/image?url=%2Fblog%2Fmaximizing_firm_knowledge.png&w=3840&q=75 2x'
                  src='/_next/image?url=%2Fblog%2Fmaximizing_firm_knowledge.png&w=3840&q=75'
                />
                <p className='mb-2'>
                  <time
                    dateTime='2024-10-11'
                    className='text-sm text-muted-foreground'
                  >
                    October 11, 2024 (5d ago)
                  </time>
                </p>
                <h3 className='text-xl font-semibold mb-2'>
                  Maximizing Firm Knowledge: Leveraging Precedents and Playbooks
                </h3>
                <p className='text-foreground mb-4'>
                  Exploring how law firms can effectively utilize precedents and
                  playbooks to enhance efficiency, consistency, and knowledge
                  management.
                </p>
              </div>
            </a>
            <a className='block' href='/blog/redefining_legal_research_with_ai'>
              <div className='bg-background rounded-lg p-4 mb-4 border hover:shadow-sm transition-shadow duration-200'>
                <img
                  alt='Redefining Legal Research: The AI-Driven Knowledge Revolution'
                  loading='lazy'
                  width={1200}
                  height={630}
                  decoding='async'
                  data-nimg={1}
                  className='rounded-t-lg object-cover border'
                  style={{ color: 'transparent' }}
                  srcSet='/_next/image?url=%2Fblog%2Fredefining_legal_research_with_ai.png&w=1200&q=75 1x, /_next/image?url=%2Fblog%2Fredefining_legal_research_with_ai.png&w=3840&q=75 2x'
                  src='/_next/image?url=%2Fblog%2Fredefining_legal_research_with_ai.png&w=3840&q=75'
                />
                <p className='mb-2'>
                  <time
                    dateTime='2024-10-11'
                    className='text-sm text-muted-foreground'
                  >
                    October 11, 2024 (5d ago)
                  </time>
                </p>
                <h3 className='text-xl font-semibold mb-2'>
                  Redefining Legal Research: The AI-Driven Knowledge Revolution
                </h3>
                <p className='text-foreground mb-4'>
                  Exploring how AI is transforming legal research methodologies
                  and what it means for modern legal professionals.
                </p>
              </div>
            </a>
            <a className='block' href='/blog/revolution_of_contract_automation'>
              <div className='bg-background rounded-lg p-4 mb-4 border hover:shadow-sm transition-shadow duration-200'>
                <img
                  alt='The Revolution of Contract Automation: Transforming Legal Practice'
                  loading='lazy'
                  width={1200}
                  height={630}
                  decoding='async'
                  data-nimg={1}
                  className='rounded-t-lg object-cover border'
                  style={{ color: 'transparent' }}
                  srcSet='/_next/image?url=%2Fblog%2Frevolution_of_contract_automation.png&w=1200&q=75 1x, /_next/image?url=%2Fblog%2Frevolution_of_contract_automation.png&w=3840&q=75 2x'
                  src='/_next/image?url=%2Fblog%2Frevolution_of_contract_automation.png&w=3840&q=75'
                />
                <p className='mb-2'>
                  <time
                    dateTime='2024-10-11'
                    className='text-sm text-muted-foreground'
                  >
                    October 11, 2024 (5d ago)
                  </time>
                </p>
                <h3 className='text-xl font-semibold mb-2'>
                  The Revolution of Contract Automation: Transforming Legal
                  Practice
                </h3>
                <p className='text-foreground mb-4'>
                  Exploring how contract automation is reshaping legal work,
                  improving efficiency, and reducing risks in contract
                  management.
                </p>
              </div>
            </a>
            <a className='block' href='/blog/ethical_labyrinth_of_ai_in_law'>
              <div className='bg-background rounded-lg p-4 mb-4 border hover:shadow-sm transition-shadow duration-200'>
                <img
                  alt='The Ethical Labyrinth: Navigating AI Implementation in Law Firms'
                  loading='lazy'
                  width={1200}
                  height={630}
                  decoding='async'
                  data-nimg={1}
                  className='rounded-t-lg object-cover border'
                  style={{ color: 'transparent' }}
                  srcSet='/_next/image?url=%2Fblog%2Fethical_labyrinth_of_ai_in_law.png&w=1200&q=75 1x, /_next/image?url=%2Fblog%2Fethical_labyrinth_of_ai_in_law.png&w=3840&q=75 2x'
                  src='/_next/image?url=%2Fblog%2Fethical_labyrinth_of_ai_in_law.png&w=3840&q=75'
                />
                <p className='mb-2'>
                  <time
                    dateTime='2024-10-10'
                    className='text-sm text-muted-foreground'
                  >
                    October 10, 2024 (6d ago)
                  </time>
                </p>
                <h3 className='text-xl font-semibold mb-2'>
                  The Ethical Labyrinth: Navigating AI Implementation in Law
                  Firms
                </h3>
                <p className='text-foreground mb-4'>
                  Exploring the ethical challenges and solutions for
                  implementing AI in legal practice.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
