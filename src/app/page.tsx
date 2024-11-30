import HeroSection from '@/components/Hero/HeroSection'
import MyFeatures from '@/components/KeyFeatures/MyFeatures'
import MyPartners from '@/components/Patners/MyPartners'

export default function Home () {
  return (
    <section className=''>
      <HeroSection />
      <MyPartners/>
      <MyFeatures/>
    </section>
  )
}
