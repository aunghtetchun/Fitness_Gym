'use client'

import { cn } from '@/utils/cn'
import { squadaOne } from '../layout'
import IconPlayCourse from '@/components/icon/icon-play-course'
import IconPlayCourseActive from '@/components/icon/icon-play-course-active'
import * as Tabs from '@radix-ui/react-tabs'
import Image from 'next/image'
import userImage from '@/assets/user.jpg'
import gmailIcon from '@/assets/icon/gmail.jpg'
import phoneIcon from '@/assets/icon/phone.jpg'
import course1 from '@/assets/course-1.jpg'
import course2 from '@/assets/course-2.jpg'
import calendarIcon from '@/assets/icon/calendar.svg'
import MemberApplicationForm from '@/components/member-application-form'

const MyProfile = () => {
  return (
    <div className='container py-8 md:py-16'>
      <Tabs.Root defaultValue='tab1'>
        <Tabs.List
          className={cn(
            squadaOne.className,
            'flex items-center justify-end gap-4 pb-6 md:pb-12',
          )}
        >
          <Tabs.Trigger
            value='tab1'
            className='flex items-center gap-2 rounded-lg bg-[#D9D9D9] px-4 py-1.5 text-base text-black data-[state=active]:bg-[#077DF1] data-[state=active]:text-white md:px-8 md:py-2 md:text-lg'
          >
            Your Profile
            <IconPlayCourse className='h-4 w-4' />
          </Tabs.Trigger>
          <Tabs.Trigger
            value='tab2'
            className='flex items-center gap-2 rounded-lg bg-[#D9D9D9] px-4 py-1.5 text-base text-black data-[state=active]:bg-[#077DF1] data-[state=active]:text-white md:px-8 md:py-2 md:text-lg'
          >
            Your Courses
            <IconPlayCourseActive className='h-4 w-4' />
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value='tab1'>
          <div className='flex flex-col items-center justify-between gap-y-4 border-b-2 pb-8 sm:flex-row md:px-20'>
            <div className='flex w-full items-center gap-2 md:w-fit md:gap-3'>
              <Image
                src={userImage}
                className='h-20 w-20 rounded-full md:h-28 md:w-28'
                alt=''
              />
              <div className={cn(squadaOne.className, 'flex flex-col')}>
                <p className='text-2xl md:text-4xl'>Zaw Zaw Win</p>
                <p className='flex items-center gap-2 text-base md:text-xl'>
                  <Image src={gmailIcon} className='h-4 w-4' alt='gmail' />
                  zawzawwin@gmail.com
                </p>
                <p className='flex items-center gap-2 text-base md:text-xl'>
                  <Image src={phoneIcon} className='h-4 w-4' alt='phone' />
                  09-425008245
                </p>
              </div>
            </div>
            <div
              className={cn(
                squadaOne.className,
                'w-full rounded-lg bg-primary px-4 py-4 text-center sm:w-fit md:px-8 md:py-8',
              )}
            >
              <div className='text-2xl text-[#7C7C7C]'>Courses</div>
              <div className='text-3xl'>2</div>
            </div>
          </div>
          <MemberApplicationForm isCreate={false} />
        </Tabs.Content>
        <Tabs.Content value='tab2'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='flex flex-col overflow-hidden rounded-xl shadow-custom md:flex-row'>
              <Image
                src={course1}
                alt=''
                className='h-52 w-auto object-cover md:h-auto md:w-[45%]'
              />
              <div className='flex w-full flex-col justify-between p-4'>
                <div className='space-y-1'>
                  <p
                    className={cn(squadaOne.className, 'text-2xl md:text-3xl')}
                  >
                    Myanmar Fitness Trainer Academy
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                      <Image alt='' src={calendarIcon} className='h-8 w-8' />
                      <div>
                        <div className='text-sm font-medium text-[#545454]'>
                          Start Date
                        </div>
                        <div className='text-sm text-[#00C35A] md:text-base'>
                          12-8-2023
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Image alt='' src={calendarIcon} className='h-8 w-8' />
                      <div>
                        <div className='text-sm font-medium text-[#545454]'>
                          End Date
                        </div>
                        <div className='text-sm text-[#F34E3A] md:text-base'>
                          12-8-2024
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cn(squadaOne.className, 'md:ml-auto')}>
                  <p className='text-xl md:text-2xl'>Expand</p>
                  <p className='text-2xl text-[#F34E3A] md:text-3xl'>
                    100,000 Ks
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-col overflow-hidden rounded-xl shadow-custom md:flex-row'>
              <Image
                src={course1}
                alt=''
                className='h-52 w-auto object-cover md:h-auto md:w-[45%]'
              />
              <div className='flex w-full flex-col justify-between p-4'>
                <div className='space-y-1'>
                  <p
                    className={cn(squadaOne.className, 'text-2xl md:text-3xl')}
                  >
                    Myanmar Fitness Trainer Academy
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                      <Image alt='' src={calendarIcon} className='h-8 w-8' />
                      <div>
                        <div className='text-sm font-medium text-[#545454]'>
                          Start Date
                        </div>
                        <div className='text-sm text-[#00C35A] md:text-base'>
                          12-8-2023
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Image alt='' src={calendarIcon} className='h-8 w-8' />
                      <div>
                        <div className='text-sm font-medium text-[#545454]'>
                          End Date
                        </div>
                        <div className='text-sm text-[#F34E3A] md:text-base'>
                          12-8-2024
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cn(squadaOne.className, 'md:ml-auto')}>
                  <p className='text-xl md:text-2xl'>Expand</p>
                  <p className='text-2xl text-[#F34E3A] md:text-3xl'>
                    100,000 Ks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}

export default MyProfile
