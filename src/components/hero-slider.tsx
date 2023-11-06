'use client'

import { roboto, squadaOne } from '@/app/layout'
import { cn } from '@/utils/cn'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import ActionBtn from './ui/action-btn'
import gymMan from '@/assets/hero-gym-man.png'
import gymWoman from '@/assets/hero-gym-woman.png'
import arrows from '@/assets/hero-arrow-fleet.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSlider = () => {
  return (
    <Swiper navigation modules={[Navigation]} autoplay className='bg-black'>
      <SwiperSlide className='overflow-hidden'>
        <div
          className={cn(
            squadaOne.className,
            'relative bg-hero bg-cover bg-no-repeat text-white',
          )}
        >
          <div className='container relative z-10 py-24 md:py-44'>
            <h2 className='text-5xl text-primary'>Body transformation</h2>
            <h2 className='text-5xl'>It is your life changing!</h2>

            <p className={cn(roboto.className, 'my-12 max-w-xl leading-6')}>
              အားလုံးသိကြတဲ့အတိုင်း Functional တို့၊ Movement တို့ဆိုတာ ဒီ
              Lifestyle အပြောင်းအလဲ Body Transformation ရဲ့
              အစိတ်အပိုင်းလေးတစ်ခုဖြစ်တယ်ဆိုတာ အားလုံးအသိပါ။
              တစ်မျိုးသားလုံးကျန်းမာကြံ့ခိုင်စေဖို့ Fit Myanmar Project
              ကိုစတင်ခဲ့တယ်။ အားလုံး Fit ဖြစ်ဖို့အတွက် Lifestyle အရေးကြီးပါတယ်။
              ဒီ Lifestyle မှန်မမှန် ခန္ဓာကိုယ်ဝခြင်းနဲ့ကြည့်နိုင်တယ်။ ဒါကြောင့်
              Lifestyle ပြင်ပြီး မှန်ကန်တဲ့ အပြောင်းအလဲလုပ်ဖို့လိုတယ်။
            </p>

            <ActionBtn text='Start Now' />
          </div>
          <motion.div
            className='absolute bottom-0 right-0 top-0 z-0 w-[38rem]'
            initial={{ transform: 'translateX(100%)' }}
            animate={{ transform: 'translateX(0)' }}
            transition={{ duration: 1.5 }}
          >
            <Image alt='' src={gymMan} />
          </motion.div>
          <motion.div
            className='absolute bottom-20 left-0 h-60'
            initial={{ transform: 'translateX(-100%)' }}
            animate={{ transform: 'translateX(-30%)' }}
            transition={{ duration: 1.5 }}
          >
            <Image alt='' src={arrows} className='' />
          </motion.div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='overflow-hidden'>
        <div
          className={cn(
            squadaOne.className,
            'relative bg-hero bg-cover bg-no-repeat text-white',
          )}
        >
          <div className='container relative z-10 py-24 md:py-44'>
            <h2 className='text-5xl text-primary'>Body transformation</h2>
            <h2 className='text-5xl'>It is your life changing!</h2>

            <p className={cn(roboto.className, 'my-12 max-w-xl leading-8')}>
              အားလုံးသိကြတဲ့အတိုင်း Functional တို့၊ Movement တို့ဆိုတာ ဒီ
              Lifestyle အပြောင်းအလဲ Body Transformation ရဲ့
              အစိတ်အပိုင်းလေးတစ်ခုဖြစ်တယ်ဆိုတာ အားလုံးအသိပါ။
              တစ်မျိုးသားလုံးကျန်းမာကြံ့ခိုင်စေဖို့ Fit Myanmar Project
              ကိုစတင်ခဲ့တယ်။ အားလုံး Fit ဖြစ်ဖို့အတွက် Lifestyle အရေးကြီးပါတယ်။
              ဒီ Lifestyle မှန်မမှန် ခန္ဓာကိုယ်ဝခြင်းနဲ့ကြည့်နိုင်တယ်။ ဒါကြောင့်
              Lifestyle ပြင်ပြီး မှန်ကန်တဲ့ အပြောင်းအလဲလုပ်ဖို့လိုတယ်။
            </p>

            <ActionBtn text='Start Now' />
          </div>
          <motion.div
            className='absolute bottom-0 right-0 top-0 z-0 w-[38rem]'
            initial={{ transform: 'translateX(100%)' }}
            animate={{ transform: 'translateX(0)' }}
            transition={{ duration: 1.5 }}
          >
            <Image alt='' src={gymWoman} />
          </motion.div>
          <motion.div
            className='absolute bottom-20 left-0 h-60'
            initial={{ transform: 'translateX(-100%)' }}
            animate={{ transform: 'translateX(-30%)' }}
            transition={{ duration: 1.5 }}
          >
            <Image alt='' src={arrows} className='' />
          </motion.div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroSlider
