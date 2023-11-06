import { SVGProps } from 'react'

const IconPlayCourse = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <circle cx='12' cy='12' r='12' fill='white' />
      <path d='M18.666 12L8.66602 17.7735V6.22654L18.666 12Z' fill='black' />
    </svg>
  )
}

export default IconPlayCourse
