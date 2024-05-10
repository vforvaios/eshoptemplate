const cart = ({ cartReducer }) => cartReducer?.cart;
const availableCoupons = ({ cartReducer }) => cartReducer?.availableCoupons;
const couponUsed = ({ cartReducer }) => cartReducer?.couponUsed;

export { cart, availableCoupons, couponUsed };
