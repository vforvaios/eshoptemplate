const cart = ({ cartReducer }) => cartReducer?.cart;
const availableCoupons = ({ cartReducer }) => cartReducer?.availableCoupons;
const couponUsed = ({ cartReducer }) => cartReducer?.couponUsed;
const couponDiscount = ({ cartReducer }) => cartReducer?.couponDiscount;
const couponEmail = ({ cartReducer }) => cartReducer?.couponEmail;

export { cart, availableCoupons, couponUsed, couponDiscount, couponEmail };
