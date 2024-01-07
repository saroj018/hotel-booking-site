
import {twMerge} from 'tailwind-merge'

const Input = ({type='text',className,...props}) => {
  return (
    <input type={type} className={twMerge('py-3 outline-none',className)} {...props} />
  )
}

export default Input