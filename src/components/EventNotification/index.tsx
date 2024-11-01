import { Event } from '@/types';
import classNames from 'classnames';

interface Props {
  event: Event;
  year: number;
}

export function EventNotification({ year, event }: Props) {
  return (
    <div
      className={classNames(
        'px-3 py-2 space-y-2',
        'max-w-[480px] bg-white rounded-xl',
      )}
    >
      <div>
        {year}
        {' - '}
        {event.title}
      </div>
      {event.description && <div>{event.description}</div>}
    </div>
  );
}
