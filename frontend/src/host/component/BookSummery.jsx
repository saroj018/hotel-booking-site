import dayjs from 'dayjs';
import React from 'react'

const ControlBox = ({ title, value }) => {
  return <div className='border-2 p-4 rounded-md my-5'>
      <h1 className='text-2xl font-bold mb-3'>{title}</h1>
      <p>{value}</p>
  </div>
}

const BookSummery = ({hotelInfo}) => {
  return (
    <div>
        <ControlBox  title={'Booked By:'} value={hotelInfo?.[0]?.reservedBy?.fullname}/>
        <ControlBox title={'CheckIn:'} value={hotelInfo?.[0]?.checkIn}/>
        <ControlBox title={'CheckOut:'} value={hotelInfo?.[0]?.checkOut}/>
        <ControlBox title={'Total Nights:'} value={dayjs(hotelInfo?.[0]?.checkOut).diff(dayjs(hotelInfo?.[0]?.checkIn),'day')}/>
        <ControlBox title={'Guest'} value={`${hotelInfo?.[0]?.Adults || 0} Adults ${hotelInfo?.[0]?.Children || 0} Children ${hotelInfo?.[0]?.Infants || 0} Infants`}/>
        <ControlBox title={'Price:'} value={`${hotelInfo?.[0]?.hotel?.price?.adults || 0} (Adults) ${hotelInfo?.[0]?.hotel?.price?.childrens || 0} (Childrens) ${hotelInfo?.[0]?.hotel?.price?.infants || 0} (Infants)`}/>
        <ControlBox title={'Discount:'} value={hotelInfo?.[0]?.hotel?.discount ||0+'%'}/>
        <ControlBox title={'Total Guest:'} value={hotelInfo?.[0]?.Adults || 0 +hotelInfo?.[0]?.Children || 0 +hotelInfo?.[0]?.Infants || 0}/>
    </div>
  )
}

export default BookSummery