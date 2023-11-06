import { squadaOne } from '@/app/layout'
import { cn } from '@/utils/cn'
import IconExp1 from './icon/icon-exp1'
import IconExp2 from './icon/icon-exp2'
import IconExp3 from './icon/icon-exp3'
import IconExp4 from './icon/icon-exp4'

const Impressions = () => {
  return (
    <section className='bg-impressions bg-cover bg-no-repeat'>
      <div className={cn(squadaOne.className, 'container py-20 text-white')}>
        <div className='flex flex-col items-center justify-around gap-20 md:flex-row'>
          <div className='flex flex-col items-center gap-2'>
            <IconExp1 className='h-16 w-16' />
            <h4 className='text-5xl text-primary'>8</h4>
            <p className='text-2xl uppercase'>Years of experience</p>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <IconExp2 className='h-16 w-16' />
            <h4 className='text-5xl text-primary'>16</h4>
            <p className='text-2xl uppercase'>Skilled trainers</p>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <IconExp3 className='h-16 w-16' />
            <h4 className='text-5xl text-primary'>64K</h4>
            <p className='text-2xl uppercase'>Calories burned</p>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <IconExp4 className='h-16 w-16' />
            <h4 className='text-5xl text-primary'>256</h4>
            <p className='text-2xl uppercase'>Happpy Members</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impressions
