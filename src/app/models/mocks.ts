import { IUser } from './user';

export const USER_DATA : IUser[] = [{
    firstName: "Bill",
    lastName: "Gates",
    dob: new Date("Dec 21, 1965"),
    income: 50000,
    isWorking: true,
    company: "Microsoft",
    image: "./assets/images/bill.jpg",
    vote: 120
},{
    firstName: "Steve",
    lastName: "Jobs",
    dob: new Date("Jan 2, 1965"),
    income: 0,
    isWorking: false,
    company: "Apple",
    image: "./assets/images/steve.png",
    vote: 180
},{
    firstName: "Tim B.",
    lastName: "Lee",
    dob: new Date("Aug 2, 1965"),
    income: 30000,
    isWorking: true,
    company: "World Wide Web",
    image: "./assets/images/tim.jpg",
    vote: 150
}]