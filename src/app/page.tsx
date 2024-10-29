import Timeline from '@/components/Timeline';
import { HistoryProvider } from './HistoryContext';
import { CurrentKing } from '@/components/CurrentKing';
import dynamic from 'next/dynamic';

const MapWithLeaflet = dynamic(() => import('./MapWithLeaflet'), {
  ssr: false,
});

const Home = () => {
  return (
    <main className="bg-[#f9f5ef] relative">
      <HistoryProvider>
        <CurrentKing />
        <Timeline />
        <MapWithLeaflet />
      </HistoryProvider>
    </main>
  );
};

export default Home;
