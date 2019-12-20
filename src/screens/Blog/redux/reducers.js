import * as Types from './constants';
//import produce from 'immer';

const initialState = {
  productList: [],
};

export default function ProductReducer(state = initialState, action) {
  const {payload, active} = action;
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_TOURS_LIST_SUCCESS: {
        draft.productList = payload;
        break;
      }
    }
  });
}
