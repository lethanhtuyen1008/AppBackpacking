import {all} from 'redux-saga/effects';
import Product from '../screens/Accounts/redux/sagas'
export default function* rootSaga (){
    yield all([
        Product()
    ])
}
