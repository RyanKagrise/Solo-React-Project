import { csrfFetch } from "./csrf"

//action variables
const GET_EVENTS = 'events/getEvents';
const GET_EVENT = 'events/getEvent';
const CREATE_EVENT = 'events/createEvent';
const EDIT_EVENT = 'events/editEvent';
const DELETE_EVENT = 'events/deleteEvent';


//action creators
const getEvents = events => {
  return {
    type: GET_EVENTS,
    events
  }
}

const getEvent = event => {
  return {
    type: GET_EVENT,
    event
  }
}

const createEvent = newEvent => {
  return {
    type: CREATE_EVENT,
    newEvent
  }
}

const editEvent = editedEvent => {
  return {
    type: EDIT_EVENT,
    editedEvent
  }
}

const deleteEvent = deletedEvent => {
  return {
    type: DELETE_EVENT,
    deletedEvent
  }
}


//thunk action creators
export const fetchEvents = events => async dispatch => {
  const res = await fetch(`/api/events`);

  if (res.ok) {
    const events = await res.json();
    dispatch(getEvents(events));
    return events;
  }
}




//reducer
const initialState = {};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_EVENTS: {
      state.events = action.events;
      return {...state};
    }







  }
}


export default eventsReducer;