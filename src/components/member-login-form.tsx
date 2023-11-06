'use client'

import { poppins, squadaOne } from '@/app/layout'
import { cn } from '@/utils/cn'
import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/navigation'
import { ForwardedRef, forwardRef } from 'react'
import IconUserPlus from './icon/icon-user-plus'

// eslint-disable-next-line react/display-name
const MemberLoginForm = forwardRef(
  (_props, ref: ForwardedRef<HTMLButtonElement>) => {
    const router = useRouter()

    return (
      <div
        className={cn(poppins.className, 'hidden items-center text-xs md:flex')}
      >
        <Dialog.Root>
          <Dialog.Trigger ref={ref}>
            <button className='mr-4 flex items-center gap-2 border-r-2 border-r-black pr-4'>
              <div className='rounded-full bg-primary p-1'>
                <IconUserPlus />
              </div>
              Member Login
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className='fixed inset-0 z-[99] bg-black/60 data-[state=open]:animate-overlayShow' />
            <Dialog.Content className='fixed left-[50%] top-[50%] z-[99] max-h-[90vh] w-full max-w-[1000px] translate-x-[-50%] translate-y-[-50%] overflow-hidden p-4 data-[state=open]:animate-contentShow'>
              <div className='rounded-xl bg-[#D9D9D9] focus:outline-none'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                  <div className='space-y-4 p-4 md:space-y-8 md:p-12'>
                    <div>
                      <h5
                        className={cn(
                          squadaOne.className,
                          'text-3xl text-[#F34E3A]',
                        )}
                      >
                        Login
                      </h5>
                      <p className='text-sm md:text-base'>
                        Enter your credentials to get started
                      </p>
                    </div>

                    <div className='flex flex-col space-y-1'>
                      <label htmlFor='username' className='text-sm'>
                        Username*
                      </label>
                      <input
                        type='text'
                        className='bg-white px-4 py-3 text-sm outline-none placeholder:text-sm'
                        id='username'
                        placeholder='Enter your name'
                      />
                    </div>

                    <div className='flex flex-col space-y-1'>
                      <label htmlFor='password' className='text-sm'>
                        Password*
                      </label>
                      <input
                        type='text'
                        className='bg-white px-4 py-3 text-sm outline-none placeholder:text-sm'
                        id='password'
                        placeholder='Enter your Password'
                      />
                    </div>

                    <button
                      className={cn(
                        squadaOne.className,
                        'w-full rounded-md bg-primary px-4 py-2 text-lg text-black outline-none transition-colors duration-500 hover:bg-black hover:text-primary md:py-3',
                      )}
                    >
                      Login
                    </button>

                    <div className='cursor-pointer text-xs'>
                      Forgot Password?
                    </div>
                  </div>
                  <div className='hidden bg-dialog bg-cover bg-no-repeat md:block'></div>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <button
          onClick={() => router.push('/register')}
          className='font-medium text-blue-600'
        >
          Register
        </button>
      </div>
    )
  },
)

export default MemberLoginForm
