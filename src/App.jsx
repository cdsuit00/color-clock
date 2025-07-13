import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Format the date and time using date-fns
  const formattedDate = format(currentTime, 'MMMM do, yyyy');
  const formattedTime = format(currentTime, 'h:mm:ss a');

  return (
    <div className="app-container">
      <h1 className="welcome-text" style={{ color: getRandomColor() }}>
        Welcome to Color Clock
      </h1>
      <div className="date-text">
        {formattedDate}
      </div>
      <div className="time-text" style={{ color: getRandomColor() }}>
        {formattedTime}
      </div>
    </div>
  );
}

export default App;