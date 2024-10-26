import Timeline from '@/components/Timeline';
import { MapWithLeaflet } from './MapWithLeaflet';

const Home = () => {
  return (
    <main className="bg-[#f9f5ef]">
      <Timeline />
      <MapWithLeaflet />
    </main>
  );
};

export default Home;
