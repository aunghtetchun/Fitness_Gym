'use client'

import { poppins, squadaOne } from '@/app/layout'
import Logo from '@/assets/logo.svg'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import IconSupport from './icon/icon-support'
import IconBars from './icon/icon-bars'
import MemberLoginForm from './member-login-form'

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const activeSegment = useSelectedLayoutSegment()
  const containerRef = useRef<null | HTMLDivElement>(null)
  const homeRef = useRef(null)
  const bmiRef = useRef(null)
  const loginDialogRef = useRef<HTMLButtonElement>(null)
  const personalProgramRef = useRef<null | HTMLAnchorElement>(null)
  const aboutTrainerRef = useRef(null)
  const contactUsRef = useRef(null)
  const [pos, setPos] = useState({ width: 0, left: 0 })

  const closeNav = () => setShowMobileNav(false)

  const obj: {
    [key: string]: any
  } = {
    bmi: bmiRef,
    'personal-programs': personalProgramRef,
    'about-us': aboutTrainerRef,
    'contact-us': contactUsRef,
  }

  useEffect(() => {
    const segment =
      activeSegment === 'blogs'
        ? 'about-us'
        : activeSegment === 'register' || activeSegment === 'my-profile'
        ? null
        : activeSegment
    const ref = segment ? obj[segment] : homeRef
    const len =
      ref.current.getBoundingClientRect().left -
      (containerRef?.current as HTMLDivElement).getBoundingClientRect().left
    setPos({
      left: len,
      width: ref.current.offsetWidth,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSegment])

  return (
    <>
      <div className='sticky top-0 z-40'>
        <div className='bg-white'>
          <div className='container flex items-center justify-center md:justify-between'>
            <div
              className={cn(
                poppins.className,
                'flex -translate-y-2 items-center gap-2 rounded-b-md bg-primary-light px-4 pt-1 text-xs md:px-8 md:pb-1 md:pt-2',
              )}
            >
              <IconSupport className='mt-1 w-5 md:w-6' />
              <p>Any Question? Call Us:</p>
              <a href='tel:+95945208235' className='font-bold'>
                +959 452 08235
              </a>
            </div>
            <MemberLoginForm ref={loginDialogRef} />
          </div>
        </div>

        <div className='bg-black'>
          <div className='container flex items-center justify-between'>
            <Link href={'/'} className='py-2'>
              <Image src={Logo} alt='' className='w-28 md:w-36' />
            </Link>
            <div
              ref={containerRef}
              className={cn(squadaOne.className, 'hidden flex-col md:flex')}
            >
              <div className='flex items-center justify-between gap-8 text-lg text-white'>
                <Link ref={homeRef} href='/'>
                  Home
                </Link>
                <Link ref={bmiRef} href='/bmi'>
                  BMI
                </Link>
                <Link ref={personalProgramRef} href='/personal-programs'>
                  Personal Program
                </Link>
                <Link ref={aboutTrainerRef} href='/about-us'>
                  About Our Trainer
                </Link>
                <Link ref={contactUsRef} href='/contact-us'>
                  Contact Us
                </Link>
              </div>
              <div
                className='h-[3px] bg-primary transition-all duration-500'
                style={{
                  marginLeft: pos.left,
                  width: pos.width,
                }}
              />
            </div>
            <div
              onClick={() => setShowMobileNav(!showMobileNav)}
              className='text-white md:hidden'
            >
              <IconBars />
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          squadaOne.className,
          'fixed bottom-0 left-0 right-0 top-0 z-30 bg-black text-xl text-primary transition-transform duration-500',
          showMobileNav ? 'translate-y-8' : '-translate-y-full',
        )}
      >
        <div className='flex h-full flex-col items-center justify-center pt-0'>
          <Link
            onClick={closeNav}
            href={'/'}
            className='inline-block w-full px-4 py-6 text-center'
          >
            Home
          </Link>
          <Link
            onClick={closeNav}
            href={'/bmi'}
            className='inline-block w-full px-4 py-6 text-center'
          >
            BMI
          </Link>
          <Link
            onClick={closeNav}
            href={'/personal-programs'}
            className='inline-block w-full px-4 py-6 text-center'
          >
            Personal Program
          </Link>
          <Link
            onClick={closeNav}
            href={'/about-us'}
            className='inline-block w-full px-4 py-6 text-center'
          >
            About Our Trainer
          </Link>
          <Link
            onClick={closeNav}
            href={'/contact-us'}
            className='inline-block w-full px-4 py-6 text-center'
          >
            Contact Us
          </Link>
          <button
            onClick={() => {
              closeNav()
              loginDialogRef?.current?.click()
            }}
            className='inline-block w-full px-4 py-6 text-center'
          >
            Member Login
          </button>
          <Link
            onClick={closeNav}
            href={'/register'}
            className='inline-block w-full px-4 py-6 text-center'
          >
            Register
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
