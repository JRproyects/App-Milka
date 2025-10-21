import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const parseSpanishDate = (str) => {
  const months = {
    enero: 0, febrero: 1, marzo: 2, abril: 3,
    mayo: 4, junio: 5, julio: 6, agosto: 7,
    septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11,
  };
  const regex = /(\d{1,2})\s+de\s+([a-zA-Z]+)/i;
  const match = str.match(regex);
  if (!match) return null;
  const day = parseInt(match[1], 10);
  const monthStr = match[2].toLowerCase();
  const month = months[monthStr];
  const year = new Date().getFullYear();
  return new Date(year, month, day);
};

const EventPopup = () => {
  const [nextEvent, setNextEvent] = useState(null);
  const [showEvent, setShowEvent] = useState(false);

  useEffect(() => {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQxJBR9fmkOIgih8HmJbLWXjfRgHkZBbxCCjgmupBxFp67Gd066B8i-FLdoAW8u-RooBjPK-sQmpcOV/pub?output=csv'; // reemplaza con tu CSV publicado
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results) => {
        const today = new Date();
        const events = results.data
          .map(e => ({ date: parseSpanishDate(e.Fecha), location: e.Lugar }))
          .filter(e => e.date && e.date >= today)
          .sort((a, b) => a.date - b.date);

        if (events.length > 0) setNextEvent(events[0]);
      },
      error: (err) => console.error(err)
    });
  }, []);

  if (!nextEvent) return <p>No hay próximos eventos.</p>;

  return (
    <div className="w-full max-w-sm mx-auto mt-4">
      <button
        onClick={() => setShowEvent(!showEvent)}
        className="w-full flex items-center justify-center space-x-3
                   py-4 px-6 mb-4 rounded-xl shadow-lg transition-transform duration-200
                   hover:scale-[1.02] active:scale-[0.98] cursor-pointer
                   bg-red-800 text-white border-2 border-white"
      >
        📅 Próximo Evento / Encuentro
      </button>

      {showEvent && (
        <div className="p-4 rounded-xl shadow-2xl text-center
                        bg-white/20 backdrop-blur-md border border-white/30
                        dark:bg-darkBg/50 dark:border-white/20 animate-slide-down">
          <p className="font-bold text-sm">🗓️ FECHA:</p>
          <p className="text-lg font-extrabold mb-2">
            {nextEvent.date.toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <p className="font-bold text-sm">📍 LUGAR:</p>
          <p className="text-base">{nextEvent.location}</p>
        </div>
      )}
    </div>
  );
};

export default EventPopup;
