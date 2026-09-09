import React from 'react';
import { MOCK_LEADERBOARD, LeaderboardEntry } from '../data/mockEcosystem';
import { Trophy, TrendingUp, Zap, Sparkles, ArrowRight, Star, ShieldCheck } from 'lucide-react';

interface LeaderboardViewProps {
  onSelectTool: (slug: string) => void;
}

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({ onSelectTool }) => {
  return (
    <div className="wrap" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(110,86,207,0.12)', border: '1px solid rgba(110,86,207,0.25)', borderRadius: '99px', padding: '4px 14px', marginBottom: '16px' }}>
          <Trophy size={12} color="#fbbf24" />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a78bfa', letterSpacing: '0.04em' }}>
            Verified Intelligence Benchmarks
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '14px' }}>
          Global AI Model Leaderboard
        </h1>
        <p style={{ fontSize: '0.9375rem', color: '#a1a1aa', lineHeight: 1.6 }}>
          Live rankings based on reasoning accuracy, code synthesis benchmarks, latency metrics, and community adoption.
        </p>
      </div>

      {/* Leaderboard Table */}
      <div style={{ background: '#0d0d12', border: '1px solid #1e1e26', borderRadius: '16px', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.8125rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #1e1e24', background: 'rgba(255,255,255,0.02)' }}>
                <th style={{ padding: '16px 20px', color: '#71717a', fontWeight: 600, width: '70px' }}>Rank</th>
                <th style={{ padding: '16px 20px', color: '#71717a', fontWeight: 600 }}>AI Model / Tool</th>
                <th style={{ padding: '16px 20px', color: '#71717a', fontWeight: 600 }}>Category</th>
                <th style={{ padding: '16px 20px', color: '#71717a', fontWeight: 600 }}>ELO Rating</th>
                <th style={{ padding: '16px 20px', color: '#71717a', fontWeight: 600 }}>Composite Score</th>
                <th style={{ padding: '16px 20px', color: '#71717a', fontWeight: 600 }}>Speed / Latency</th>
                <th style={{ padding: '16px 20px', color: '#71717a', fontWeight: 600 }}>Growth</th>
                <th style={{ padding: '16px 20px', color: '#71717a', fontWeight: 600, textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_LEADERBOARD.map((entry) => (
                <tr
                  key={entry.rank}
                  style={{ borderBottom: '1px solid #15151c', cursor: 'pointer', transition: 'background 120ms ease' }}
                  onClick={() => onSelectTool(entry.slug)}
                  className="hover:bg-[#14141c]"
                >
                  <td style={{ padding: '16px 20px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '99px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.75rem',
                        background: entry.rank === 1 ? '#fbbf24' : entry.rank === 2 ? '#e2e8f0' : entry.rank === 3 ? '#b45309' : 'rgba(255,255,255,0.06)',
                        color: entry.rank <= 3 ? '#000' : '#a1a1aa'
                      }}
                    >
                      {entry.rank}
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontWeight: 700, color: '#fff' }}>{entry.name}</span>
                      <ShieldCheck size={13} color="#6E56CF" />
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px', color: '#a1a1aa' }}>
                    {entry.category}
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <span style={{ fontWeight: 700, color: '#c4b5fd', fontFamily: 'var(--font-mono)' }}>
                      {entry.eloScore}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontWeight: 700, color: '#34d399' }}>{entry.benchmarkScore}%</span>
                    </div>
                  </td>
                  <td style={{ padding: '16px 20px', color: '#d4d4d8', fontFamily: 'var(--font-mono)' }}>
                    {entry.speedMs < 1000 ? `${entry.speedMs}ms` : `${(entry.speedMs / 1000).toFixed(1)}s`}
                  </td>
                  <td style={{ padding: '16px 20px' }}>
                    <span style={{ color: '#34d399', fontWeight: 600, fontSize: '0.75rem' }}>
                      {entry.monthlyGrowth}
                    </span>
                  </td>
                  <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTool(entry.slug);
                      }}
                      className="btn-secondary"
                      style={{ padding: '6px 12px', fontSize: '0.75rem' }}
                    >
                      <span>Explore</span>
                      <ArrowRight size={11} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
