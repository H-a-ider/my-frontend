import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function Home() {
  const [message, setMessage] = useState('');
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    fetch('http://192.168.39.141:30001/api/hello')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
        // Use date-fns to format the date and time
        const now = new Date();
        const formattedDateTime = format(now, 'MM/dd/yyyy HH:mm');
        setDateTime(formattedDateTime);
      });
  }, []);

  return (
    <div>
      <p>{dateTime && message ? `${dateTime} ${message}` : 'Loading...'}</p>
    </div>
  );
}
