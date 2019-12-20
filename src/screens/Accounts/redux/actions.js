import * as Types from './constants';

export const getToursList = () => {
    return {
        type: Types.GET_TOURS_LIST
    }
}
export const getToursListSuccess = (data) => {
    return {
        type: Types.GET_TOURS_LIST_SUCCESS,
        payload: data
    }
}
