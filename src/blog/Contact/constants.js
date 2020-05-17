const lang = localStorage.getItem("lang");
let isEng;
lang === "ur" ? (isEng = false) : (isEng = true);
export const TITLE = isEng ? "Drop Us A Message" : "ہمیں آگاہ کریں";
export const NAME = isEng ? "Name" : "نام";
export const EMAIL = isEng ? "Email Address" : "ای میل اڈریس";
export const MSG = isEng ? "Write us a message" : "ہمیں آگاہ کریں";
export const BUTTON = isEng ? "Send" : "بھیج دیجیے";

export const errName = isEng ? "Please provide your name" : "برائے مہربانی اپنا نام مہیا کریں";
export const errEMAIL = isEng ? "Pleae provide your email adress" : "براہ کرم اپنا ای میل ایڈریس فراہم کریں";
export const errMSG = isEng ? "Pleae enter message" : "برائے مہربانی پیغام داخل کریں";
export const errSUCCESS = isEng ? "Your Message Successfully Sent" : "آپ کا پیغام کامیابی کے ساتھ بھیجا گیا";




