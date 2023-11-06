import Image from 'next/image'
import logo from '@/assets/logo-grayscale.svg'
import IconMapPin from './icon/icon-map-pin'
import { cn } from '@/utils/cn'
import { roboto } from '@/app/layout'
import IconHeadphone from './icon/icon-headphone'
import IconMessageSquare from './icon/icon-message-square'
import Link from 'next/link'
import facebook from '@/assets/facebook.svg'
import ig from '@/assets/instagram.svg'
import tiktok from '@/assets/tiktok.svg'

const Footer = () => {
  return (
    <footer className='bg-[#ECECEC]'>
      <div className='container py-8 md:py-16'>
        <div
          className={cn(
            roboto.className,
            'grid grid-cols-1 justify-center md:grid-cols-4',
          )}
        >
          <div className='flex items-center justify-center p-4'>
            <Image src={logo} alt='logo' className='h-16' />
          </div>
          <div className='p-4'>
            <h4 className='text-lg font-semibold'>Contact</h4>
            <Divider />
            <div className='flex flex-col space-y-2'>
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
          <div className='p-4'>
            <h4 className='text-lg font-semibold'>Quick Links</h4>
            <Divider />
            <div className='flex flex-col space-y-2 font-bold'>
              <Link href={'/'}>Home</Link>
              <Link href={'/personal-programs'}>Personal Program</Link>
              <Link href={'/'}>Our Course</Link>
              <Link href={'/contact-us'}>Contact Us</Link>
            </div>
          </div>
          <div className='p-4'>
            <h4 className='text-lg font-semibold'>Social</h4>
            <Divider />
            <div className='flex items-center gap-2'>
              <Link href={'/'}>
                <Image src={facebook} alt='facebook' />
              </Link>
              <Link href={'/'}>
                <Image src={ig} alt='instagram' />
              </Link>
              <Link href={'/'}>
                <Image src={tiktok} alt='tiktok' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export const Divider = () => (
  <div className='my-4 flex h-1'>
    <div className='h-[3px] w-full max-w-[80px] bg-primary'></div>
    <div className='h-[1px] w-full bg-black'></div>
  </div>
)
export default Footer
