import { cn } from '@/utils/cn'
import React from 'react'
import { poppins, squadaOne } from '../layout'
import Underline from '@/components/underline'
import userimg from '@/assets/user.svg'
import trainer from '@/assets/about-trainer.jpg'
import stripes from '@/assets/illustration-stripes.svg'
import cert1 from '@/assets/cert-1.jpg'
import award1 from '@/assets/award-1.jpg'
import award2 from '@/assets/award-2.jpg'
import award3 from '@/assets/award-3.jpg'
import award4 from '@/assets/award-4.jpg'
import blog1 from '@/assets/blog-1.jpg'
import blog2 from '@/assets/blog-2.jpg'
import blog3 from '@/assets/blog-3.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Trainer : Fitness',
  description: 'Your slogan here',
}

const AboutUs = () => {
  return (
    <>
      <section className='bg-hero-bmi bg-cover bg-no-repeat py-16 md:py-32'>
        <h3
          className={cn(
            squadaOne.className,
            'text-center text-3xl text-white md:text-5xl',
          )}
        >
          About Our Trainer
        </h3>
      </section>

      <section className='relative overflow-hidden'>
        <Image
          src={stripes}
          alt=''
          className='absolute bottom-0 left-0 top-0'
        />
        <div className='container py-12 md:py-20'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='relative'>
              <Image src={trainer} alt='' className='' />
            </div>
            <div className=''>
              <h4 className={cn(squadaOne.className, 'text-center text-3xl')}>
                About Trainer
              </h4>
              <Underline className='mx-auto w-4/5' />

              <p
                className={cn(
                  poppins.className,
                  'text-justify text-sm md:text-base',
                )}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                <br /> <br /> Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-impressions'>
        <div className='container grid grid-cols-2 gap-4 py-20 md:grid-cols-4'>
          <Image src={cert1} alt='' className='' />
          <Image src={cert1} alt='' className='' />
          <Image src={cert1} alt='' className='' />
          <Image src={cert1} alt='' className='' />

          <Image src={award1} alt='' className='' />
          <Image src={award2} alt='' className='' />
          <Image src={award3} alt='' className='' />
          <Image src={award4} alt='' className='' />
        </div>
      </section>

      <section className='bg-[#d9d9d9]'>
        <div className='container py-12 md:py-20'>
          <div className='mx-auto max-w-md'>
            <h4
              className={cn(
                squadaOne.className,
                'text-center text-3xl uppercase',
              )}
            >
              Our Blog & Article
            </h4>
            <Underline className='mx-auto w-4/5' />
            <p
              className={cn(
                poppins.className,
                'text-center text-sm md:text-base',
              )}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the
            </p>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
            <Link href={'/blogs/1'} className='group bg-white'>
              <div className='relative overflow-hidden'>
                <div className='absolute inset-0 z-20 bg-[#ffe71880] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
                <Image
                  src={blog1}
                  alt=''
                  className='transition-transform duration-500 group-hover:scale-125'
                />
              </div>
              <div className='p-8 pt-6'>
                <h5 className={cn(squadaOne.className, 'mb-2 text-2xl')}>
                  Push Your Fitness Further With Facilities
                </h5>
                <p className={cn(poppins.className, 'line-clamp-6')}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat sunt, perferendis pariatur fugit iure animi, vitae
                  quasi voluptatum eligendi eos quia nisi quos dignissimos
                  laborum asperiores ad neque delectus commodi ipsa. Quo
                  voluptate voluptatem cupiditate numquam quos laboriosam
                  repudiandae assumenda.
                </p>
                <div className='mt-2 flex justify-end gap-3 border-t-2 pt-4'>
                  <div className='bg-[#D9D9D9] p-2'>
                    <Image src={userimg} alt='' className='h-6 w-6' />
                  </div>
                  <div className='flex flex-col'>
                    <p
                      className={cn(
                        squadaOne.className,
                        'text-base text-[#989494]',
                      )}
                    >
                      By Aung Myint Myat
                    </p>
                    <p
                      className={cn(
                        squadaOne.className,
                        'text-sm text-[#A7A7A7]',
                      )}
                    >
                      Sep-9-2023
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={'/blogs/1'} className='group bg-white'>
              <div className='relative overflow-hidden'>
                <div className='absolute inset-0 z-20 bg-[#ffe71880] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
                <Image
                  src={blog2}
                  alt=''
                  className='transition-transform duration-500 group-hover:scale-125'
                />
              </div>
              <div className='p-8 pt-6'>
                <h5 className={cn(squadaOne.className, 'mb-2 text-2xl')}>
                  How to keep your Body Healthy
                </h5>
                <p className={cn(poppins.className, 'line-clamp-6')}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat sunt, perferendis pariatur fugit iure animi, vitae
                  quasi voluptatum eligendi eos quia nisi quos dignissimos
                  laborum asperiores ad neque delectus commodi ipsa. Quo
                  voluptate voluptatem cupiditate numquam quos laboriosam
                  repudiandae assumenda.
                </p>
                <div className='mt-2 flex justify-end gap-3 border-t-2 pt-4'>
                  <div className='bg-[#D9D9D9] p-2'>
                    <Image src={userimg} alt='' className='h-6 w-6' />
                  </div>
                  <div className='flex flex-col'>
                    <p
                      className={cn(
                        squadaOne.className,
                        'text-base text-[#989494]',
                      )}
                    >
                      By Aung Myint Myat
                    </p>
                    <p
                      className={cn(
                        squadaOne.className,
                        'text-sm text-[#A7A7A7]',
                      )}
                    >
                      Sep-9-2023
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={'/blogs/1'} className='group bg-white'>
              <div className='relative overflow-hidden'>
                <div className='absolute inset-0 z-20 bg-[#ffe71880] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
                <Image
                  src={blog3}
                  alt=''
                  className='transition-transform duration-500 group-hover:scale-125'
                />
              </div>
              <div className='p-8 pt-6'>
                <h5 className={cn(squadaOne.className, 'mb-2 text-2xl')}>
                  Give your Fitness a Boost with our Gym
                </h5>
                <p className={cn(poppins.className, 'line-clamp-6')}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat sunt, perferendis pariatur fugit iure animi, vitae
                  quasi voluptatum eligendi eos quia nisi quos dignissimos
                  laborum asperiores ad neque delectus commodi ipsa. Quo
                  voluptate voluptatem cupiditate numquam quos laboriosam
                  repudiandae assumenda.
                </p>
                <div className='mt-2 flex justify-end gap-3 border-t-2 pt-4'>
                  <div className='bg-[#D9D9D9] p-2'>
                    <Image src={userimg} alt='' className='h-6 w-6' />
                  </div>
                  <div className='flex flex-col'>
                    <p
                      className={cn(
                        squadaOne.className,
                        'text-base text-[#989494]',
                      )}
                    >
                      By Aung Myint Myat
                    </p>
                    <p
                      className={cn(
                        squadaOne.className,
                        'text-sm text-[#A7A7A7]',
                      )}
                    >
                      Sep-9-2023
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
