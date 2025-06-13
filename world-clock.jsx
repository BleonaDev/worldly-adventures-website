const { useEffect, useState } = React;

function WorldClock() {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTime = () => {
      setTimes({
        paris: new Date().toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris" }),
        rome: new Date().toLocaleTimeString("it-IT", { timeZone: "Europe/Rome" }),
        dubai: new Date().toLocaleTimeString("ar-AE", { timeZone: "Asia/Dubai" }),
        newyork: new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" }),
        zanzibar: new Date().toLocaleTimeString("sw-TZ", { timeZone: "Africa/Nairobi" }),
        thailand: new Date().toLocaleTimeString("th-TH", { timeZone: "Asia/Bangkok" }),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    React.createElement('div', { className: 'react-clock' },
      React.createElement('h3', null, 'Check local time in your favourite destinations'),
      React.createElement('hr'),
      Object.entries(times).map(([city, time]) =>
        React.createElement('div', { className: 'time-container', key: city },
          `${city.charAt(0).toUpperCase() + city.slice(1)}: ${time}`
        )
      )
    )
  );
}
