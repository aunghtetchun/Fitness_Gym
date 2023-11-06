'use client'

import { roboto, squadaOne } from '@/app/layout'
import { cn } from '@/utils/cn'
import Underline from './underline'
import { useRouter } from 'next/navigation'

interface Props {
  isCreate: boolean
}
const MemberApplicationForm = ({ isCreate }: Props) => {
  const router = useRouter()
  const inputClass =
    'rounded-[5px] border border-transparent bg-gray-100 px-4 py-3 text-sm outline-none placeholder:text-sm focus:border-gray-400'

  return (
    <div className='rounded-xl bg-white p-4 md:p-20'>
      <div className='mx-auto max-w-md'>
        <h3
          className={cn(
            squadaOne.className,
            'text-center text-2xl md:text-3xl',
          )}
        >
          {isCreate ? 'Member Application Form' : 'Member Information'}
        </h3>
        <Underline className='mx-4' />
      </div>
      <div className={cn(roboto.className, 'flex items-center justify-end')}>
        <div className='flex flex-col space-y-1'>
          <label htmlFor='memberId' className='text-sm font-semibold'>
            Member ID
          </label>
          <input
            id='memberId'
            type='text'
            className={inputClass}
            placeholder='ID-00010'
          />
        </div>
      </div>
      <div
        className={cn(
          roboto.className,
          'grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4',
        )}
      >
        <div className='space-y-4 md:space-y-6'>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='nrcNo' className='text-sm font-semibold'>
              NRC Number
            </label>
            <input
              id='nrcNo'
              type='text'
              className={inputClass}
              placeholder='Enter your NRC Number'
            />
          </div>

          <div className='flex flex-col space-y-2'>
            <label htmlFor='address' className='text-sm font-semibold'>
              Address
            </label>
            <input
              id='address'
              type='text'
              className={inputClass}
              placeholder='Enter your address'
            />
          </div>

          <div className='flex flex-col space-y-2'>
            <label htmlFor='issueDate' className='text-sm font-semibold'>
              Issue Date
            </label>
            <input
              id='issueDate'
              type='text'
              className={inputClass}
              placeholder='1-5-2023'
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='weight' className='text-sm font-semibold'>
              Weight (lb)
            </label>
            <div className='flex flex-col gap-2 md:flex-row'>
              <div className='flex flex-1 flex-col'>
                <input
                  id='weight'
                  type='text'
                  className={inputClass}
                  placeholder='131'
                />
              </div>
              <div className='flex flex-1 flex-col'>
                <input
                  // id='weight'
                  type='text'
                  className={inputClass}
                  placeholder='135 lb'
                />
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <label htmlFor='armRight' className='text-sm font-semibold'>
              Arm (Right)
            </label>
            <div className='flex flex-col gap-2 md:flex-row'>
              <div className='flex flex-1 flex-col'>
                <input
                  id='armRight'
                  type='text'
                  className={inputClass}
                  placeholder='10'
                />
              </div>
              <div className='flex flex-1 flex-col'>
                <input
                  // id='memberId'
                  type='text'
                  className={inputClass}
                  placeholder='10.4 "'
                />
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <label htmlFor='waist' className='text-sm font-semibold'>
              Waist
            </label>
            <div className='flex flex-col gap-2 md:flex-row'>
              <div className='flex flex-1 flex-col'>
                <input
                  id='waist'
                  type='text'
                  className={inputClass}
                  placeholder='33'
                />
              </div>
              <div className='flex flex-1 flex-col'>
                <input
                  // id='memberId'
                  type='text'
                  className={inputClass}
                  placeholder='28.5"'
                />
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <label htmlFor='calfRight' className='text-sm font-semibold'>
              Calf (Right)
            </label>
            <div className='flex flex-col gap-2 md:flex-row'>
              <div className='flex flex-1 flex-col'>
                <input
                  id='calfRight'
                  type='text'
                  className={inputClass}
                  placeholder='11.5'
                />
              </div>
              <div className='flex flex-1 flex-col'>
                <input
                  // id='memberId'
                  type='text'
                  className={inputClass}
                  placeholder='14.3"'
                />
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <span className='text-base font-semibold'>Body Goal</span>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-1'>
                <input type='radio' name='bodyGoal' id='weightGain' />
                <label htmlFor='weightGain' className='text-sm font-semibold'>
                  Weight Gain
                </label>
              </div>
              <div className='flex items-center gap-1'>
                <input type='radio' name='bodyGoal' id='weightLoss' />
                <label htmlFor='weightLoss' className='text-sm font-semibold'>
                  Weight Loss
                </label>
              </div>
              <div className='flex items-center gap-1'>
                <input type='radio' name='bodyGoal' id='fitness' />
                <label htmlFor='fitness' className='text-sm font-semibold'>
                  Fitness
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className='space-y-4 md:space-y-6'>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='dob' className='text-sm font-semibold'>
              Date of Birth
            </label>
            <input
              id='dob'
              type='text'
              className={inputClass}
              placeholder='Enter your Date of birth'
            />
          </div>

          <div className='flex flex-col space-y-2'>
            <label htmlFor='phone' className='text-sm font-semibold'>
              Phone
            </label>
            <input
              id='phone'
              type='text'
              className={inputClass}
              placeholder='Enter your phone number'
            />
          </div>

          <div className='flex flex-col space-y-2'>
            <label htmlFor='exp' className='text-sm font-semibold'>
              Expire Date
            </label>
            <input
              id='exp'
              type='text'
              className={inputClass}
              placeholder='1-5-2024'
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='chest' className='text-sm font-semibold'>
              Chest
            </label>
            <div className='flex flex-col gap-2 md:flex-row'>
              <div className='flex flex-1 flex-col'>
                <input
                  id='chest'
                  type='text'
                  className={inputClass}
                  placeholder='35'
                />
              </div>
              <div className='flex flex-1 flex-col'>
                <input
                  // id='memberId'
                  type='text'
                  className={inputClass}
                  placeholder='34"'
                />
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <label htmlFor='armLeft' className='text-sm font-semibold'>
              Arm (Left)
            </label>
            <div className='flex flex-col gap-2 md:flex-row'>
              <div className='flex flex-1 flex-col'>
                <input
                  id='armLeft'
                  type='text'
                  className={inputClass}
                  placeholder='10'
                />
              </div>
              <div className='flex flex-1 flex-col'>
                <input
                  // id='memberId'
                  type='text'
                  className={inputClass}
                  placeholder='10.4"'
                />
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <label htmlFor='hip' className='text-sm font-semibold'>
              Hip
            </label>
            <div className='flex flex-col gap-2 md:flex-row'>
              <div className='flex flex-1 flex-col'>
                <input
                  id='hip'
                  type='text'
                  className={inputClass}
                  placeholder='39'
                />
              </div>
              <div className='flex flex-1 flex-col'>
                <input
                  // id='memberId'
                  type='text'
                  className={inputClass}
                  placeholder='40"'
                />
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <label htmlFor='calfLeft' className='text-sm font-semibold'>
              Calf (Left)
            </label>
            <div className='flex flex-col gap-2 md:flex-row'>
              <div className='flex flex-1 flex-col'>
                <input
                  id='calfLeft'
                  type='text'
                  className={inputClass}
                  placeholder='11.5'
                />
              </div>
              <div className='flex flex-1 flex-col'>
                <input
                  // id='memberId'
                  type='text'
                  className={inputClass}
                  placeholder='14.3"'
                />
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <span className='text-base font-semibold'>Refer By</span>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-1'>
                <input type='radio' name='referBy' id='self' />
                <label htmlFor='self' className='text-sm font-semibold'>
                  Self
                </label>
              </div>
              <div className='flex items-center gap-1'>
                <input type='radio' name='referBy' id='facebook' />
                <label htmlFor='facebook' className='text-sm font-semibold'>
                  Facebook
                </label>
              </div>
              <div className='flex items-center gap-1'>
                <input type='radio' name='referBy' id='friend' />
                <label htmlFor='friend' className='text-sm font-semibold'>
                  Friend
                </label>
              </div>
              <div className='flex items-center gap-1'>
                <input type='radio' name='referBy' id='staff' />
                <label htmlFor='staff' className='text-sm font-semibold'>
                  Our Staff
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => (isCreate ? router.push('/my-profile') : null)}
        className={cn(
          squadaOne.className,
          'mx-auto mt-10 block w-full max-w-sm rounded-md bg-primary px-4 py-3 text-lg text-black outline-none transition-colors duration-500 hover:bg-black hover:text-primary md:mt-20',
        )}
      >
        {isCreate ? 'Register' : 'Update Member Info'}
      </button>
    </div>
  )
}

export default MemberApplicationForm
