import Image from 'next/image'
import React from 'react'
import blog1 from '@/assets/blog-1.jpg'
import blog2 from '@/assets/blog-2.jpg'
import blog3 from '@/assets/blog-3.jpg'
import { cn } from '@/utils/cn'
import { poppins, squadaOne } from '@/app/layout'
import Link from 'next/link'
import userimg from '@/assets/user.svg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Title : Fitness',
  description: 'Your slogan here',
}

const Blog = () => {
  return (
    <section>
      <div className='container flex flex-col gap-4 py-16 md:flex-row'>
        <div className='md:w-2/3'>
          <Image
            src={blog1}
            alt=''
            className='w-full overflow-hidden rounded-xl'
          />
        </div>
        <div className='rounded-xl bg-[#eee] p-4 md:w-1/3'>
          <h5
            className={cn(
              squadaOne.className,
              'py-3 text-center text-2xl md:py-4 md:text-3xl',
            )}
          >
            Recent Blog News
          </h5>

          <Link
            href={'/blogs/1'}
            className='group flex items-center gap-4 border-b border-b-gray-300 py-3'
          >
            <div className='relative h-20 w-20 shrink-0 overflow-hidden rounded-full'>
              <div className='absolute inset-0 z-20 bg-[#ffe71880] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
              <Image
                src={blog1}
                alt=''
                className='h-full w-full object-cover'
              />
            </div>
            <div className='flex flex-col'>
              <p className={cn(squadaOne.className, 'text-xl')}>
                Push Your Fitness Further With Facilities
              </p>
              <p className={cn(squadaOne.className, 'text-[#A7A7A7]')}>
                Sep-9-2023
              </p>
              <span
                className={cn(
                  poppins.className,
                  'line-clamp-2 text-sm text-[#727272]',
                )}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus asperiores odit cupiditate necessitatibus illum quia
                ex voluptate ut excepturi sed.
              </span>
            </div>
          </Link>

          <Link
            href={'/blogs/1'}
            className='group flex items-center gap-4 border-b border-b-gray-300 py-3'
          >
            <div className='relative h-20 w-20 shrink-0 overflow-hidden rounded-full'>
              <div className='absolute inset-0 z-20 bg-[#ffe71880] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
              <Image
                src={blog2}
                alt=''
                className='h-full w-full object-cover'
              />
            </div>
            <div className='flex flex-col'>
              <p className={cn(squadaOne.className, 'text-xl')}>
                How to keep your Body Healthy
              </p>
              <p className={cn(squadaOne.className, 'text-[#A7A7A7]')}>
                Sep-9-2023
              </p>
              <span
                className={cn(
                  poppins.className,
                  'line-clamp-2 text-sm text-[#727272]',
                )}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus asperiores odit cupiditate necessitatibus illum quia
                ex voluptate ut excepturi sed.
              </span>
            </div>
          </Link>

          <Link
            href={'/blogs/1'}
            className='group flex items-center gap-4 border-b border-b-gray-300 py-3'
          >
            <div className='relative h-20 w-20 shrink-0 overflow-hidden rounded-full'>
              <div className='absolute inset-0 z-20 bg-[#ffe71880] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
              <Image
                src={blog3}
                alt=''
                className='h-full w-full object-cover'
              />
            </div>
            <div className='flex flex-col'>
              <p className={cn(squadaOne.className, 'text-xl')}>
                Give your Fitness a Boost with our Gym
              </p>
              <p className={cn(squadaOne.className, 'text-[#A7A7A7]')}>
                Sep-9-2023
              </p>
              <span
                className={cn(
                  poppins.className,
                  'line-clamp-2 text-sm text-[#727272]',
                )}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus asperiores odit cupiditate necessitatibus illum quia
                ex voluptate ut excepturi sed.
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className='container pb-16'>
        <div className='md:w-2/3'>
          <h4 className={cn(squadaOne.className, 'text-3xl')}>
            Push Your Fitness Further With Facilities
          </h4>
          <div className='mt-2 flex gap-3 pt-4'>
            <div className='bg-[#D9D9D9] p-2'>
              <Image src={userimg} alt='' className='h-6 w-6' />
            </div>
            <div className='flex flex-col'>
              <p
                className={cn(squadaOne.className, 'text-base text-[#989494]')}
              >
                By Aung Myint Myat
              </p>
              <p className={cn(squadaOne.className, 'text-sm text-[#A7A7A7]')}>
                Sep-9-2023
              </p>
            </div>
          </div>
          <p className='py-4 leading-9'>
            Myanmar Fitness Trainer Academy သင်တန်းကျောင်း အနေနှင့် Certified
            Personal Trainer (CPT) သင်တန်းကို ဖွင့်လှစ်သင်ကြားခဲ့သည်မှာ
            ၂-နှစ်ကျော်ခန့် ရှိလာပြီဖြစ်သည့်နောက် မြန်မာဖစ်တနက်စ် နယ်ပယ်၏အဓိက
            လိုအပ်ချက်တစ်ခုဖြစ်နေသည့် Fitness Industry ၏အားနည်းချက်များစွာကို
            မြင်နေရသည့်အတွက် တစ်မျိုးသားလုံးကျန်းမာ ကြံ့ခိုင်ရေး အတွက် ဤ Fitness
            Nutrition Specialist-FNS ကိုထပ်မံဖွင့်လှစ် သင်ကြားရခြင်း ဖြစ်ပါသည်။
            Fitness Nutrition Specialist ဟုခေါ်ဆိုသောဤသင်ရိုးတွင်
            ပြိုင်ဖက်ကင်းသော၊ ဇီဝကမ္မ ရှု့ထောင့်မှနေ၍ အားကစားသမားများ အတွက်၎င်း၊
            ကြံ့ခိုင်ကျန်းမာလိုသူများအတွက်၎င်း၊ အာဟာရဗေဒကို
            အထူးပြုထည့်သွင်းထားပါသည်။ ဤသင်ရိုးတွင် စားသုံးသော အာဟာရများသည်
            အစာခြေစနစ် အတွင်းသို့ဝင်ရောက်သည်နှင့် တပြိုင်နက်
            ၎င်းတို့၏ဖြစ်စဉ်များနှင့် ခန္ဓာကိုယ်တွင်းရှိ ကလာပ်စည်း(ဆဲလ်)
            များအတွင်းသို့စွမ်းအင်မည်သို့ထောက်ပံ့ပေးသည်ကို အသေးစိတ်
            သင်ပြထားပါသည်။ Fitness Professionals များအတွက် ဤအာဟာရအပိုင်းသည်၊
            ခန္ဓာကိုယ်၏ ရှုပ်ထွေးသော လုပ်ဆောင်ချက်များ၊ ဇီဝကမ္မဖြစ်စဉ်များ၊
            အာဟာရဓါတ်များ၏ ဓါတ်ပြောင်းဖွဲ့စည်းခြင်းများ အကြောင်းနှင့်
            ပုံစံအမျိုးမျိုးသော လေ့ကျင့်ခန်း များအနေနှင့် လူ့ခန္ဓာကိုယ်၏
            ကျန်းမာရေး နှင့်၊ အားကစားစွမ်းရည်အပေါ်
            သက်ရောက်အကျိုးပြုနိုင်မှုများကို ခြုံငုံမိအောင် သင်ကြားပေးထား ပါသည်။
            သတိပြုမှတ်သားရမည့် အရေးပါသော အချက်တစ်ခုမှာ Sport Nutrition ကို
            Specialist ဖြစ်လောက်အောင် ကျွမ်းကျင်နေစေကာမူ မိမိသည် Dietitians
            မဟုတ်သည်ကိုတော့ ဂရုပြုပါ။ ဤသင်ရိုး၏ အာဟာရအပိုင်း သင်ကြားမှုများသည်၊
            Fitness Nutrition အတွက်သာဖြစ်ပီး ရောဂါကု သသည့် အပိုင်းနှင့်
            လုံးဝမသက်ဆိုင်သည်ကို ဂရုပြုစေချင်ပါသည်။ အာဟာရအပိုင်း
            သင်ကြားမှုများကို သရုပ်ခွဲကြည့်ရာတွင် ယေဘူယျအားဖြင့်
            အပြင်ပိုင်းနှင့် အတွင်း ပိုင်း၊ဟူ၍ နှစ်ပိုင်းပိုင်းခြားနိုင်ပါသည်။
            အပြင်ပိုင်းဆိုသည်မှာ Wholesome food လား၊ Junk Food လား၊ခွဲခြားခြင်း၊
            အဆိုပါအာဟာရများ၏ ရင်းမြစ်သည် Protein လား၊ Carbohydrate လား Fat လား
            ခွဲခြားခြင်းတို့ဖြစ်သည်။ အတွင်းပိုင်းဆိုသည်မှာ၊
            ဇီဝကမ္မရှု့ထောင့်မှနေ၍ မတူညီသော အာဟာရများကို မှီဝဲပြီးနောက်၊
            ခန္ဓာကိုယ်၏တုံ့ပြန်ပုံများ၊အဆိုပါ အာဟာရများ၏ အပြုသဘော ဆောင်သော
            သို့မဟုတ် အနှုတ်သဘောဆောင်သော တုံ့ပြန်မှုများသည် ခန္ဓာကိုယ်၏
            ကျန်းမာရေး နှင့် ကြံ့ခိုင်သန်စွမ်းမှုများအပေါ်
            မည်သို့လွှမ်းမိုးစေနိုင်သည်ကို သင်ကြားပေးသည့် ပညာရပ်ဖြစ် သည်။
            ကျွန်တော်တို့ရဲ့ဒီသင်ရိုးကတော့ Fitness Professionals များကို
            ရည်ရွယ်သည့်အတွက်၊ အတွင်း ပိုင်းရှု့ထောင့်မှနေ၍၊ လူသိနည်းသော
            သိရန်လိုအပ်သည့် အရေးပါသော၊ ခန္ဓာကိုယ်တွင်း အာဟာရ ဓါတ်များ၏ စွမ်းအင်
            ထောက်ပံ့ခြင်း အသုံးပြုခြင်းများ အကြောင်းကို သင်ကြားပေးမည်ဖြစ်ပါသည်။
            သို့မှသာ ကျွန်တော်တို့၏ Certified Specialist များသည်၊ မိမိတို့၏
            Clients များအတွက်၊ Lifestyle Changing အတွက်ရော Dietary Habits
            များကိုပါ ကောင်းမွန်ကျနစွာ ပြောင်းလဲပေးနိုင်မည်ဖြစ် သည်။
          </p>
        </div>
      </div>
    </section>
  )
}

export default Blog
