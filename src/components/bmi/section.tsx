'use client'

import { poppins, robotoCondensed, squadaOne } from '@/app/layout'
import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import IconCall from '../icon/icon-call'

const BmiSection = () => {
  return (
    <section className='bg-bmi-section-2 bg-cover bg-no-repeat py-16 md:py-28'>
      <div className='container'>
        <div className='flex flex-col space-y-6 md:space-y-14'>
          <motion.div
            initial={{ transform: 'translateX(-100%)' }}
            animate={{ transform: 'translateX(0)' }}
            transition={{ duration: 1.5 }}
            className={cn(squadaOne.className)}
          >
            <h4 className='text-2xl md:text-3xl'>Get into shape, Now!</h4>
            <h3 className='flex flex-col text-4xl md:flex-row md:gap-6 md:text-6xl'>
              <span>GET COMMITTED</span>
              <span
                className='text-primary'
                style={{
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
              >
                START JOGGING !
              </span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ transform: 'translateX(-100%)' }}
            animate={{ transform: 'translateX(0)' }}
            transition={{ duration: 1.5 }}
            className={cn(
              poppins.className,
              'max-w-2xl text-sm leading-8 md:text-base',
            )}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with
          </motion.div>

          <motion.div
            initial={{ transform: 'translateX(-100%)' }}
            animate={{ transform: 'translateX(0)' }}
            transition={{ duration: 1.5 }}
            className='space-y-4'
          >
            <h4 className={cn(squadaOne.className, 'text-3xl')}>Contact Us</h4>

            <button
              className={cn(
                robotoCondensed.className,
                'group group flex w-fit items-center bg-primary text-black transition-all duration-500 hover:bg-gray-900',
              )}
            >
              <span className='px-4'>
                <IconCall className='h-4 w-4 transition-colors duration-500 group-hover:text-white' />
              </span>
              <span className='relative px-6 py-3 font-bold transition-all duration-500 group-hover:-translate-x-2 group-hover:text-primary'>
                <div className='absolute bottom-0 left-0 top-0 w-[3px] bg-white transition-all duration-700 group-hover:left-[100%] group-hover:w-[6px] group-hover:bg-primary'></div>
                +959-40550000
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BmiSection
