import { robotoCondensed } from '@/app/layout'
import { cn } from '@/utils/cn'
import IconArrowRight from '../icon/icon-arrow-right'

interface Props {
  text: string
  className?: string
}
const ActionBtn = ({ text, className }: Props) => {
  return (
    <button
      className={cn(
        robotoCondensed.className,
        'group flex items-center bg-primary text-black transition-all duration-500 hover:bg-black hover:text-primary',
        className,
      )}
    >
      <span className='relative px-6 py-3 font-bold'>
        <div className='absolute bottom-0 left-[100%] top-0 w-[3px] bg-white transition-all duration-700 group-hover:left-0 group-hover:w-[6px] group-hover:bg-primary'></div>
        {text}
      </span>
      <span className='px-2'>
        <IconArrowRight />
      </span>
    </button>
  )
}

export default ActionBtn
