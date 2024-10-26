import Timeline from '@/components/Timeline';
import { MapWithLeaflet } from './MapWithLeaflet';
import { HistoryProvider } from './HistoryContext';

const Home = () => {
  return (
    <main className="bg-[#f9f5ef]">
      <HistoryProvider>
        <Timeline />
        <MapWithLeaflet />
      </HistoryProvider>
    </main>
  );
};

export default Home;
