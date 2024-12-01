import React from 'react'
import b1 from '@/assets/blogs/images/b1.png'
import b2 from '@/assets/blogs/images/b2.png'
import b3 from '@/assets/blogs/images/b3.png'
import b4 from '@/assets/blogs/images/b4.png'
import b5 from '@/assets/blogs/images/b5.png'
import b6 from '@/assets/blogs/images/b6.png'
import Image, { StaticImageData } from 'next/image'

const Blog = () => {
  const blogData = [
    {
      id: 1,
      title: 'AI and Client Relations: Transforming Legal Service Delivery',
      description:
        "Exploring how AI is reshaping lawyer-client relationships and revolutionizing legal service delivery, with a focus on YourMunshi's innovative solutions.",
      imageUrl: b1,
      imageAlt: 'AI and Client Relations: Transforming Legal Service Delivery',
      link: '/blog/transforming_legal_service_delivery',
      date: '2024-10-16'
    },
    {
      id: 2,
      title: 'Is ChatGPT Really Safe for Law?',
      description:
        'Examining the safety concerns of using ChatGPT in legal practice and introducing YourMunshi as a secure AI alternative.',
      imageUrl: b2,
      imageAlt: 'Is ChatGPT Really Safe for Law?',
      link: '/blog/is_chatgpt_safe_for_law',
      date: '2024-10-12'
    },
    {
      id: 3,
      title: 'The Evolution of Legal Writing: From Quill to Quantum Leaps',
      description:
        'Exploring how AI is revolutionizing legal writing and what it means for modern lawyers.',
      imageUrl: b3,
      imageAlt: 'The Evolution of Legal Writing: From Quill to Quantum Leaps',
      link: '/blog/evolution_of_legal_writing',
      date: '2024-10-11'
    },
    {
      id: 4,
      title: 'Maximizing Firm Knowledge: Leveraging Precedents and Playbooks',
      description:
        'Exploring how law firms can effectively utilize precedents and playbooks to enhance efficiency, consistency, and knowledge management.',
      imageUrl: b4,
      imageAlt:
        'Maximizing Firm Knowledge: Leveraging Precedents and Playbooks',
      link: '/blog/maximizing_firm_knowledge',
      date: '2024-10-11'
    },
    {
      id: 5,
      title: 'Redefining Legal Research: The AI-Driven Knowledge Revolution',
      description:
        'Exploring how AI is transforming legal research methodologies and what it means for modern legal professionals.',
      imageUrl: b5,
      imageAlt: 'Redefining Legal Research: The AI-Driven Knowledge Revolution',
      link: '/blog/redefining_legal_research_with_ai',
      date: '2024-10-11'
    },
    {
      id: 6,
      title:
        'The Revolution of Contract Automation: Transforming Legal Practice',
      description:
        'Exploring how contract automation is reshaping legal work, improving efficiency, and reducing risks in contract management.',
      imageUrl: b6,
      imageAlt:
        'The Revolution of Contract Automation: Transforming Legal Practice',
      link: '/blog/revolution_of_contract_automation',
      date: '2024-10-11'
    },
    {
      id: 7,
      title: 'The Ethical Labyrinth: Navigating AI Implementation in Law Firms',
      description:
        'Exploring the ethical challenges and solutions for implementing AI in legal practice.',
      imageUrl: b2,
      imageAlt:
        'The Ethical Labyrinth: Navigating AI Implementation in Law Firms',
      link: '/blog/ethical_labyrinth_of_ai_in_law',
      date: '2024-10-10'
    }
  ]

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
            {blogData.map(post => (
              <a key={post.id} className='block' href={post.link}>
                <div className='bg-background rounded-lg p-4 mb-4 border hover:shadow-sm transition-shadow duration-200'>
                  <Image
                    alt={post.imageAlt}
                    width={1200}
                    height={630}
                    decoding='async'
                    data-nimg='1'
                    className='rounded-t-lg object-cover border'
                    style={{ color: 'transparent' }}
                    src={post.imageUrl}
                  />
                  <p className='mb-2'>
                    <time
                      dateTime={post.date}
                      className='text-sm text-muted-foreground'
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </p>
                  <h3 className='text-xl font-semibold mb-2'>{post.title}</h3>
                  <p className='text-foreground mb-4'>{post.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
