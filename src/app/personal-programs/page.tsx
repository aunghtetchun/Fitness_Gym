import { cn } from '@/utils/cn'
import { poppins, squadaOne } from '../layout'
import Underline from '@/components/underline'
import image1 from '@/assets/personal-training-1.png'
import image2 from '@/assets/personal-training-2.png'
import image3 from '@/assets/personal-training-3.png'
import Image from 'next/image'
import IconFit from '@/components/icon/icon-fit'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personal Programs : Fitness',
  description: 'Your slogan here',
}

const PersonalProgram = () => {
  return (
    <>
      <section
        className='min-h-[200px] bg-personal-program-header bg-cover bg-no-repeat md:min-h-[400px]'
        style={{
          clipPath: 'polygon(100% 0, 100% 100%, 50% 75%, 0 100%, 0 0)',
        }}
      ></section>

      <section className='-translate-y-4'>
        <div className='container text-center'>
          <h3 className={cn(squadaOne.className, 'text-4xl uppercase')}>
            All Classes
          </h3>
          <h3 className={cn(poppins.className, 'text-xl text-gray-500')}>
            Of Personal Training
          </h3>

          <div className='mx-auto max-w-lg'>
            <Underline className='' />
            <p className={cn(poppins.className, 'text-sm md:text-base')}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a has been
              the industry&apos;s standard
            </p>
          </div>
        </div>
      </section>

      <section className=''>
        <div className='container py-12'>
          <div className='flex flex-col gap-6 md:flex-row'>
            <Link href={'/personal-programs/1'} className='group text-center'>
              <div className='overflow-hidden'>
                <Image
                  src={image1}
                  alt=''
                  className='transition-all duration-500 group-hover:scale-125 group-hover:brightness-[.25]'
                />
              </div>
              <div className='-translate-y-8 transition-all duration-500 group-hover:-translate-y-[12rem]'>
                <IconFit className='mx-auto h-8 w-8 text-white opacity-0 transition-all duration-500 group-hover:opacity-100' />
                <h4
                  className={cn(
                    squadaOne.className,
                    'mt-2 text-3xl transition-all duration-500 group-hover:text-white',
                  )}
                >
                  Title-1 Text
                </h4>
              </div>
            </Link>

            <div className='space-y-4 text-center'>
              <Image src={image2} alt='' />
              <h4 className={cn(squadaOne.className, 'text-3xl font-bold')}>
                Title-2 Text
              </h4>
            </div>
            <div className='space-y-4 text-center'>
              <Image src={image3} alt='' />
              <h4 className={cn(squadaOne.className, 'text-3xl font-bold')}>
                Title-3 Text
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PersonalProgram
