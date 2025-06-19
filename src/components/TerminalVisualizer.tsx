
import { useEffect, useRef, useState } from 'react';
import './TerminalVisualizer.css';

interface TerminalVisualizerProps {
  autoStart?: boolean;
  speed?: number;
}

const TerminalVisualizer = ({ autoStart = true, speed = 50 }: TerminalVisualizerProps) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isComplete, setIsComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  const securityChecks = [
    { command: '> aegentic scan --mode=comprehensive', delay: 1000 },
    { text: 'Initializing Aegentic Security Scanner v2.5.0...', type: 'info', delay: 800 },
    { text: 'Loading agent communication protocols...', type: 'info', delay: 600 },
    { text: 'Scanning for vulnerabilities in agent mesh...', type: 'info', delay: 1000 },
    { text: '[1/7] Checking prompt injection vulnerabilities...', type: 'check', delay: 1200 },
    { text: '✓ No direct prompt injection vulnerabilities found', type: 'success', delay: 300 },
    { text: '[2/7] Analyzing agent communication channels...', type: 'check', delay: 1000 },
    { text: '⚠ Potential unvalidated message chain in Agent-3', type: 'warning', delay: 300 },
    { text: '  → Recommendation: Implement strict message validation', type: 'info', delay: 300 },
    { text: '[3/7] Scanning for memory loop patterns...', type: 'check', delay: 1000 },
    { text: '✕ Critical: Recursive memory access detected in Agent-7', type: 'error', delay: 300 },
    { text: '  → Recommendation: Implement circuit breaker pattern', type: 'info', delay: 300 },
    { text: '[4/7] Verifying port security configurations...', type: 'check', delay: 1000 },
    { text: '⚠ Insufficient monitoring on ports between Agent-2 and Agent-5', type: 'warning', delay: 300 },
    { text: '  → Recommendation: Deploy comprehensive logging', type: 'info', delay: 300 },
    { text: '[5/7] Testing for privilege escalation vectors...', type: 'check', delay: 1000 },
    { text: '✓ No privilege escalation vectors detected', type: 'success', delay: 300 },
    { text: '[6/7] Checking OWASP compliance...', type: 'check', delay: 1000 },
    { text: '✓ 94% OWASP compliance score', type: 'success', delay: 300 },
    { text: '[7/7] Running adversarial robustness tests...', type: 'check', delay: 1000 },
    { text: '✓ System maintains 87% functionality under adversarial conditions', type: 'success', delay: 300 },
    { text: 'Scan complete. Generating security report...', type: 'info', delay: 800 },
    { text: 'Security Assessment Summary:', type: 'header', delay: 500 },
    { text: '• Overall Security Score: 87%', type: 'result', delay: 300 },
    { text: '• Critical Vulnerabilities: 1', type: 'result', delay: 300 },
    { text: '• Potential Risks: 2', type: 'result', delay: 300 },
    { text: '• OWASP Compliance: 94%', type: 'result', delay: 300 },
    { text: '> Report saved to /security/assessment-20250619.json', type: 'command', delay: 500 },
  ];
  
  const typeCharacter = (text: string, index: number, callback: () => void) => {
    if (index < text.length) {
      setCurrentLine(prev => prev + text.charAt(index));
      setTimeout(() => {
        typeCharacter(text, index + 1, callback);
      }, speed);
    } else {
      callback();
    }
  };
  
  const processNextLine = (index: number) => {
    if (index >= securityChecks.length) {
      setIsComplete(true);
      setIsRunning(false);
      return;
    }
    
    const item = securityChecks[index];
    setCurrentLine('');
    
    setTimeout(() => {
      typeCharacter(item.text || item.command || '', 0, () => {
        setLines(prev => [...prev, currentLine]);
        setCurrentLine('');
        processNextLine(index + 1);
      });
    }, item.delay);
  };
  
  const startScan = () => {
    setLines([]);
    setCurrentLine('');
    setIsComplete(false);
    setIsRunning(true);
  };
  
  useEffect(() => {
    if (isRunning && !isComplete) {
      processNextLine(0);
    }
  }, [isRunning]);
  
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines, currentLine]);
  
  return (
    <div className="terminal-visualizer">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button close"></span>
          <span className="terminal-button minimize"></span>
          <span className="terminal-button maximize"></span>
        </div>
        <div className="terminal-title">Aegentic Security Scanner</div>
      </div>
      <div className="terminal-body" ref={terminalRef}>
        {lines.map((line, index) => {
          const check = securityChecks[index];
          const type = check?.type || 'text';
          return (
            <div key={index} className={`terminal-line ${type}`}>
              {line}
            </div>
          );
        })}
        {currentLine && <div className={`terminal-line current`}>{currentLine}<span className="cursor"></span></div>}
      </div>
      <div className="terminal-footer">
        {!isRunning && (
          <button className="terminal-button-scan" onClick={startScan}>
            {isComplete ? 'Run New Scan' : 'Start Security Scan'}
          </button>
        )}
      </div>
    </div>
  );
};

export default TerminalVisualizer;
