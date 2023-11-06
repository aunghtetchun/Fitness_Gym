import Calculator from '@/components/bmi/calculator'
import BmiSection from '@/components/bmi/section'
import BmiStatus from '@/components/bmi/status'
import { cn } from '@/utils/cn'
import { Metadata } from 'next'
import { squadaOne } from '../layout'

export const metadata: Metadata = {
  title: 'BMI : Fitness',
  description: 'Your slogan here',
}

const Bmi = () => {
  return (
    <>
      <section className='bg-hero-bmi bg-cover bg-no-repeat py-16 md:py-32'>
        <h3
          className={cn(
            squadaOne.className,
            'text-center text-3xl uppercase text-white md:text-5xl',
          )}
        >
          Calculate your BMI
        </h3>
      </section>

      <section className='container grid grid-cols-1 gap-6 py-12 md:grid-cols-2 md:py-16'>
        <Calculator />
        <BmiStatus />
      </section>

      <BmiSection />
    </>
  )
}

export default Bmi
