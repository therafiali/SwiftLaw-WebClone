export const Foo = () => (
  <svg
    width={12}
    height={12}
    className='ml-1 flex text-center items-center justify-center'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z'
      fill='hsl(var(--primary))'
    />
  </svg>
)

export const PlayButton = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-play size-8 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out'
    style={{
      filter:
        'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))'
    }}
  >
    <polygon points='6 3 20 12 6 21 6 3' />
  </svg>
)

export const F1 = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-message-square h-6 w-6 text-primary'
  >
    <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
  </svg>
)

export const TestimonialSVG = () => (
  <svg
    stroke='currentColor'
    fill='currentColor'
    strokeWidth={0}
    viewBox='0 0 24 24'
    className='text-4xl text-themeDarkGray my-4 mx-auto'
    height='1em'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path fill='none' d='M0 0h24v24H0V0z' />
    <path d='M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z' />
  </svg>
)

export const Right = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-check mr-2 h-4 w-4 text-primary'
    >
      <path d='M20 6 9 17l-5-5' />
    </svg>
  )
}
