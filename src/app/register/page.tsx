import MemberApplicationForm from '@/components/member-application-form'

const Register = () => {
  return (
    <div className='bg-register'>
      <div className='container py-16 md:py-24'>
        <MemberApplicationForm isCreate />
      </div>
    </div>
  )
}

export default Register
