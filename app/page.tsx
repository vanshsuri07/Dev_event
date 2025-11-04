import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/Explorebtn'
import { events } from '@/lib/constant'



const page = () => {
  return (
    <section>
      <h1 className='text-center'>The Hub for Every Dev <br /> Event You Mustn&apos;t Miss</h1>
      <p className='text-center mt-5'>Hackathons, Meetups, Workshops, and Conferences. All in one</p>

      <ExploreBtn />

      <div>
          <h3>Featured Events</h3>

          <ul className='events'>
            {events.map((event) => (
              <li key={event.title}>
                <EventCard {...event} />
              </li>
            ))}
          </ul>
      </div>  
    </section>
  )
}

export default page
