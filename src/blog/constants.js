const lang = localStorage.getItem("lang");
let isEng;
lang === "ur" ? (isEng = false) : (isEng = true);
export const ID1 = "1";
export const ID2 = "2";
export const ID3 = "3";

export const GALLERY = isEng
  ? "Gallery"
  : "تصاویر";
export const EMS = isEng
  ? "Earthquake Management System"
  : "زلزلہ مینجمنٹ سسٹم";
export const UNDER_DEVELOPMENT = isEng ? "Under Development" : "زیر تعمیر";

export const HOME = isEng ? "Home" : "گھر";
export const CONTACT = isEng ? "Contact Us" : "رابطہ کرنے کے لئے";

export const EARTHQUAKE_ALERT = isEng ? "EARTHQUAKE ALERT" : "انتباہ زلزلے سے";

export const HEAD_TITLE = isEng
  ? "Earthquake Safety Tips and Precautions"
  : "زلزلہ سے متعلق حفاظتی تدابیر اور احتیاطی تدابیر";

export const HEAD_SUB_TITLE = isEng
  ? "Earthquake Safety Tips and Precautions"
  : "زلزلے سے پہلے ، دوران اور بعد میں مجھے کیا کرنا چاہئے؟";

export const p1_TITLE = isEng
  ? "Simple Hacks for an Earthquake"
  : "زلزلے کے لئے آسان ہیکس";
export const p1_DATE = isEng ? "Jan 10" : "10 جنوری";
export const p1_DES = isEng
  ? "Carry cash: In an earthquake, ATMs and credit card systems can go offline. Hence , it is advisable to keep some spare cash handy at all times."
  : "نقد لے جانے والے: زلزلے میں ، اے ٹی ایم اور کریڈٹ کارڈ سسٹم آف لائن جاسکتے ہیں۔ لہذا ، یہ مشورہ دیا جاتا ہے کہ ہر وقت کچھ نہ کچھ اضافی نقد رقم کام میں رکھیں۔";

export const p2_TITLE = isEng ? "Prepare Your Home" : "اپنا گھر تیار کرو";
export const p2_DATE = isEng ? "Dec 14" : "14 دسمبر";
export const p2_DES = isEng
  ? "Getting your house ready for an earthquake can save you from dealing with a lot of damage should a large earthquake hit. To do so"
  : "زلزلے کے لئے مکان کو تیار کرنا آپ کو بہت زیادہ نقصان سے بچنے سے بچاسکتا ہے جب کسی بڑے زلزلے کی زد میں آ.۔ ایسا کرنے کے لئے";

export const p3_TITLE = isEng
  ? "Things to Keep in Mind"
  : "ذہن میں رکھنے کے لئے چیزیں";
export const p3_DATE = isEng ? "Nov 12" : "12 نومبر";
export const p3_DES = isEng
  ? "Ducking under a table or desk is the quickest way to protect yourself. If you’re in a high rise building, and away from a table or desk, move against a wall. Don’t panic when the sprinkler or alarm systems turn on due to malfunction, and DO NOT use the elevators."
  : "اپنے آپ کو بچانے کے لئے ایک میز یا ڈیسک کے نیچے بکواس کرنا تیز ترین طریقہ ہے۔ اگر آپ کسی اونچی عمارت میں ہیں ، اور کسی میز یا ڈیسک سے دور ہیں تو ، کسی دیوار کے خلاف چلے جائیں۔ جب خرابی کی وجہ سے چھڑکنے والے یا الارم سسٹم آن ہوجائیں تو گھبرائیں نہیں ، اور لفٹوں کا استعمال نہ کریں۔";
