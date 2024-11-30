import React from 'react'
import { F1 } from '../Hero/HeroSvg'

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
            <div className='max-w-6xl mx-auto  '>
              <div>
                <div className='hidden md:flex order-1 md:order-[0]  justify-start'>
                  <div
                    data-orientation='vertical'
                    className='grid md:grid-cols-4 gap-x-10 py-8'
                  >
                    <div className='mt-px focus-within:relative focus-within:z-10 relative mb-8'>
                      <div className='absolute left-0 right-0 w-full h-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 bottom-0'></div>
                      <div
                        style={{ transitionDuration: '0s' }}
                        className='absolute left-0 bottom-0 h-full w-0 origin-left bg-primary transition-all ease-linear dark:bg-white'
                      ></div>
                      <h3>
                        <button>
                          <div className='flex items-center relative flex-col'>
                            <div className='item-box size-16 bg-primary/10 rounded-full sm:mx-6 mx-2 shrink-0 flex items-center justify-center'>
                              <F1 />
                            </div>
                            <div className='font-bold text-xl my-3 '>
                              Natural Language Commands
                            </div>
                            <div className='justify-center text-center mb-4'>
                              Use plain english to understand, edit, and draft
                              legal language.
                            </div>
                          </div>
                        </button>
                      </h3>
                    </div>
                    <div className='mt-px focus-within:relative focus-within:z-10 relative mb-8'>
                      <div className='absolute left-0 right-0 w-full h-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 bottom-0'></div>
                      <div
                        style={{ transitionDuration: '0s' }}
                        className='absolute left-0 bottom-0 h-full w-0 origin-left bg-primary transition-all ease-linear dark:bg-white'
                      ></div>
                      <h3>
                        <button>
                          <div className='flex items-center relative flex-col'>
                            <div className='item-box size-16 bg-primary/10 rounded-full sm:mx-6 mx-2 shrink-0 flex items-center justify-center'>
                              <F1 />
                            </div>
                            <div className='font-bold text-xl my-3 '>
                              Natural Language Commands
                            </div>
                            <div className='justify-center text-center mb-4'>
                              Use plain english to understand, edit, and draft
                              legal language.
                            </div>
                          </div>
                        </button>
                      </h3>
                    </div>
                    <div className='mt-px focus-within:relative focus-within:z-10 relative mb-8'>
                      <div className='absolute left-0 right-0 w-full h-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 bottom-0'></div>
                      <div
                        style={{ transitionDuration: '0s' }}
                        className='absolute left-0 bottom-0 h-full w-0 origin-left bg-primary transition-all ease-linear dark:bg-white'
                      ></div>
                      <h3>
                        <button>
                          <div className='flex items-center relative flex-col'>
                            <div className='item-box size-16 bg-primary/10 rounded-full sm:mx-6 mx-2 shrink-0 flex items-center justify-center'>
                              <F1 />
                            </div>
                            <div className='font-bold text-xl my-3 '>
                              Natural Language Commands
                            </div>
                            <div className='justify-center text-center mb-4'>
                              Use plain english to understand, edit, and draft
                              legal language.
                            </div>
                          </div>
                        </button>
                      </h3>
                    </div>
                    <div className='mt-px focus-within:relative focus-within:z-10 relative mb-8'>
                      <div className='absolute left-0 right-0 w-full h-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 bottom-0'></div>
                      <div
                        style={{ transitionDuration: '0s' }}
                        className='absolute left-0 bottom-0 h-full w-0 origin-left bg-primary transition-all ease-linear dark:bg-white'
                      ></div>
                      <h3>
                        <button>
                          <div className='flex items-center relative flex-col'>
                            <div className='item-box size-16 bg-primary/10 rounded-full sm:mx-6 mx-2 shrink-0 flex items-center justify-center'>
                              <F1 />
                            </div>
                            <div className='font-bold text-xl my-3 '>
                              Natural Language Commands
                            </div>
                            <div className='justify-center text-center mb-4'>
                              Use plain english to understand, edit, and draft
                              legal language.
                            </div>
                          </div>
                        </button>
                      </h3>
                    </div>
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
