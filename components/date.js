import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    const str = '2023-11-17T10:36:01.516Z';
  const date = parseISO(str);
  return <time dateTime={date}>{format(date, 'LLLL d, yyyy')}</time>;
}