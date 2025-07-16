import React, { useState, useEffect } from 'react';
import './Admin.css';

interface WaitlistSignup {
  name: string;
  email: string;
  company?: string;
  useCase?: string;
  timestamp: string;
}

const Admin = () => {
  const [signups, setSignups] = useState<WaitlistSignup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSignups();
  }, []);

  const fetchSignups = async () => {
    try {
      const response = await fetch('http://localhost:5000/waitlist-signups');
      const result = await response.json();

      if (response.ok && result.success) {
        setSignups(result.signups);
      } else {
        setError('Failed to fetch signups');
      }
    } catch (error) {
      console.error('Error fetching signups:', error);
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Company', 'Use Case', 'Timestamp'];
    const csvContent = [
      headers.join(','),
      ...signups.map(signup => [
        `"${signup.name}"`,
        `"${signup.email}"`,
        `"${signup.company || ''}"`,
        `"${signup.useCase || ''}"`,
        `"${formatDate(signup.timestamp)}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `waitlist-signups-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="admin-container">
        <div className="admin-loading">Loading waitlist signups...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-container">
        <div className="admin-error">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={fetchSignups} className="btn btn-primary">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Waitlist Signups</h1>
        <div className="admin-stats">
          <div className="stat-card">
            <h3>{signups.length}</h3>
            <p>Total Signups</p>
          </div>
          <div className="stat-card">
            <h3>{signups.filter(s => s.company).length}</h3>
            <p>With Company</p>
          </div>
          <div className="stat-card">
            <h3>{signups.filter(s => s.useCase).length}</h3>
            <p>With Use Case</p>
          </div>
        </div>
        <div className="admin-actions">
          <button onClick={fetchSignups} className="btn btn-secondary">
            Refresh
          </button>
          <button onClick={exportToCSV} className="btn btn-primary">
            Export CSV
          </button>
        </div>
      </div>

      {signups.length === 0 ? (
        <div className="admin-empty">
          <h3>No signups yet</h3>
          <p>Waitlist signups will appear here when people join.</p>
        </div>
      ) : (
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Use Case</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {signups.map((signup, index) => (
                <tr key={index}>
                  <td>{signup.name}</td>
                  <td>{signup.email}</td>
                  <td>{signup.company || '-'}</td>
                  <td className="use-case-cell">
                    {signup.useCase ? (
                      <span title={signup.useCase}>
                        {signup.useCase.length > 50 
                          ? `${signup.useCase.substring(0, 50)}...` 
                          : signup.useCase}
                      </span>
                    ) : '-'}
                  </td>
                  <td>{formatDate(signup.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Admin;