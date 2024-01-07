import Button from '../../component/common/Button'
import Footer from '../bar/Footer'
import { Link } from 'react-router-dom'

const AddLocation = () => {
  return (
    <>
    <div className='flex justify-between items-center flex-col gap-10'>
        <h1 className='text-3xl font-bold text-center'>Where your place located?</h1>
        <Button>Get Location</Button>
    </div>
    <Link to={'/host/aboutroom'}><Footer/></Link>
    </>
  )
}

export default AddLocation