import Image from 'next/image'
import profileImg from '@/assets/our-profile.png'
import ActionBtn from './ui/action-btn'
import { squadaOne } from '@/app/layout'
import { cn } from '@/utils/cn'
import Underline from './underline'

const OurProfile = () => {
  return (
    <div className='container flex flex-col gap-4 py-8 md:flex-row'>
      <div className='flex flex-1 items-center justify-center pl-0 md:p-6'>
        <Image src={profileImg} alt='' />
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <div className='mx-auto max-w-md'>
          <h3 className={cn(squadaOne.className, 'text-center text-4xl')}>
            Our Profile
          </h3>

          <Underline className='mx-4' />

          <p className='text-justify'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <ActionBtn text='Read More' className='mt-6' />
        </div>
      </div>
    </div>
  )
}

export default OurProfile
