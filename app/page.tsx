import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/Explorebtn'
import { IEvent } from '@/database';
import { cacheLife } from 'next/cache';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {
  'use cache';

  cacheLife('hours');
  
  try {
    const response = await fetch(`${BASE_URL}/api/events`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    
    const {events} = await response.json();
    
    return (
      <section>
        <h1 className='text-center'>The Hub for Every Dev <br /> Event You Mustn&apos;t Miss</h1>
        <p className='text-center mt-5'>Hackathons, Meetups, Workshops, and Conferences. All in one</p>

        <ExploreBtn />

        <div>
          <h3>Featured Events</h3>

          <ul className='events'>
            {events && events.length > 0 ? (
              events.map((event: IEvent) => (
                <li key={event.title} className='list-none'>
                  <EventCard {...event} />
                </li>
              ))
            ) : (
              <li className='list-none'>No events available at this time.</li>
            )}
          </ul>
        </div>  
      </section>
    )
  } catch (error) {
    console.error('Error fetching events:', error);
    return (
      <section>
        <h1 className='text-center'>The Hub for Every Dev <br /> Event You Mustn&apos;t Miss</h1>
        <p className='text-center mt-5'>Hackathons, Meetups, Workshops, and Conferences. All in one</p>
        <p className='text-center mt-5'>Unable to load events. Please try again later.</p>
      </section>
    )
  }
}

export default page