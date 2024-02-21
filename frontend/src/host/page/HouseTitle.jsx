import React from 'react'
import Input from '../../component/common/Input'
import Footer from '../bar/Footer'
import { Link } from 'react-router-dom'

const HouseTitle = () => {
  return (
    <>
    <div className='w-1/2 mx-auto'>
        <h1 className='text-center text-3xl my-4'>Now, let's give your house a title</h1>
        <p className='text-xl text-center'>Short titles work best. Have fun with it—you can always change it later.</p>
        <Input className={'border-2 border-neutral-800 w-full rounded-md my-5 px-4 text-xl'}/>
    </div>
    <Link to={'/host/homesummery'}><Footer/></Link>
    </>
  )
}

    return (
        <div className='w-1/2 mx-auto'>
            <h1 className='text-center text-3xl my-4'>Now, let's give your house a title</h1>
            <p className='text-xl text-center'>
                Short titles work best. Have fun with it—you can always change it later.
            </p>
            <Input
                value={title}
                onChange={changeHandler}
                className={'border-2 border-neutral-800 w-full rounded-md my-5 px-4 text-xl'}
            />
            <Button onClick={clickHandler}>click</Button>
        </div>
    );
};

export default HouseTitle;
