import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, Zap, TrendingUp } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState<number>(5);
  const [hoursPerDay, setHoursPerDay] = useState<number>(3);
  const [hourlyRate, setHourlyRate] = useState<number>(45);

  // Calculations
  const hoursSavedPerWeek = teamSize * hoursPerDay * 5 * 0.45; // 45% productivity boost
  const monthlySavingsUSD = Math.round(hoursSavedPerWeek * 4 * hourlyRate);
  const estimatedCostUSD = teamSize * 20; // $20/user/mo
  const netMonthlyROI = monthlySavingsUSD - estimatedCostUSD;
  const roiPercentage = Math.round((netMonthlyROI / estimatedCostUSD) * 100);

  return (
    <div
      style={{
        background: '#0d0d12',
        border: '1px solid #1f1f26',
        borderRadius: '16px',
        padding: '24px',
        marginTop: '20px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ padding: '6px', borderRadius: '8px', background: 'rgba(16,185,129,0.12)', color: '#34d399', border: '1px solid rgba(16,185,129,0.25)', display: 'flex' }}>
            <Calculator size={14} />
          </span>
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#fff', margin: 0 }}>
              Live Enterprise ROI & Time Savings Calculator
            </h4>
            <span style={{ fontSize: '0.75rem', color: '#71717a' }}>
              Simulate measurable workflow velocity and financial return
            </span>
          </div>
        </div>

        <span style={{ fontSize: '0.6875rem', fontWeight: 700, padding: '3px 8px', borderRadius: '99px', background: 'rgba(16,185,129,0.15)', color: '#34d399', border: '1px solid rgba(16,185,129,0.3)' }}>
          +{roiPercentage}% NET ROI
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
        {/* Sliders */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#a1a1aa', marginBottom: '6px' }}>
            <span>Team Members</span>
            <strong style={{ color: '#fff' }}>{teamSize} people</strong>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#6E56CF', cursor: 'pointer' }}
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#a1a1aa', marginBottom: '6px' }}>
            <span>AI Usage / Person / Day</span>
            <strong style={{ color: '#fff' }}>{hoursPerDay} hours</strong>
          </div>
          <input
            type="range"
            min={1}
            max={8}
            value={hoursPerDay}
            onChange={(e) => setHoursPerDay(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#6E56CF', cursor: 'pointer' }}
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#a1a1aa', marginBottom: '6px' }}>
            <span>Blended Hourly Cost</span>
            <strong style={{ color: '#fff' }}>${hourlyRate}/hr</strong>
          </div>
          <input
            type="range"
            min={20}
            max={150}
            step={5}
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#6E56CF', cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Results Output Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', background: '#09090c', padding: '16px', borderRadius: '12px', border: '1px solid #1a1a22' }}>
        <div>
          <span style={{ fontSize: '0.6875rem', color: '#71717a', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Monthly Time Saved</span>
          <span style={{ fontSize: '1.125rem', fontWeight: 800, color: '#38bdf8' }}>{Math.round(hoursSavedPerWeek * 4)} hours</span>
        </div>

        <div>
          <span style={{ fontSize: '0.6875rem', color: '#71717a', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Estimated Tool Cost</span>
          <span style={{ fontSize: '1.125rem', fontWeight: 800, color: '#d4d4d8' }}>${estimatedCostUSD} / mo</span>
        </div>

        <div>
          <span style={{ fontSize: '0.6875rem', color: '#71717a', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Net Monthly Value Added</span>
          <span style={{ fontSize: '1.125rem', fontWeight: 800, color: '#34d399' }}>${netMonthlyROI.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
