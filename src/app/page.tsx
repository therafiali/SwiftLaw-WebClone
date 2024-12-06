import Newsletter from '@/components/CTA/Newsletter'
import Blog from '@/components/Event-Blog/Blog'
import Faq from '@/components/FAQ/Faq'
import Footer from '@/components/Footer/Footer'
import HeroSection from '@/components/Hero/HeroSection'
import MyFeatures from '@/components/KeyFeatures/MyFeatures'
import MyPartners from '@/components/Patners/MyPartners'
import PricingSection from '@/components/Pricing/PricingSection'
import Feedback from '@/components/Testimonial/Feedback'

export default function Home () {
  return (
    <section className=''>
      <HeroSection />
      <MyPartners />
      <MyFeatures />
      <Feedback />
      <PricingSection />
      <Faq />
      <Blog />
      <Newsletter />
      <Footer />

    </section>
  )
}
