import { all } from 'redux-saga/effects';
// import { helloSaga } from './helloSaga';

import {vote} from "./vote.saga";

export default function* rootSaga()
{
    yield all([vote()]);       
}