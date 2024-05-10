const cart = ({ cartReducer }) => cartReducer?.cart;
const availableCoupons = ({ cartReducer }) => cartReducer?.availableCoupons;

export { cart, availableCoupons };
