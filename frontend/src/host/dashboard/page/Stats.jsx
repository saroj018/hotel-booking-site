import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";
import { useGetFetch } from "../../../hooks/fetch-data";
import { nightCalculator } from "../../../component/utlils/nightCalculator";
const Stats = () => {
    const [info, setInfo] = useState([])


    const fetchApi = async () => {
        const result = await useGetFetch(`${import.meta.env.VITE_HOSTNAME}/api/reserve/chartinfo`)
        console.log(result);
        setInfo(result.details)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const labels = [];
    let date = dayjs()

    for (let i = 0; i < 30; i++) {
        labels.push(date.format('M-DD'))
        date = date.add(1, 'd')
    }

    let totalReserve = new Array(30).fill(0)
    let adults=new Array(30).fill(0)
    let childrens=new Array(30).fill(0)
    let infants=new Array(30).fill(0)
    let earning=new Array(30).fill(0)
    
    
    info?.forEach((ele, index) => {
        let date = dayjs(ele.checkIn).format('M-DD')
        labels.forEach((ele,index)=>{
            if(ele==date){
                totalReserve[index]+=1
            }
        })
    })
    info?.forEach((element, index) => {
        let date = dayjs(element.checkIn).format('M-DD')
        labels.forEach((ele,index)=>{
            if(ele==date){
                let hotel=element.hotel.price
               let totalNight=nightCalculator([element.checkIn,element.checkOut])
               console.log(totalNight);
               let totalPice=hotel.adults*totalNight+hotel.childrens*totalNight+hotel.infants*totalNight
               console.log(totalPice);
               earning[index]=totalPice
            }
        })
    })
    info?.forEach((element, index) => {
        let date = dayjs(element.checkIn).format('M-DD')
        labels.forEach((ele,index)=>{
            if(ele==date){
                adults[index]=element.Adults
                childrens[index]=element.Children
                infants[index]=element.Infants
            }
        })
    })
   


    const dataForPastTenDays = {
        labels: labels,
        datasets: [
            {
                label: " reserve",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: totalReserve,
            },
        ],
    };
    const dataForPastTenDaysWithGuests = {
        labels: labels,
        datasets: [
            {
                label: " adult",
                backgroundColor: "blue",
                borderColor: "blue",
                data:adults
            },
            {
                label: "children",
                backgroundColor: "green",
                borderColor: "green",
                data: childrens
            },
            {
                label: "infants",
                backgroundColor: "red",
                borderColor: "red",
                data: infants
            },
        ],
    };
    const totalEarning = {
        labels: labels,
        datasets: [
            {
                label: "earning",
                backgroundColor: "blue",
                borderColor: "blue",
                data: earning
            },
        ],
    };


    return (
        <>
            <div className="w-[80%] mx-auto">
                <h1 className="text-3xl font-bold my-3">Reserve upto {dayjs().add(30,'d').format('M-DD')}</h1>
                <Line data={dataForPastTenDays} />
            </div>
            <div className="w-[80%] mx-auto">
                <h1 className="text-3xl font-bold my-6">Reserve upto {dayjs().add(30,'d').format('M-DD')}</h1>
                <Line data={dataForPastTenDaysWithGuests} />
            </div>
            <div className="w-[80%] mx-auto">
                <h1 className="text-3xl font-bold my-6">Earning upto {dayjs().add(30,'d').format('M-DD')}</h1>
                <Line data={totalEarning} />
            </div>
        </>
    );
};
export default Stats;