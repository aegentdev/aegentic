
import { useEffect, useRef } from 'react';
import './DashboardVisualization.css';

interface Node {
  id: string;
  x: number;
  y: number;
  radius: number;
  color: string;
  risk: number;
  type: string;
  connections: string[];
}

interface DashboardVisualizationProps {
  data?: {
    nodes: Node[];
  };
}

const DashboardVisualization = ({ data }: DashboardVisualizationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Default data if none provided
  const defaultData = {
    nodes: [
      { id: 'Reddit MCP Server', x: 260, y: 120, radius: 14, color: '#f1c40f', risk: 0.1, type: 'external', connections: ['Market Sentiment'] },
      { id: 'S&P 500 MCP Server', x: 60, y: 100, radius: 14, color: '#f1c40f', risk: 0.1, type: 'external', connections: ['Market Sentiment'] },
      { id: 'Market Sentiment', x: 160, y: 150, radius: 22, color: '#2980b9', risk: 0.2, type: 'agent', connections: ['Portfolio Rebalancer'] },
      { id: 'Trend Analysis', x: 480, y: 140, radius: 22, color: '#2980b9', risk: 0.2, type: 'agent', connections: ['Portfolio Rebalancer'] },
      { id: 'Portfolio Rebalancer', x: 320, y: 250, radius: 22, color: '#2980b9', risk: 0.3, type: 'agent', connections: ['Risk Management', 'Trade Execution'] },
      { id: 'Risk Management', x: 460, y: 330, radius: 22, color: '#2980b9', risk: 0.5, type: 'agent', connections: ['Trade Execution'] },
      { id: 'Trade Execution', x: 180, y: 310, radius: 22, color: '#2980b9', risk: 0.1, type: 'agent', connections: ['Portfolio Rebalancer'] },
    ]
  };
  
  const visualizationData = data || defaultData;
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    // Draw connections (with arrows)
    const drawConnections = () => {
      visualizationData.nodes.forEach(node => {
        node.connections.forEach(targetId => {
          const target = visualizationData.nodes.find(n => n.id === targetId);
          if (target) {
            // Draw arrowed line
            const dx = target.x - node.x;
            const dy = target.y - node.y;
            const angle = Math.atan2(dy, dx);
            const startX = node.x + Math.cos(angle) * node.radius;
            const startY = node.y + Math.sin(angle) * node.radius;
            const endX = target.x - Math.cos(angle) * target.radius;
            const endY = target.y - Math.sin(angle) * target.radius;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = '#444';
            ctx.lineWidth = 5;
            ctx.stroke();

            // Draw arrowhead
            const arrowLength = 18;
            const arrowWidth = 10;
            ctx.beginPath();
            ctx.moveTo(endX, endY);
            ctx.lineTo(
              endX - arrowLength * Math.cos(angle - Math.PI / 8),
              endY - arrowLength * Math.sin(angle - Math.PI / 8)
            );
            ctx.lineTo(
              endX - arrowLength * Math.cos(angle + Math.PI / 8),
              endY - arrowLength * Math.sin(angle + Math.PI / 8)
            );
            ctx.lineTo(endX, endY);
            ctx.fillStyle = '#444';
            ctx.fill();
            ctx.restore();
          }
        });
      });
    };
    
    // Draw nodes
    const drawNodes = () => {
      visualizationData.nodes.forEach(node => {
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Draw risk indicator
        if (node.risk > 0.6) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 5, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 82, 82, ${node.risk})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        
        // Draw label - changed text color to black
        ctx.fillStyle = '#000000';
        ctx.font = '10px Inter, sans-serif'; // Scaled down with node size
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.id, node.x, node.y + node.radius + 14);
      });
    };
    
    // Animation loop
    let animationFrameId: number;
    let time = 0;
    
    const animate = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update node positions slightly for minimal animation
      visualizationData.nodes.forEach((node, idx) => {
        node.x += Math.sin(time + idx * 0.5) * 0.2;
        node.y += Math.cos(time + idx * 0.5) * 0.2;
        // Clamp node position to stay within canvas
        node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x));
        node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y));
      });
      drawConnections();
      drawNodes();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [visualizationData]);
  
  return (
    <div className="dashboard-visualization">
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '12px', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-block', width: 18, height: 18, borderRadius: '50%', background: '#2980b9' }}></span>
          <span style={{ fontSize: 14, color: '#000' }}>Agents</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-block', width: 18, height: 18, borderRadius: '50%', background: '#f1c40f' }}></span>
          <span style={{ fontSize: 14, color: '#000' }}>MCP Servers</span>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className="visualization-canvas"
        width={600}
        height={250}
      ></canvas>
    </div>
  );
};

export default DashboardVisualization;