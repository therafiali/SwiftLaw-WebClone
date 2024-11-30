import HeroSection from '@/components/Hero/HeroSection'
import MyFeatures from '@/components/KeyFeatures/MyFeatures'
import MyPartners from '@/components/Patners/MyPartners'
import Feedback from '@/components/Testimonial/Feedback'

export default function Home () {
  return (
    <section className=''>
      <HeroSection />
      <MyPartners/>
      <MyFeatures/>
      <Feedback/>
    </section>
  )
}
