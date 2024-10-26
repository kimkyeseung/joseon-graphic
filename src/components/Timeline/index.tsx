'use client';

import React, { useCallback, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { YEAR_END, YEAR_START } from '@/constants';
import { HistoryContext } from '@/app/HistoryContext';

const maxScrollValue: number = YEAR_END;
const minScrolValue: number = YEAR_START;

const Timeline = () => {
  const { timelineValue, setTimelineValue } = useContext(HistoryContext);

  const handleScroll = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();

      const newSliderValue = Math.min(
        maxScrollValue,
        Math.max(minScrolValue, timelineValue + e.deltaY),
      );

      setTimelineValue(newSliderValue);
    },
    [setTimelineValue, timelineValue],
  );

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="fixed bottom-2 right-10 z-[9999]">
      <input
        type="range"
        value={timelineValue}
        max={YEAR_END}
        min={YEAR_START}
        className={classNames(
          'w-[760px] h-14 bg-gray-200 rounded-3xl px-6 appearance-none',
          'cursor-pointer dark:bg-gray-700',
        )}
        onChange={(e) => setTimelineValue(Number(e.target.value))}
      />
    </div>
  );
};

export default Timeline;
