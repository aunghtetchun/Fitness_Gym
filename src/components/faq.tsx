'use client'

import { squadaOne } from '@/app/layout'
import { cn } from '@/utils/cn'
import Underline from './underline'
import { useRef, useState } from 'react'
import IconFaqClose from './icon/icon-faq-close'
import IconFaqOpen from './icon/icon-faq-open'

const Faq = () => {
  const data = [
    {
      title: 'Fitness Website မှာ ဘယ်လိုသင်တန်းမျိုး တွေတက်လို့ရသလဲ။',
      text: 'Argazar မှာ Transformational Fitness Education, Lean Fit စသည်ဖြင့် Program တွေများစွာဖန်တီးထားပါတယ်။ ဒါ့အပြင် Fitness နဲ့ပတ်သက်ပြီး ကိုယ်တိုင်သူများကို Train နိုင်တဲ့ Trainer ဖြစ်ချင်တဲ့သူတွေအတွက် ကျွန်တော်ရဲ့ ဆယ်စုနှစ်ကျော်ကြာ Fitness Industry အတွေ့အကြုံတွေကိုအခြေခံပြီး Trainer ပေါင်း 2567 ယောက်မွေးထုတ်ထားတဲ့ MFTA( Myanmar Fitness Trainer Academy) ကိုလည်း Argazar ကနေ လေ့လာလို့ရမယ်။ ဒါတင်မကဘဲ မြန်မာနိုင်ငံမှာ မရှိသေးတဲ့ Fitness Business လုပ်ချင်သူတွေကို Coaching ပေးမဲ့ Wealthy FitPro program ကိုလည်း Argazar မှာ လေ့လာနိုင်တယ်။',
    },
    {
      title: 'Fitness Website မှာ ဘယ်လိုသင်တန်းမျိုး တွေတက်လို့ရသလဲ။',
      text: 'Argazar မှာ Transformational Fitness Education, Lean Fit စသည်ဖြင့် Program တွေများစွာဖန်တီးထားပါတယ်။ ဒါ့အပြင် Fitness နဲ့ပတ်သက်ပြီး ကိုယ်တိုင်သူများကို Train နိုင်တဲ့ Trainer ဖြစ်ချင်တဲ့သူတွေအတွက် ကျွန်တော်ရဲ့ ဆယ်စုနှစ်ကျော်ကြာ Fitness Industry အတွေ့အကြုံတွေကိုအခြေခံပြီး Trainer ပေါင်း 2567 ယောက်မွေးထုတ်ထားတဲ့ MFTA( Myanmar Fitness Trainer Academy) ကိုလည်း Argazar ကနေ လေ့လာလို့ရမယ်။ ဒါတင်မကဘဲ မြန်မာနိုင်ငံမှာ မရှိသေးတဲ့ Fitness Business လုပ်ချင်သူတွေကို Coaching ပေးမဲ့ Wealthy FitPro program ကိုလည်း Argazar မှာ လေ့လာနိုင်တယ်။',
    },
    {
      title: 'Fitness Website မှာ ဘယ်လိုသင်တန်းမျိုး တွေတက်လို့ရသလဲ။',
      text: 'Argazar မှာ Transformational Fitness Education, Lean Fit စသည်ဖြင့် Program တွေများစွာဖန်တီးထားပါတယ်။ ဒါ့အပြင် Fitness နဲ့ပတ်သက်ပြီး ကိုယ်တိုင်သူများကို Train နိုင်တဲ့ Trainer ဖြစ်ချင်တဲ့သူတွေအတွက် ကျွန်တော်ရဲ့ ဆယ်စုနှစ်ကျော်ကြာ Fitness Industry အတွေ့အကြုံတွေကိုအခြေခံပြီး Trainer ပေါင်း 2567 ယောက်မွေးထုတ်ထားတဲ့ MFTA( Myanmar Fitness Trainer Academy) ကိုလည်း Argazar ကနေ လေ့လာလို့ရမယ်။ ဒါတင်မကဘဲ မြန်မာနိုင်ငံမှာ မရှိသေးတဲ့ Fitness Business လုပ်ချင်သူတွေကို Coaching ပေးမဲ့ Wealthy FitPro program ကိုလည်း Argazar မှာ လေ့လာနိုင်တယ်။',
    },
    {
      title: 'Fitness Website မှာ ဘယ်လိုသင်တန်းမျိုး တွေတက်လို့ရသလဲ။',
      text: 'Argazar မှာ Transformational Fitness Education, Lean Fit စသည်ဖြင့် Program တွေများစွာဖန်တီးထားပါတယ်။ ဒါ့အပြင် Fitness နဲ့ပတ်သက်ပြီး ကိုယ်တိုင်သူများကို Train နိုင်တဲ့ Trainer ဖြစ်ချင်တဲ့သူတွေအတွက် ကျွန်တော်ရဲ့ ဆယ်စုနှစ်ကျော်ကြာ Fitness Industry အတွေ့အကြုံတွေကိုအခြေခံပြီး Trainer ပေါင်း 2567 ယောက်မွေးထုတ်ထားတဲ့ MFTA( Myanmar Fitness Trainer Academy) ကိုလည်း Argazar ကနေ လေ့လာလို့ရမယ်။ ဒါတင်မကဘဲ မြန်မာနိုင်ငံမှာ မရှိသေးတဲ့ Fitness Business လုပ်ချင်သူတွေကို Coaching ပေးမဲ့ Wealthy FitPro program ကိုလည်း Argazar မှာ လေ့လာနိုင်တယ်။',
    },
    {
      title: 'Fitness Website မှာ ဘယ်လိုသင်တန်းမျိုး တွေတက်လို့ရသလဲ။',
      text: 'Argazar မှာ Transformational Fitness Education, Lean Fit စသည်ဖြင့် Program တွေများစွာဖန်တီးထားပါတယ်။ ဒါ့အပြင် Fitness နဲ့ပတ်သက်ပြီး ကိုယ်တိုင်သူများကို Train နိုင်တဲ့ Trainer ဖြစ်ချင်တဲ့သူတွေအတွက် ကျွန်တော်ရဲ့ ဆယ်စုနှစ်ကျော်ကြာ Fitness Industry အတွေ့အကြုံတွေကိုအခြေခံပြီး Trainer ပေါင်း 2567 ယောက်မွေးထုတ်ထားတဲ့ MFTA( Myanmar Fitness Trainer Academy) ကိုလည်း Argazar ကနေ လေ့လာလို့ရမယ်။ ဒါတင်မကဘဲ မြန်မာနိုင်ငံမှာ မရှိသေးတဲ့ Fitness Business လုပ်ချင်သူတွေကို Coaching ပေးမဲ့ Wealthy FitPro program ကိုလည်း Argazar မှာ လေ့လာနိုင်တယ်။',
    },
    {
      title: 'Fitness Website မှာ ဘယ်လိုသင်တန်းမျိုး တွေတက်လို့ရသလဲ။',
      text: 'Argazar မှာ Transformational Fitness Education, Lean Fit စသည်ဖြင့် Program တွေများစွာဖန်တီးထားပါတယ်။ ဒါ့အပြင် Fitness နဲ့ပတ်သက်ပြီး ကိုယ်တိုင်သူများကို Train နိုင်တဲ့ Trainer ဖြစ်ချင်တဲ့သူတွေအတွက် ကျွန်တော်ရဲ့ ဆယ်စုနှစ်ကျော်ကြာ Fitness Industry အတွေ့အကြုံတွေကိုအခြေခံပြီး Trainer ပေါင်း 2567 ယောက်မွေးထုတ်ထားတဲ့ MFTA( Myanmar Fitness Trainer Academy) ကိုလည်း Argazar ကနေ လေ့လာလို့ရမယ်။ ဒါတင်မကဘဲ မြန်မာနိုင်ငံမှာ မရှိသေးတဲ့ Fitness Business လုပ်ချင်သူတွေကို Coaching ပေးမဲ့ Wealthy FitPro program ကိုလည်း Argazar မှာ လေ့လာနိုင်တယ်။',
    },
  ]

  return (
    <section>
      <div className='container py-20'>
        <div className='mx-auto w-fit'>
          <div className='mx-auto max-w-md'>
            <h3
              className={cn(
                squadaOne.className,
                'text-center text-4xl text-black',
              )}
            >
              Frequently Asked Questions
            </h3>

            <Underline />
          </div>

          <div className='grid grid-cols-1 gap-x-6 md:grid-cols-2'>
            {data.map((faq, idx) => (
              <FaqItem key={idx} title={faq.title} text={faq.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq

const FaqItem = ({ title, text }: { title: string; text: string }) => {
  const [open, setOpen] = useState(false)
  const elRef = useRef(null)

  return (
    <div className='my-2'>
      <div
        onClick={() => {
          setOpen(!open)
        }}
        className='flex cursor-pointer select-none items-center justify-between py-2 text-base'
      >
        <span className='font-medium'>
          {title} <span className={cn(squadaOne.className, '')}>?</span>{' '}
        </span>
        {open ? (
          <IconFaqClose className='h-8 w-8' />
        ) : (
          <IconFaqOpen className='h-8 w-8' />
        )}
      </div>
      <div
        ref={elRef}
        className='overflow-hidden text-justify text-sm leading-6 transition-[height] duration-300'
        style={{
          height: open ? `${(elRef.current as any).scrollHeight}px` : '0px',
        }}
      >
        {text}
      </div>
    </div>
  )
}
