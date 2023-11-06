'use client'

import { poppins, robotoCondensed, squadaOne } from '@/app/layout'
import { cn } from '@/utils/cn'
import { useState } from 'react'
import IconArrowRight from '../icon/icon-arrow-right'
import IconXMark from '../icon/icon-x-mark'

const Calculator = () => {
  const [selected, setSelected] = useState<'us' | 'metric'>('us')

  return (
    <div className='overflow-hidden rounded-2xl shadow-md'>
      <div className='bg-primary px-4 py-3 text-center text-black'>
        <p className={cn(squadaOne.className, 'text-2xl')}>BMI Calculator</p>
      </div>

      <div className='space-y-4 p-4 md:space-y-6 md:px-12 md:py-8'>
        <div className={cn(squadaOne.className, 'flex items-center gap-4')}>
          <button
            onClick={() => setSelected('us')}
            className={cn(
              selected === 'us'
                ? 'bg-primary text-black'
                : 'bg-gray-400 text-white',
              'rounded-full px-8 py-2',
            )}
          >
            Us Unit
          </button>
          <button
            onClick={() => setSelected('metric')}
            className={cn(
              selected === 'us'
                ? 'bg-gray-400 text-white'
                : 'bg-primary text-black',
              'rounded-full px-8 py-2',
            )}
          >
            Us Unit
          </button>
        </div>

        <div className='space-x-6'>
          <span className='inline-flex items-center gap-2'>
            <input type='radio' name='gender' id='male' />
            <label htmlFor='male' className='font-semibold'>
              Male
            </label>
          </span>
          <span className='inline-flex items-center gap-2'>
            <input type='radio' name='gender' id='female' />
            <label htmlFor='female' className='font-semibold'>
              Female
            </label>
          </span>
        </div>

        <div className={cn(poppins.className, 'space-y-4 px-4')}>
          <div className='flex items-center gap-2'>
            <label htmlFor='' className='w-16 shrink-0 font-medium'>
              Age
            </label>
            <div className='mr-2 flex flex-1 items-center rounded-[10px] bg-gray-100'>
              <input
                type='number'
                placeholder='25'
                className='w-full bg-transparent px-4 py-3 pr-0 outline-none placeholder:text-sm'
              />
              <span className='px-4 text-sm text-gray-400'>Year</span>
            </div>
            <span className='flex-1 text-sm text-gray-400'>
              Age 2 - 100 year
            </span>
          </div>

          <div className='flex items-center gap-2'>
            <label htmlFor='' className='w-16 shrink-0 font-medium'>
              Height
            </label>
            <div className='mr-2 flex flex-1 items-center rounded-[10px] bg-gray-100'>
              <input
                type='number'
                placeholder='5'
                className='w-full bg-transparent px-4 py-3 pr-0 outline-none placeholder:text-sm'
              />
              <span className='px-4 text-sm text-gray-400'>Feet</span>
            </div>
            <div className='flex flex-1 items-center rounded-[10px] bg-gray-100'>
              <input
                type='number'
                placeholder='6'
                className='w-full bg-transparent px-4 py-3 pr-0 outline-none placeholder:text-sm'
              />
              <span className='px-4 text-sm text-gray-400'>inches</span>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <label htmlFor='' className='w-16 shrink-0 font-medium'>
              Weight
            </label>
            <div className='flex flex-1 items-center rounded-[10px] bg-gray-100'>
              <input
                type='number'
                placeholder='158'
                className='w-full bg-transparent px-4 py-3 pr-0 outline-none placeholder:text-sm'
              />
              <span className='px-4 text-sm text-gray-400'>Pounds</span>
            </div>
          </div>

          <div className='flex items-center justify-between gap-4 md:pl-[4.5rem]'>
            <button
              className={cn(
                robotoCondensed.className,
                'flex items-center rounded-lg bg-primary text-black transition-all duration-500 hover:bg-black hover:text-primary',
              )}
            >
              <span className='border-r-2 px-4 py-3'>Calculate</span>
              <span className='px-2'>
                <IconArrowRight />
              </span>
            </button>
            <button
              className={cn(
                robotoCondensed.className,
                'flex items-center rounded-lg bg-gray-400 text-white transition-all duration-500 hover:bg-gray-900',
              )}
            >
              <span className='border-r-2 border-r-white px-4 py-3'>Clear</span>
              <span className='px-2'>
                <IconXMark />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
