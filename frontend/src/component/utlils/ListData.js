import { useParams } from "react-router-dom";
import { useGetFetch } from "../../hooks/fetch-data";
import { useEffect, useState } from "react";
import dayjs from "dayjs";


export const getListData = (value, reserveDate) => {
 
if(reserveDate.includes(dayjs(value).format('YYYY-MM-DD'))){
  return [{type:'success',content:'Booked'}]
}
};
