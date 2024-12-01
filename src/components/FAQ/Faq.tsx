import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

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
            <div className='w-full border rounded-lg overflow-hidden px-4'>
              <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <h4 className='mb-12 text-center text-sm font-medium tracking-tight text-foreground/80'>
          Still have questions? Email us at{/* */}{' '}
          <a href='mailto:saketh@tryswiftlaw.com' className='underline'>
            saketh@tryswiftlaw.com
          </a>
        </h4>
      </div>
    </div>
  )
}

export default Faq
