import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionTypes';
import PlaceImage from '../../assets/image.png';
const initialState = {
    places: [],
    placeSelected: null
}

const placeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE: 
            return {
                ...state,
                places: [...state.places, {value: action.placeName, image: PlaceImage, key: Math.random()}]
            };
        case DELETE_PLACE: 
            let newPlaces = state.places.filter((place) => {
                return place.key !== state.placeSelected.key;
            });
            return {
                ...state,
                places: newPlaces,
                placeSelected: null
            };
        case SELECT_PLACE:
            let newPlaceSelected = state.places.find((place) => {
                return place.key === action.placeKey;
            });
            return {
                ...state,
                placeSelected: newPlaceSelected
            }
        case DESELECT_PLACE:
            return {
                ...state,
                placeSelected: null
            }
        default:
            return state;
    }
}

export default placeReducer;