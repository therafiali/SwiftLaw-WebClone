import React from 'react'
import b1 from '@/assets/blogs/images/b1.png'
import b2 from '@/assets/blogs/images/b2.png'
import b3 from '@/assets/blogs/images/b3.png'
import b4 from '@/assets/blogs/images/b4.png'
import b5 from '@/assets/blogs/images/b5.png'
import b6 from '@/assets/blogs/images/b6.png'
import Image from 'next/image'

const Blog = () => {
  const blogData = [
    {
      id: 1,
      title: 'How YourMunshi is Revolutionizing Research Efficiency with Legal AI',
      description:
        "Legal research is one of the most critical yet time-consuming aspects of the legal profession. With the complexities of Pakistani law and the ever-growing body of case law, legislation.",
      imageUrl: b1,
      imageAlt: 'AI and Client Relations: Transforming Legal Service Delivery',
      link: 'https://www.linkedin.com/pulse/how-yourmunshi-revolutionizing-research-efficiency-legal-ezqwf/',
      date: 'November 19, 2024'
    },
    {
      id: 2,
      title: 'The Transformative Power of AI in Legal Sector',
      description:
        'In our previous blog a general overview was discussed on how the Artificial Intelligence (AI) is significantly transforming industries by making tasks easier and more efficient. ',
      imageUrl: b2,
      imageAlt: 'Is ChatGPT Really Safe for Law?',
      link: 'https://www.linkedin.com/pulse/transformative-power-ai-legal-sector-yourmunshipk-tagnf/?trackingId=GNbrRjCR%2BjLx8smLU7KA7g%3D%3D',
      date: 'August 18, 2024'
    },
    {
      id: 3,
      title: 'Unlocking the Potential of Saudi-Pakistan Tech Collaboration for Pakistani Startups',
      description:
        'From October 9 to 11, 2024, a top Saudi delegation, led by #Saudi Investment #Minister Khalid bin #Abdulaziz Al-Falih, visited #Pakistan to boost trade and #investment between the two countries.',
      imageUrl: b3,
      imageAlt: 'The Evolution of Legal Writing: From Quill to Quantum Leaps',
      link: 'https://www.linkedin.com/pulse/unlocking-potential-saudi-pakistan-tech-collaboration-pakistani-eojkf/?trackingId=jfOdLkAo83Cm0k7cf0DxJA%3D%3D',
      date: 'October 21, 2024'
    },
    {
      id: 4,
      title: 'AI: Revolutionizing Industries, Shaping the Future',
      description:
        'Artificial Intelligence (AI) is significantly transforming every industry. From performing complex medical procedures to assisting with document reading, AI’s presence is increasingly evident',
      imageUrl: b4,
      imageAlt:
        'Maximizing Firm Knowledge: Leveraging Precedents and Playbooks',
      link: 'https://www.linkedin.com/pulse/ai-revolutionizing-industries-shaping-future-yourmunshipk-citsf/?trackingId=fHF4XUz0%2F1VrI4H6o4wz3w%3D%3D',
      date: 'August 3, 2024'
    },
    {
      id: 5,
      title: 'YourMunshi Architecture',
      description:
        'There are a lot of manual and time-consuming tasks associated with Pakistan’s legal system. Our initiative aims to leverage generative AI to automate 40% of manual legal work.',
      imageUrl: b5,
      imageAlt: 'Redefining Legal Research: The AI-Driven Knowledge Revolution',
      link: 'https://www.linkedin.com/pulse/yourmunshi-architecture-yourmunshipk-v2c0e/?trackingId=Ng%2BlkRINWGOcvQJ3eUARpg%3D%3D',
      date: 'July 27, 2024'
    },
    {
      id: 6,
      title:
        `Meet YourMunshi - Pakistan's First AI Legal Assistant`,
      description:
        `Let's begin by defining an AI assistant. An AI Assistant is software powered by artificial intelligence (AI) that interacts with users through text in a human-like manner.`,
      imageUrl: b6,
      imageAlt:
        'The Revolution of Contract Automation: Transforming Legal Practice',
      link: 'https://www.linkedin.com/pulse/meet-yourmunshi-pakistans-first-ai-legal-assistant-yourmunshipk-naref/?trackingId=4dbbaehFUVWhApSmx87NHQ%3D%3D',
      date: 'July 13, 2024'
    },
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
              <a target='_blank' key={post.id} className='block' href={post.link}>
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
