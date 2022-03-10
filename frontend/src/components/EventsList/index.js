import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchEvents } from '../../store/event';
import './EventsList.css'


const EventsList = () => {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.event);

  const eventsArray = Object.values(events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (!events) {
    return null;
  }

  return (
    <>
      <div className='events-links'>
        <ul className='events-list'>
          {eventsArray.map((event) => (
            <NavLink
              to={`/events/${event.id}`}
              key={event.id}
              style={{ textDecoration: "none", padding: 25 }}
            >
              <h3 className='event-name'>{event?.name}</h3>
              <p className='event-date'>Date: {event?.date}</p>
              <p className='event-content'>{event?.content}</p>
              <p className='event-capacity'>Capacity: {event?.capacity}</p>
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  )
};

export default EventsList;