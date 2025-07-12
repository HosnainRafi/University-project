import {
  IAcademicSemesterCode,
  IAcademicSemesterName,
  IMonths,
} from "./academicSemester.interface";

export const months: IMonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const AcademicSemesterName: IAcademicSemesterName[] = [
  "Autumn",
  "Summer",
  "Fall",
];
export const AcademicSemesterCode: IAcademicSemesterCode[] = ["01", "02", "03"];

type IAcademicSEmesterNameCodeMapper = {
  [key: string]: string;
};
export const academicSEmesterNameCodeMapper: IAcademicSEmesterNameCodeMapper = {
  Autumn: "01",
  Summer: "02",
  Fall: "03",
};
