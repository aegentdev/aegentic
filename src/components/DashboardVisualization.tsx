
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
      { id: 'agent1', x: 200, y: 150, radius: 15, color: '#5D5646', risk: 0.2, type: 'primary', connections: ['agent2', 'agent3', 'agent4'] },
      { id: 'agent2', x: 350, y: 100, radius: 12, color: '#A07D54', risk: 0.5, type: 'secondary', connections: ['agent1', 'agent5'] },
      { id: 'agent3', x: 300, y: 250, radius: 12, color: '#A07D54', risk: 0.3, type: 'secondary', connections: ['agent1', 'agent6'] },
      { id: 'agent4', x: 150, y: 250, radius: 10, color: '#3E5974', risk: 0.1, type: 'tertiary', connections: ['agent1'] },
      { id: 'agent5', x: 450, y: 150, radius: 10, color: '#3E5974', risk: 0.7, type: 'tertiary', connections: ['agent2', 'agent7'] },
      { id: 'agent6', x: 350, y: 350, radius: 10, color: '#3E5974', risk: 0.4, type: 'tertiary', connections: ['agent3'] },
      { id: 'agent7', x: 500, y: 200, radius: 8, color: '#FF5252', risk: 0.9, type: 'risk', connections: ['agent5'] },
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
    
    // Draw connections
    const drawConnections = () => {
      visualizationData.nodes.forEach(node => {
        node.connections.forEach(targetId => {
          const target = visualizationData.nodes.find(n => n.id === targetId);
          if (target) {
            const riskFactor = (node.risk + target.risk) / 2;
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = `rgba(160, 125, 84, ${0.3 + riskFactor * 0.5})`;
            ctx.lineWidth = 1 + riskFactor * 2;
            ctx.stroke();
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
        ctx.fillStyle = '#000000'; // Changed from white to black
        ctx.font = '10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.id, node.x, node.y + node.radius + 15);
      });
    };
    
    // Animation loop
    let animationFrameId: number;
    let time = 0;
    
    const animate = () => {
      time += 0.02; // Increased from 0.01 to make animation faster
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update node positions slightly for animation - increased movement
      visualizationData.nodes.forEach(node => {
        node.x += Math.sin(time + parseInt(node.id.replace('agent', '')) * 0.5) * 1.0; // Increased from 0.5
        node.y += Math.cos(time + parseInt(node.id.replace('agent', '')) * 0.5) * 1.0; // Increased from 0.5
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
      <canvas ref={canvasRef} className="visualization-canvas"></canvas>
      <div className="visualization-legend">
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#5D5646' }}></span>
          <span>Primary Agent</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#A07D54' }}></span>
          <span>Secondary Agent</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#3E5974' }}></span>
          <span>Tertiary Agent</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#FF5252' }}></span>
          <span>High Risk Agent</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardVisualization;