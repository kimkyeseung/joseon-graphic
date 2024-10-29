'use client';

import React, { useCallback, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { HistoryContext } from '@/app/HistoryContext';

const Timeline = () => {
  const { timelineValue, setTimelineValue, historyData, currentYear } =
    useContext(HistoryContext);

  const handleScroll = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();

      const newSliderValue = Math.min(
        historyData.length - 1,
        Math.max(0, timelineValue + e.deltaY),
      );

      setTimelineValue(newSliderValue);
    },
    [setTimelineValue, timelineValue, historyData.length],
  );

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  const markerPosition = (timelineValue / (historyData.length - 1)) * 100;

  return (
    <div className="fixed bottom-2 right-10 z-[9999]">
      <div className="relative w-[760px]">
        <input
          type="range"
          value={timelineValue}
          min={0}
          max={historyData.length - 1}
          className={classNames(
            'w-full h-14 bg-transparent appearance-none',
            'cursor-pointer',
          )}
          onChange={(e) => setTimelineValue(Number(e.target.value))}
          style={{
            background: `linear-gradient(to right, #4CAF50 ${markerPosition}%, #e5e7eb ${markerPosition}%)`, // 트랙 배경 커스텀
          }}
        />

        <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 rounded-full transform -translate-y-1/2 dark:bg-gray-700" />

        <div
          className={classNames(
            'absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-green-500 rounded-full',
            'px-3 py2',
          )}
          style={{
            left: `${markerPosition}%`,
          }}
        >
          {currentYear} 년
        </div>
      </div>
    </div>
  );
};

export default Timeline;
