'use client';

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';
import historyData from '@/data/history.json';
import { HistoryData } from '@/types';

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

  return (
    <HistoryContext.Provider
      value={{ timelineValue, setTimelineValue, historyData, currentYear }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
