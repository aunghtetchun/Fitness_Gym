import { poppins, squadaOne } from '@/app/layout'
import duration from '@/assets/icon/duration.svg'
import human from '@/assets/icon/human.svg'
import intensity from '@/assets/icon/intensity.svg'
import trainer from '@/assets/icon/trainer.svg'
import IconArrowSmRight from '@/components/icon/icon-arrow-sm-right'
import { cn } from '@/utils/cn'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Program Title : Fitness',
  description: 'Your slogan here',
}

const ClassDetail = () => {
  return (
    <section>
      <div className='bg-class-info bg-cover bg-no-repeat'>
        <div className='container flex min-h-[400px] flex-col items-center justify-center gap-2 md:min-h-[500px]'>
          <h3
            className={cn(
              squadaOne.className,
              'text-center text-3xl text-white md:text-5xl',
            )}
          >
            Personal Program Title
          </h3>
          <p className={cn(squadaOne.className, 'text-xl text-white')}>
            Show your strength to build your strength
          </p>
        </div>
      </div>

      <div className='container flex flex-col items-stretch justify-evenly gap-4 px-16 py-8 pt-16 md:-translate-y-1/2 md:flex-row md:px-0 md:py-0'>
        <div className='flex flex-col justify-evenly rounded-xl bg-white p-4 px-8 text-center shadow-md'>
          <Image src={intensity} className='mx-auto mb-4 h-12 w-12' alt='' />
          <p
            className={cn(
              poppins.className,
              'font-thin uppercase text-[#A0A0A0]',
            )}
          >
            Intensity
          </p>
          <p
            className={cn(
              poppins.className,
              'mt-1 text-xl font-bold text-[#A0A0A0] md:text-2xl',
            )}
          >
            Medium
          </p>
        </div>

        <div className='flex flex-col justify-evenly rounded-xl bg-white p-4 px-8 text-center shadow-md'>
          <Image src={duration} className='mx-auto mb-4 h-12 w-12' alt='' />
          <p
            className={cn(
              poppins.className,
              'font-thin uppercase text-[#A0A0A0]',
            )}
          >
            Class Duration
          </p>
          <p
            className={cn(
              poppins.className,
              'mt-1 text-xl font-bold text-[#A0A0A0] md:text-2xl',
            )}
          >
            45 Mins
          </p>
        </div>

        <div className='flex flex-col justify-evenly rounded-xl bg-white p-4 px-8 text-center shadow-md'>
          <Image src={human} className='mx-auto mb-4 h-12 w-12' alt='' />
          <p
            className={cn(
              poppins.className,
              'font-thin uppercase text-[#A0A0A0]',
            )}
          >
            Suitable for
          </p>
          <p
            className={cn(
              poppins.className,
              'mt-1 text-xl font-bold text-[#A0A0A0] md:text-2xl',
            )}
          >
            Moderate
          </p>
        </div>

        <div className='flex flex-col justify-evenly rounded-xl bg-white p-4 px-8 text-center shadow-md'>
          <Image src={trainer} className='mx-auto mb-4 h-12 w-12' alt='' />
          <p
            className={cn(
              poppins.className,
              'font-thin uppercase text-[#A0A0A0]',
            )}
          >
            Fitness Type
          </p>
          <p
            className={cn(
              poppins.className,
              'mt-1 text-xl font-bold text-[#A0A0A0] md:text-2xl',
            )}
          >
            Personal <br /> Training
          </p>
        </div>
      </div>

      <div className='container flex flex-col md:-translate-y-14 md:flex-row'>
        <div className='flex flex-1 items-center justify-center'>
          <h3
            className={cn(
              squadaOne.className,
              'text-center text-3xl md:text-5xl',
            )}
          >
            Class Detail
          </h3>
        </div>
        <div className='py-4 md:w-[60%] md:py-6'>
          <p
            className={cn(
              poppins.className,
              'text-justify text-sm md:text-base',
            )}
          >
            It is imperative that everyone maximises the time they spend
            exercising to help guarantee optimal results from the commitment put
            into achieving each calculated goal. In order for this to be
            effectively accomplished every training session has to present a
            measurable, progressive physical challenge in respect of the
            undertaken cardiovascular or resistance-based exercises. Twinned
            with completing relatively unchallenging sessions most also fail in
            their fitness attempts by not adhering to a weekly, monthly or even
            quarterly training structure in regards to exercise selection and
            programme length. Unsurprisingly most who fall into this category
            are also more likely to overlook the importance of regularly
            monitoring their bodies adaptation to training, in respect of
            performance results and physical changes.
          </p>
          <div
            className={cn(
              'mt-4 grid grid-cols-2 text-sm md:mr-12 md:text-base',
            )}
          >
            <div className='flex items-center gap-4 py-2'>
              <IconArrowSmRight className='h-4 w-4 text-blue-500' />{' '}
              <span className='text-[#5A5C5E]'>15 mins warm up</span>
            </div>
            <div className='flex items-center gap-4 py-2'>
              <IconArrowSmRight className='h-4 w-4 text-blue-500' />{' '}
              <span className='text-[#5A5C5E]'>20 mins cardio</span>
            </div>
            <div className='flex items-center gap-4 py-2'>
              <IconArrowSmRight className='h-4 w-4 text-blue-500' />{' '}
              <span className='text-[#5A5C5E]'>20 mins core focus</span>
            </div>
            <div className='flex items-center gap-4 py-2'>
              <IconArrowSmRight className='h-4 w-4 text-blue-500' />{' '}
              <span className='text-[#5A5C5E]'>15 mins warm up</span>
            </div>
            <div className='flex items-center gap-4 py-2'>
              <IconArrowSmRight className='h-4 w-4 text-blue-500' />{' '}
              <span className='text-[#5A5C5E]'>20 mins cardio</span>
            </div>
            <div className='flex items-center gap-4 py-2'>
              <IconArrowSmRight className='h-4 w-4 text-blue-500' />{' '}
              <span className='text-[#5A5C5E]'>20 mins core focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassDetail
