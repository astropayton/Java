const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};
// const timmypriceperrefill = 25;
// const timmyrefill = 3;
// const timmycoupon = 10;

const timmytotal = (timmyrefill, timmypriceperrefill , timmycoupon) => timmyrefill * timmypriceperrefill - timmycoupon;

console.log('timmy your total is', timmytotal(25, 3, 10));

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}
// grabing the total of sarah and then taking 25% off

const sarahtotal = (sarahrefills, sarahpriceperrefill, sarahsub) => sarahrefills * sarahpriceperrefill - sarahsub 

console.log('sarah your total is', sarahtotal(50, 1, 12.5,));


const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}
// i will * 5 and 30 then take the 25% off and the take the coupon off

const rockytotal = (rockyrefills, rockypriceperrefill, rockysub, rockycoupon) => rockyrefills * rockypriceperrefill - rockysub - rockycoupon

console.log('rocky your total is', rockytotal(5, 30, 37.5, 10))









