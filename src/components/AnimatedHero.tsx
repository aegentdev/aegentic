
import { useEffect, useRef } from 'react';
import './AnimatedHero.css';

const AnimatedHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Grid properties
    const gridSpacing = 50;
    const nodeRadius = 1;
    const lineWidth = 0.5;
    
    // Colors
    const bronzeColor = '#A07D54';
    const oliveColor = '#5D5646';
    
    // Create grid points
    const createGrid = () => {
      const grid = [];
      const rows = Math.ceil(canvas.height / gridSpacing) + 2;
      const cols = Math.ceil(canvas.width / gridSpacing) + 2;
      
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          grid.push({
            x: x * gridSpacing,
            y: y * gridSpacing,
            originalX: x * gridSpacing,
            originalY: y * gridSpacing,
            vx: 0,
            vy: 0
          });
        }
      }
      
      return grid;
    };
    
    let grid = createGrid();
    
    // Animation properties - increased speed by adjusting these values
    const maxDistance = 200;
    const amplitude = 20; // Increased from 15
    const frequency = 0.004; // Increased from 0.002
    
    // Animation loop
    let animationFrameId: number;
    let time = 0;
    
    const animate = () => {
      time += 1.5; // Increased from 1 to make animation faster
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update grid points
      grid.forEach(point => {
        // Create wave effect - faster movement
        point.y = point.originalY + Math.sin(time * frequency + point.originalX * 0.01) * amplitude;
        point.x = point.originalX + Math.cos(time * frequency + point.originalY * 0.01) * amplitude * 0.5;
      });
      
      // Draw connections
      ctx.beginPath();
      ctx.strokeStyle = bronzeColor;
      ctx.lineWidth = lineWidth;
      
      for (let i = 0; i < grid.length; i++) {
        const pointA = grid[i];
        
        // Connect to nearby points
        for (let j = i + 1; j < grid.length; j++) {
          const pointB = grid[j];
          const dx = pointA.x - pointB.x;
          const dy = pointA.y - pointB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(160, 125, 84, ${opacity * 0.5})`;
            ctx.beginPath();
            ctx.moveTo(pointA.x, pointA.y);
            ctx.lineTo(pointB.x, pointB.y);
            ctx.stroke();
          }
        }
      }
      
      // Draw points
      grid.forEach(point => {
        ctx.beginPath();
        ctx.fillStyle = oliveColor;
        ctx.arc(point.x, point.y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="animated-hero-canvas" />;
};

export default AnimatedHero;