import { all } from 'redux-saga/effects';
import { charactersSaga } from './charactersSaga';
import { episodesSaga } from './episodesSaga';
import { locationSaga } from './locationsSaga';

export default function* rootSaga () {
    yield all ([...charactersSaga,...episodesSaga,...locationSaga])
}