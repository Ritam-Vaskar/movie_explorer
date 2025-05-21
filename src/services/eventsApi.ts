import { Event, SearchParams } from '../types/Event';

// In a real application, this would make an API call to your backend
// that runs the Python script. For this demo, we'll simulate the API call.
export const searchEvents = async (params: SearchParams): Promise<Event[]> => {
  const response = await fetch('http://127.0.0.1:5000/api/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error('Error fetching events');
  }

  return response.json();
};