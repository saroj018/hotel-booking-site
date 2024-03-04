import React from 'react';
import { DatePicker, Space } from 'antd';

const DateRange = () => {
  const { RangePicker } = DatePicker;

  const getDate=(datearr,date)=>{
  }
  return (

    <Space className='w-full my-3' direction="vertical" size={100}>
      <RangePicker onChange={getDate} popupStyle={{ fontSize: '18px' }} size='large' className='w-full text-3xl cursor-pointer outline-none' />
    </Space>
  );
}

export default DateRange;