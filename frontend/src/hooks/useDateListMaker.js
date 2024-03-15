import dayjs from "dayjs"

export const useDateListMaker=(firstDate,lastDate)=>{
    let startingDate = firstDate
        let endingDate = lastDate
        let dates = []

        while (dates[dates.length - 1] != dayjs(endingDate).format('YYYY-MM-DD')) {
            dates.push(dayjs(startingDate).format('YYYY-MM-DD'))
            startingDate = dayjs(startingDate).add(1, 'd').format('YYYY-MM-DD')
        }
        return dates
}