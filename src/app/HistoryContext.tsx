'use client';

import { YEAR_START } from '@/constants';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';

const minScrolValue: number = YEAR_START;

interface ContextType {
  timelineValue: number;
  setTimelineValue: Dispatch<SetStateAction<number>>;
}

export const HistoryContext = createContext<ContextType>({
  timelineValue: minScrolValue,
  setTimelineValue: () => {},
});

export const HistoryProvider = ({ children }: PropsWithChildren) => {
  const [timelineValue, setTimelineValue] = useState(minScrolValue);

  return (
    <HistoryContext.Provider value={{ timelineValue, setTimelineValue }}>
      {children}
    </HistoryContext.Provider>
  );
};
