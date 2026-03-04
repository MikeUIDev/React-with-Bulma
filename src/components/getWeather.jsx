import { useEffect, useState } from "react";

export default function GetWeather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [now, setNow] = useState(new Date()); // live clock

  const fetchSFWeather = async () => {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=37.7749&longitude=-122.4194&current_weather=true&timezone=auto";

    try {
      setError("");
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setWeather(data.current_weather);
    } catch (e) {
      setError(e.message || "Failed to fetch weather");
    }
  };

  useEffect(() => {
    // initial fetch
    fetchSFWeather();

    // refresh weather every 30 minutes
    const weatherTimer = setInterval(fetchSFWeather, 30 * 60 * 1000);

    // live clock updates every second
    const clockTimer = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(weatherTimer);
      clearInterval(clockTimer);
    };
  }, []);

  return (
    <div className="is-hidden-mobile desktop-only">
      {error && <p>{error}</p>}
      {!weather ? (
        <p className="temp-text-size">Loading...</p>
      ) : (
        <div>
          <p className="temp-text-size has-text-weight-bold">
            San Francisco, Bay Area
          </p>
          <p className="temp-text-size">{now.toLocaleString()}</p>
          <p className="temp-text-size">{weather.temperature}°C</p>
        </div>
      )}
    </div>
  );
}
