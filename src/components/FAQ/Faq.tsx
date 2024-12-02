import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

// Actual FAQ data
const faqsList = [
  {
    q: 'Is YourMunshi a Chatbot?',
    a: 'No, YourMunshi offers more functionality and features than a chatbot as it is Generative AI. As an assistant, it can engage in conversation, answer questions, provide information, simulate human-like interaction to a certain extent, generate legal text based on prompts, and more.'
  },
  {
    q: 'How is YourMunshi different from other legal assistants?',
    a: 'YourMunshi is unique because it has been developed entirely from scratch, without relying on third-party API of any other Generative AI platforms. YourMunshi’s domain-specific knowledge makes it Pakistan’s best legal AI assistant.'
  },
  {
    q: 'Is YourMunshi suitable for legal professionals only?',
    a: 'No, YourMunshi caters to everyone who has a legal query. It can assist with up-to-date legal knowledge base, legal research, document drafting, and provide insights on various legal matters relevant to Pakistan’s law.'
  },
  {
    q: 'Can YourMunshi provide legal advice?',
    a: 'No, YourMunshi provides legal information and guidance based on the input provided. While it can assist in understanding legal concepts and implications, it does not replace the advice of a qualified legal professional.'
  },
  {
    q: 'Will YourMunshi replace Lawyer?',
    a: 'No, YourMunshi can’t replace the analytical and deep-thinking skills of lawyers. Successful lawyers will use YourMunshi, along with their domain knowledge and excellent client relationships, to achieve success.'
  },
  {
    q: 'Is my information secure with YourMunshi?',
    a: 'Yes, we prioritize the security and confidentiality of your information. Your interactions with YourMunshi are encrypted, and we adhere to stringent data protection protocols to safeguard your privacy.'
  },
  {
    q: 'Will my data be shared with third parties?',
    a: 'No, your data will not be shared with third parties without your explicit consent. YourMunshi adheres to strict privacy policies to ensure your information remains confidential.'
  }
]

const Faq = () => {
  return (
    <div>
      <div className='relative container mx-auto px-4 py-16 max-w-7xl'>
        <div className='text-center space-y-4 pb-6 mx-auto'>
          <h2 className='text-sm text-primary font-mono font-medium tracking-wider uppercase'>
            FAQ
          </h2>
          <h3 className='mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl'>
            Frequently asked questions{' '}
          </h3>
        </div>
        <div className='mx-auto my-12 md:max-w-[800px]'>
          <div className='flex w-full flex-col items-center justify-center space-y-2'>
            <div className='w-full'>
              <Accordion type='single' collapsible>
                {faqsList.map((faq, index) => (
                  <div key={index}   className='w-full border rounded-lg overflow-hidden px-4 m-2'>
                    <AccordionItem  value={`item-${index + 1}`}>
                      <AccordionTrigger className='text-left'>{faq.q}</AccordionTrigger>
                      <AccordionContent>{faq.a}</AccordionContent>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <h4 className='mb-12 text-center text-sm font-medium tracking-tight text-foreground/80'>
          Still have questions? Email us at{' '}
          <a href='mailto:support@yourmunshi.com' className='underline'>
            support@yourmunshi.com
          </a>
        </h4>
      </div>
    </div>
  )
}

export default Faq
