import axios from "axios";
import {
  ROOT_URL,
  REQUEST_CHARACTERS_LIST,
  RECEIVE_CHARACTERS_LIST,
  ERROR_CHARACTERS,
  REQUEST_CHARACTER,
  RECEIVE_CHARACTER,
} from "./types";

export const listCharacters = page => async dispatch => {
  try {
    dispatch({type: REQUEST_CHARACTERS_LIST});
    const {data} = await axios.get(`${ROOT_URL}/character?page=${page}`);
    dispatch({type: RECEIVE_CHARACTERS_LIST, list: data.results, ...data.info, page});
  } catch {
    dispatch({type: ERROR_CHARACTERS, error: 'Fetch Error'});
  }
};

export const getCharacter = id => async dispatch => {
  try {
    dispatch({type: REQUEST_CHARACTER});
    const {data} = await axios.get(`${ROOT_URL}/character/${id}`);
    dispatch({type: RECEIVE_CHARACTER, current: data});
  } catch {
    dispatch({type: ERROR_CHARACTERS, error: 'Fetch Error'});
  }
};

