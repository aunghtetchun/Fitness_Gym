import Faq from '@/components/faq'
import HeroSlider from '@/components/hero-slider'
import Impressions from '@/components/impressions'
import OurProfile from '@/components/our-profile'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home : Fitness',
  description: 'Your slogan here',
}

export default function Home() {
  return (
    <>
      <HeroSlider />
      <OurProfile />
      <Impressions />
      <Faq />
    </>
  )
}
