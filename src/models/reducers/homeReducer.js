/* eslint-disable max-len */
import { createReducer } from '@reduxjs/toolkit';
import { setHomePageData } from 'models/actions/homeActions';

const initialState = {
  homeSlider: [],
  offers: {
    results: [
      {
        productId: 1,
        productTitle: 'Product title 1',
        productDescription:
          'Praesent euismod ut lorem ut elementum. In maximus, sem sed interdum imperdiet, nisi eros vehicula nunc, dignissim volutpat nulla dui vitae lectus. Sed lorem elit, scelerisque sit amet augue ut, interdum gravida tellus. Nulla eu efficitur enim, a convallis libero. Fusce sed orci nec nisl rhoncus mattis vel vel augue',
        productSubHeader: 'Sub Header 1',
        stock: 5,
        imgHref: 'https://placedog.net/400',
        price: 20,
        initialPrice: 30,
        code: '24e387bfsd',
      },
      {
        productId: 2,
        productTitle: 'Product title 2',
        productDescription:
          'Praesent euismod ut lorem ut elementum. In maximus, sem sed interdum imperdiet, nisi eros vehicula nunc, dignissim volutpat nulla dui vitae lectus. Sed lorem elit, scelerisque sit amet augue ut, interdum gravida tellus. Nulla eu efficitur enim, a convallis libero. Fusce sed orci nec nisl rhoncus mattis vel vel augue',
        productSubHeader: 'Sub Header 2',
        stock: 5,
        imgHref: 'https://placedog.net/400',
        price: 30,
        initialPrice: 40,
        code: 'fasdlj79fs',
      },
    ],
  },
};
const homeReducer = createReducer(initialState, {
  [setHomePageData.type]: (state, action) => ({
    ...state,
    homeSlider: action.payload.banners,
  }),
});

export default homeReducer;
