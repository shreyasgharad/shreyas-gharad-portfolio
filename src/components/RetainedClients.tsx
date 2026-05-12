import React from 'react';
import { Building2 } from 'lucide-react';

interface RetainerClient {
  name: string;
  note: string;
  logo?: string;
}

const clients: RetainerClient[] = [
  { name: 'Sula Vineyards', note: 'Retainer via agency' },
  { name: 'Sprig', note: 'Retainer via agency' },
  { name: 'Paul & Mike', note: 'Retainer via agency' },
  { name: 'Hospitality Partner 1', note: 'Retainer via agency' },
  { name: 'Hospitality Partner 2', note: 'Retainer via agency' },
];

const RetainedClients = () => {
  return (
    <section id="retained-clients" className="bg-gray-50">
      <div className="container">
        <h2 className="section-title font-sf-pro">Retained Clients</h2>
        <p className="section-subtitle font-sf-pro-text">
          Long-term partnerships where I lead growth, creative, and performance marketing on an ongoing basis.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {clients.map((c) => (
            <div
              key={c.name}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-5 md:p-6 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-blue/10 text-blue flex items-center justify-center mb-4">
                {c.logo ? (
                  <img src={c.logo} alt={`${c.name} logo`} className="max-h-10 max-w-10 object-contain" />
                ) : (
                  <Building2 size={24} />
                )}
              </div>
              <h3 className="font-bold text-sm md:text-base font-sf-pro mb-1">{c.name}</h3>
              <span className="text-xs text-gray-500 font-sf-pro-text">{c.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetainedClients;
