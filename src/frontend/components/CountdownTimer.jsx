import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ endDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  function calculateTimeLeft(endDate) {
    const difference = new Date(endDate) - new Date();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false
    };
  }

  if (timeLeft.expired) {
    return (
      <div style={{ 
        padding: '10px', 
        background: '#f0f0f0', 
        borderRadius: '8px',
        textAlign: 'center',
        color: '#999'
      }}>
        <strong>Ended</strong>
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'flex', 
      gap: '8px', 
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}>
      {timeLeft.days > 0 && (
        <div style={{ 
          background: '#F67280', 
          color: 'white', 
          padding: '8px 12px', 
          borderRadius: '6px',
          minWidth: '60px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{timeLeft.days}</div>
          <div style={{ fontSize: '10px' }}>days</div>
        </div>
      )}
      <div style={{ 
        background: '#F67280', 
        color: 'white', 
        padding: '8px 12px', 
        borderRadius: '6px',
        minWidth: '60px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{String(timeLeft.hours).padStart(2, '0')}</div>
        <div style={{ fontSize: '10px' }}>hours</div>
      </div>
      <div style={{ 
        background: '#F67280', 
        color: 'white', 
        padding: '8px 12px', 
        borderRadius: '6px',
        minWidth: '60px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div style={{ fontSize: '10px' }}>min</div>
      </div>
      <div style={{ 
        background: '#F67280', 
        color: 'white', 
        padding: '8px 12px', 
        borderRadius: '6px',
        minWidth: '60px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div style={{ fontSize: '10px' }}>sec</div>
      </div>
    </div>
  );
}

