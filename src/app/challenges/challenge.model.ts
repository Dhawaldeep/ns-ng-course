import { Day, DayStatus } from "./day.model";

export class Challenge{
    constructor(
        public title: string,
        public description: string,
        public year: number,
        public month: number,
        private _days: Day[] = []
    ){
        if(_days.length>0){
            return
        }
        const noOfDays = new Date(year, month+1, 0).getDate();

        for (let i = 1; i < noOfDays+1; i++) {
            const date = new Date(year, month, i)
            const dayInWeek = new Date(year, month, i).getDay();
            this._days.push({dayInMonth: i, dayInWeek: dayInWeek, date: date, status: DayStatus.Open})
        }

        console.log(this._days);
    }

    get currentDay(){
        return this._days.find(d=> d.dayInMonth === new Date().getDate())
    }

    get days(){
        return [...this._days]
    }
}
