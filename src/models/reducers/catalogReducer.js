/* eslint-disable max-len */
import { createReducer } from '@reduxjs/toolkit';
import { setProductPage } from 'models/actions/catalogActions';

const initialState = {
  singleProduct: {},
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
        imgHref: 'https://placedog.net/400?r',
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
        imgHref: 'https://placedog.net/400?r',
        price: 30,
        initialPrice: 40,
        code: 'fasdlj79fs',
      },
      {
        productId: 3,
        productTitle: 'Product title 3',
        productDescription:
          'Praesent euismod ut lorem ut elementum. In maximus, sem sed interdum imperdiet, nisi eros vehicula nunc, dignissim volutpat nulla dui vitae lectus. Sed lorem elit, scelerisque sit amet augue ut, interdum gravida tellus. Nulla eu efficitur enim, a convallis libero. Fusce sed orci nec nisl rhoncus mattis vel vel augue',
        productSubHeader: 'Sub Header 3',
        stock: 5,
        imgHref: 'https://placedog.net/400?r',
        price: 40,
        initialPrice: 50,
        code: 'lfjsd7fshsfd',
      },
      {
        productId: 4,
        productTitle: 'Product title 4',
        productDescription:
          'Praesent euismod ut lorem ut elementum. In maximus, sem sed interdum imperdiet, nisi eros vehicula nunc, dignissim volutpat nulla dui vitae lectus. Sed lorem elit, scelerisque sit amet augue ut, interdum gravida tellus. Nulla eu efficitur enim, a convallis libero. Fusce sed orci nec nisl rhoncus mattis vel vel augue',
        productSubHeader: 'Sub Header 4',
        stock: 5,
        imgHref: 'https://placedog.net/400?r',
        price: 50,
        initialPrice: 60,
        code: 'fgdfh6fg',
      },
    ],
  },
};
const catalogReducer = createReducer(initialState, {
  [setProductPage.type]: (state, action) => ({
    ...state,
    singleProduct: action.payload,
  }),
});

export default catalogReducer;
