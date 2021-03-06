import { ADD_PLACE } from '../actions/place';
import Place from '../../model/place';

const initialState = {
    places: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(new Date().toString(), action.placeData.title);
            return {
                places: state.places.concat(newPlace)
            }

        default:
            return state;
    }
}