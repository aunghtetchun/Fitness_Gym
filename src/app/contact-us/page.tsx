import facebook from '@/assets/facebook.svg'
import ig from '@/assets/instagram.svg'
import logo from '@/assets/logo-grayscale.svg'
import tiktok from '@/assets/tiktok.svg'
import { Divider } from '@/components/footer'
import IconHeadphone from '@/components/icon/icon-headphone'
import IconMapPin from '@/components/icon/icon-map-pin'
import IconMessageSquare from '@/components/icon/icon-message-square'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { roboto, squadaOne } from '../layout'
import ActionBtn from '@/components/ui/action-btn'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us : Fitness',
  description: 'Your slogan here',
}

const ContactUs = () => {
  return (
    <>
      <section className='bg-hero-bmi bg-cover bg-no-repeat py-16 md:py-32'>
        <h3
          className={cn(
            squadaOne.className,
            'text-center text-3xl text-white md:text-5xl',
          )}
        >
          Contact Us
        </h3>
      </section>

      <section className='container py-12 md:py-28'>
        <div className='grid grid-cols-1 shadow-custom md:grid-cols-2'>
          <div className='p-4'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12038.480190945194!2d96.13149534981297!3d16.80843959452546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb5c24cb86f7%3A0x8f614a431ca0dfc5!2sREVOMED%20MYANMAR!5e0!3m2!1sen!2smm!4v1696826341504!5m2!1sen!2smm'
              className='h-full w-full border-0'
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>

          <div className='p-8 md:ml-12'>
            <div className='flex flex-col'>
              <Image src={logo} alt='' />
            </div>

            <div className='p-4'>
              <h4 className='text-lg font-semibold'>Contact Us</h4>
              <Divider />
              <div className='flex flex-col space-y-4'>
                <div className='flex items-start gap-2'>
                  <IconMapPin className='mt-1 h-4 w-4 shrink-0' />
                  <p className='flex-1 text-sm'>
                    No.594/A, Pan Ta Pwint Taung Street, Aout Wa Net Chaung,
                    Hmawbi Township, Yangon, Myanmar.
                  </p>
                </div>
                <div className='flex items-start gap-2'>
                  <IconHeadphone className='mt-1 h-4 w-4 shrink-0' />
                  <p className='text-sm'>
                    <a href='tel:095502921'>09 5502921</a>,{' '}
                    <a href='tel:09421041237'>09 421041237</a>,{' '}
                    <a href='tel:09420235303'>09 420235303</a>,{' '}
                    <a href='tel:09686223834'>09 686223834</a>
                  </p>
                </div>
                <div className='flex items-start gap-2'>
                  <IconMessageSquare className='mt-1 h-4 w-4' />
                  <a href='mailto:sample@example@gmail.com' className='text-sm'>
                    sample@example@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-end gap-12'>
              <Link href={'/'}>
                <Image className='h-8 w-8' src={facebook} alt='facebook' />
              </Link>
              <Link href={'/'}>
                <Image className='h-8 w-8' src={ig} alt='instagram' />
              </Link>
              <Link href={'/'}>
                <Image className='h-8 w-8' src={tiktok} alt='tiktok' />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-impressions'>
        <div className={cn(roboto.className, 'mx-auto max-w-3xl p-8 md:p-16')}>
          <h3 className='text-2xl font-bold text-white'>Send us a Message</h3>
          <p className='mb-8 text-sm text-gray-100'>
            Send us a message and we will respond within 24 hours.
          </p>

          <div className='mb-8 space-y-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='' className='text-white'>
                Username*
              </label>
              <input
                type='text'
                placeholder='Enter your name'
                className='rounded-md bg-gray-100 px-4 py-3 outline-none placeholder:text-sm'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='' className='text-white'>
                Email*
              </label>
              <input
                type='text'
                placeholder='Enter your email'
                className='rounded-md bg-gray-100 px-4 py-3 outline-none placeholder:text-sm'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='' className='text-white'>
                Phone*
              </label>
              <input
                type='text'
                placeholder='Enter your phone'
                className='rounded-md bg-gray-100 px-4 py-3 outline-none placeholder:text-sm'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='' className='text-white'>
                Message
              </label>
              <textarea
                placeholder='Enter your message'
                rows={5}
                className='rounded-md bg-gray-100 px-4 py-3 outline-none placeholder:text-sm'
              />
            </div>
          </div>

          <ActionBtn text='Submit' />
        </div>
      </section>
    </>
  )
}

export default ContactUs
