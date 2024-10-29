'use client';

import { HistoryContext } from '@/app/HistoryContext';
import { useContext, useMemo } from 'react';
import * as kings from '@/data/kings.json';
import { King } from '@/types';
import classNames from 'classnames';

interface K extends King {
  order: number;
}

export function CurrentKing() {
  const { currentYear } = useContext(HistoryContext);

  const kingMap = useMemo(() => {
    const kingYearMap: Record<number, K> = {};
    kings.forEach((king: King, index) => {
      for (let year = king.startYear; year <= king.endYear; year++) {
        kingYearMap[year] = { ...king, order: index + 1 };
      }
    });
    return kingYearMap;
  }, []);

  if (!currentYear || !kingMap[currentYear]) {
    return null;
  }

  return (
    <div
      className={classNames(
        'absolute top-3 left-3 z-[9999]',
        'space-y-2 p-3 bg-white rounded-lg',
      )}
    >
      <div>{kingMap[currentYear].order} 대</div>
      <div>{kingMap[currentYear].name}</div>
      <div className="flex items-center">
        <div>{kingMap[currentYear].startYear}</div>-
        <div>{kingMap[currentYear].endYear}</div>
      </div>
    </div>
  );
}
