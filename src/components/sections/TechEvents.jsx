import { Link } from 'react-router-dom';
import { displayedEvents } from '../../data/events';
import EventCard from '../common/EventCard';
import Text from '../common/Text';

function TechEvents() {
  return (
    <div className="mt-20 lg:mt-4 max-w-7xl mx-auto px-4 lg:px-8 mb-4">
      <div className="flex justify-between items-center">
        <div className="my-4">
          <Text variant="h3" size="xl" className="sm:2xl">
            Tech Events
          </Text>
          <div className="w-[20px]">
            <hr className="border-b-2 border-red" />
          </div>
        </div>
        <div>
          <Link
            to="events"
            className="cursor-pointer text-color-text-secondary hover:text-red transition-colors"
          >
            See all
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
        {/* <div className="flex flex-col gap-y-2"> */}
        {displayedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      {/* <Button>Explore More Jobs &rarr;</Button> */}
    </div>
  );
}

export default TechEvents;
