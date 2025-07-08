
import { useEffect, useRef } from 'react';
import './BenchmarkChart.css';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    color: string;
  }[];
}

interface BenchmarkChartProps {
  data?: ChartData;
  title: string;
  type: 'bar' | 'radar';
}

const BenchmarkChart = ({ data, title, type }: BenchmarkChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Default data if none provided
  const defaultBarData = {
    labels: ['Model A', 'Model B', 'Model C', 'Model D', 'Model E'],
    datasets: [
      {
        label: 'Adversarial Robustness',
        data: [85, 72, 65, 90, 78],
        color: '#A07D54'
      }
    ]
  };
  
  const defaultRadarData = {
    labels: ['Prompt Injection', 'Data Leakage', 'Adversarial Attacks', 'Memory Loops', 'Privilege Escalation', 'Sanitization'],
    datasets: [
      {
        label: 'Current System',
        data: [85, 65, 75, 90, 70, 80],
        color: '#5D5646'
      },
      {
        label: 'Industry Average',
        data: [70, 60, 50, 65, 60, 55],
        color: '#3E5974'
      }
    ]
  };
  
  const chartData = data || (type === 'bar' ? defaultBarData : defaultRadarData);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // High-DPI fix
    const dpr = window.devicePixelRatio || 1;
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset any existing transforms
    ctx.scale(dpr, dpr);

    // Clear canvas
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    if (type === 'bar') {
      drawBarChart(ctx, chartData, displayWidth, displayHeight);
    } else if (type === 'radar') {
      drawRadarChart(ctx, chartData, displayWidth, displayHeight);
    }
  }, [chartData, type]);
  
  const drawBarChart = (ctx: CanvasRenderingContext2D, data: ChartData, width: number, height: number) => {
    const padding = 60;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    const barWidth = chartWidth / data.labels.length / 1.5;
    
    // Draw axes
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.strokeStyle = '#4D4C4B';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw y-axis labels and grid lines
    for (let i = 0; i <= 10; i++) {
      const y = height - padding - (i * chartHeight / 10);
      
      // Grid line
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.strokeStyle = 'rgba(77, 76, 75, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Label
      ctx.fillStyle = '#4D4C4B';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${i * 10}`, padding - 10, y);
    }
    
    // Draw bars and x-axis labels
    data.labels.forEach((label, i) => {
      const dataset = data.datasets[0];
      const x = padding + (i + 0.5) * (chartWidth / data.labels.length);
      const barHeight = (dataset.data[i] / 100) * chartHeight;
      
      // Bar
      ctx.fillStyle = dataset.color;
      ctx.fillRect(
        x - barWidth / 2,
        height - padding - barHeight,
        barWidth,
        barHeight
      );
      
      // Label
      ctx.fillStyle = '#4D4C4B';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(label, x, height - padding + 10);
      
      // Value
      ctx.fillStyle = '#4D4C4B';
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText(
        dataset.data[i].toString(),
        x,
        height - padding - barHeight - 5
      );
    });
  };
  
  const drawRadarChart = (ctx: CanvasRenderingContext2D, data: ChartData, width: number, height: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    // Ensure we have a positive radius by using Math.max to set a minimum value
    const radius = Math.max(20, Math.min(centerX, centerY) - 60);
    const angleStep = (Math.PI * 2) / data.labels.length;
    
    // Draw axes
    data.labels.forEach((label, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      // Axis line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = 'rgba(77, 76, 75, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Label
      ctx.fillStyle = '#4D4C4B';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = angle > Math.PI / 2 && angle < Math.PI * 1.5 ? 'right' : 'left';
      ctx.textBaseline = angle < 0 || angle > Math.PI ? 'bottom' : 'top';
      ctx.fillText(
        label,
        centerX + (radius + 20) * Math.cos(angle),
        centerY + (radius + 20) * Math.sin(angle)
      );
    });
    
    // Draw concentric circles
    for (let i = 1; i <= 5; i++) {
      const circleRadius = radius * (i / 5);
      
      // Ensure the circle radius is positive
      if (circleRadius <= 0) continue;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, circleRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(77, 76, 75, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Value label
      ctx.fillStyle = '#4D4C4B';
      ctx.font = '10px Inter, sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${i * 20}`, centerX - 5, centerY - circleRadius);
    }
    
    // Draw datasets
    data.datasets.forEach(dataset => {
      // Draw shape
      ctx.beginPath();
      data.labels.forEach((_, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const value = dataset.data[i] / 100;
        const x = centerX + radius * value * Math.cos(angle);
        const y = centerY + radius * value * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.closePath();
      ctx.fillStyle = `${dataset.color}40`;
      ctx.fill();
      ctx.strokeStyle = dataset.color;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw points
      data.labels.forEach((_, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const value = dataset.data[i] / 100;
        const x = centerX + radius * value * Math.cos(angle);
        const y = centerY + radius * value * Math.sin(angle);
        
        // Ensure we use a positive radius for the point
        const pointRadius = 4;
        ctx.beginPath();
        ctx.arc(x, y, pointRadius, 0, Math.PI * 2);
        ctx.fillStyle = dataset.color;
        ctx.fill();
      });
    });
  };
  
  return (
    <div className="benchmark-chart-container">
      <div className="benchmark-chart-title" style={{ fontWeight: 600, fontSize: 20, textAlign: 'center', marginBottom: 12, color: '#222' }}>{title}</div>
      <canvas ref={canvasRef} style={{ width: '100%', height: 400, display: 'block' }} />
    </div>
  );
};

export default BenchmarkChart;