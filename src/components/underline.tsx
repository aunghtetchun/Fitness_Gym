import { cn } from '@/utils/cn'

const Underline = ({ className }: { className?: string }) => {
  return (
    <div className={cn('mb-6 mt-4 h-[1px] bg-black', className)}>
      <div className='mx-auto h-[3px] w-1/3 bg-primary'></div>
    </div>
  )
}

export default Underline
