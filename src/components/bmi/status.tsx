import { squadaOne } from '@/app/layout'
import { cn } from '@/utils/cn'

const BmiStatus = () => {
  return (
    <div
      className={cn(
        squadaOne.className,
        'flex flex-col justify-between rounded-2xl bg-black px-10 py-16 text-white',
      )}
    >
      <div className='flex items-center justify-center gap-8 text-center'>
        <div className='flex flex-1 flex-col space-y-6 text-xl'>
          <h4 className='text-2xl text-primary'>BMI</h4>
          <p>Below 18.5</p>
          <p>18.5 - 24.9</p>
          <p>25.0 - 29.9</p>
          <p>30.0 and above</p>
        </div>
        <div className='flex flex-1 flex-col space-y-6 text-xl'>
          <h4 className='text-2xl text-primary'>Weight Status</h4>
          <p>Underweight</p>
          <p>Healthy</p>
          <p>Overweight</p>
          <p>Obese</p>
        </div>
      </div>
      <p className='text-center text-xl'>
        BMR Metabolic Rate / BMI Body Mass Index
      </p>
    </div>
  )
}

export default BmiStatus
