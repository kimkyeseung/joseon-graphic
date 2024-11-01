'use client';

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import historyData from '@/data/history.json';
import { Event, HistoryData } from '@/types';
import { toast } from 'react-hot-toast';
import { EventNotification } from '@/components/EventNotification';

interface ContextType {
  timelineValue: number;
  setTimelineValue: Dispatch<SetStateAction<number>>;
  historyData: HistoryData[];
  currentYear?: number;
}

export const HistoryContext = createContext<ContextType>({
  timelineValue: 0,
  setTimelineValue: () => {},
  historyData: [],
  currentYear: undefined,
});

export const HistoryProvider = ({ children }: PropsWithChildren) => {
  const [timelineValue, setTimelineValue] = useState(0);

  const currentYear = historyData[timelineValue]?.year;

  useEffect(() => {
    historyData[timelineValue].events.forEach((event: Event) => {
      toast.custom(<EventNotification event={event} year={currentYear} />, {
        duration: Infinity,
      });
    });
  }, [timelineValue]);

  return (
    <HistoryContext.Provider
      value={{ timelineValue, setTimelineValue, historyData, currentYear }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
