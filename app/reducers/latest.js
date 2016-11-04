import {
    REQUEST_LATEST,
    RECEIVE_LATEST
} from '../actions/fetchLatest'

const latest = (state = { isFetching:false }, action) => {
    switch (action.type) {
        case REQUEST_LATEST:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_LATEST:
            return {
                ...state,
                isFetching: false,
                data: action.lastData.date,
                stories: action.lastData.stories,
                top_stories: action.lastData.top_stories
            }
        default:
            return state
    }
}

export default latest;
