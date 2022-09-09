/* eslint-disable max-len */
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  catalog: {
    pagination: {
      total: 20,
      currentPage: 2,
      perPage: 4,
      nextPage: 3,
    },
    results: [
      {
        productId: 1,
        productTitle: 'Product title 1',
        productDescription:
          'Praesent euismod ut lorem ut elementum. In maximus, sem sed interdum imperdiet, nisi eros vehicula nunc, dignissim volutpat nulla dui vitae lectus. Sed lorem elit, scelerisque sit amet augue ut, interdum gravida tellus. Nulla eu efficitur enim, a convallis libero. Fusce sed orci nec nisl rhoncus mattis vel vel augue',
        productSubHeader: 'Sub Header 1',
        stock: 5,
        imgHref: 'https://via.placeholder.com/400x400',
        price: 20,
        initialPrice: 30,
      },
      {
        productId: 2,
        productTitle: 'Product title 2',
        productDescription:
          'Praesent euismod ut lorem ut elementum. In maximus, sem sed interdum imperdiet, nisi eros vehicula nunc, dignissim volutpat nulla dui vitae lectus. Sed lorem elit, scelerisque sit amet augue ut, interdum gravida tellus. Nulla eu efficitur enim, a convallis libero. Fusce sed orci nec nisl rhoncus mattis vel vel augue',
        productSubHeader: 'Sub Header 2',
        stock: 5,
        imgHref: 'https://via.placeholder.com/400x400',
        price: 30,
        initialPrice: 40,
      },
      {
        productId: 3,
        productTitle: 'Product title 3',
        productDescription:
          'Praesent euismod ut lorem ut elementum. In maximus, sem sed interdum imperdiet, nisi eros vehicula nunc, dignissim volutpat nulla dui vitae lectus. Sed lorem elit, scelerisque sit amet augue ut, interdum gravida tellus. Nulla eu efficitur enim, a convallis libero. Fusce sed orci nec nisl rhoncus mattis vel vel augue',
        productSubHeader: 'Sub Header 3',
        stock: 5,
        imgHref: 'https://via.placeholder.com/400x400',
        price: 40,
        initialPrice: 50,
      },
      {
        productId: 4,
        productTitle: 'Product title 4',
        productDescription:
          'Praesent euismod ut lorem ut elementum. In maximus, sem sed interdum imperdiet, nisi eros vehicula nunc, dignissim volutpat nulla dui vitae lectus. Sed lorem elit, scelerisque sit amet augue ut, interdum gravida tellus. Nulla eu efficitur enim, a convallis libero. Fusce sed orci nec nisl rhoncus mattis vel vel augue',
        productSubHeader: 'Sub Header 4',
        stock: 5,
        imgHref: 'https://via.placeholder.com/400x400',
        price: 50,
        initialPrice: 60,
      },
    ],
  },
};
const catalogReducer = createReducer(initialState, {
  // [increaseCounterAction.type]: (state, action) => ({
  //   ...state,
  //   counter: state?.counter + action.payload,
  // }),
});

export default catalogReducer;
