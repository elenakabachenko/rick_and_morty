import {
  REQUEST_CHARACTERS_LIST,
  RECEIVE_CHARACTERS_LIST,
  ERROR_CHARACTERS,
  REQUEST_CHARACTER,
  RECEIVE_CHARACTER
} from "../../actions/types";

const initialState = {
  loading: false,
  list: [],
  error: null,
  current: {},
  count: 0,
  pages: 1,
};

const characters = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CHARACTERS_LIST:
      return {...state, loading: true, error: null, list: []};
    case RECEIVE_CHARACTERS_LIST:
      return {...state, loading: false, ...action};
    case REQUEST_CHARACTER:
      return {...state, loading: true, error: null, current: {}};
    case RECEIVE_CHARACTER:
      return {...state, loading: true, error: null, current: action.current};
    case ERROR_CHARACTERS:
      return {...state, loading: false, error: action.error, list: [], current: {}};
    default:
      return state;
  }
}

export default characters;