function updateClock() {
  const times = {
    paris: new Date().toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris" }),
    rome: new Date().toLocaleTimeString("it-IT", { timeZone: "Europe/Rome" }),
    dubai: new Date().toLocaleTimeString("ar-AE", { timeZone: "Asia/Dubai" }),
    newyork: new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" }),
    zanzibar: new Date().toLocaleTimeString("sw-TZ", { timeZone: "Africa/Nairobi" }),
    thailand: new Date().toLocaleTimeString("th-TH", { timeZone: "Asia/Bangkok" }),
  };

  const container = document.getElementById("world-clock");
  if (!container) return;

  container.innerHTML = `
    <div class="react-clock">
      <h3>Check local time in your favourite destinations</h3>
      <hr>
      ${Object.entries(times)
        .map(([city, time]) => `
          <div class="time-container">
            ${city.charAt(0).toUpperCase() + city.slice(1)}: ${time}
          </div>
        `).join('')}
    </div>
  `;
}

updateClock();
setInterval(updateClock, 1000);