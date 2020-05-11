const lang = localStorage.getItem("lang");
let isEng;
lang === "ur" ? (isEng = false) : (isEng = true);
export const TITLE = isEng ? "Drop Us A Message" : "ہمیں آگاہ کریں";
export const NAME = isEng ? "Name" : "نام";
export const EMAIL = isEng ? "Email Address" : "ای میل اڈریس";
export const MSG = isEng ? "Write us a message" : "ہمیں آگاہ کریں";
export const BUTTON = isEng ? "Send" : "بھیج دیجیے";
