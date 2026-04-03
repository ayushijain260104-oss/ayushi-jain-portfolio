import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

interface PhysicsFallingTextProps {
  text: string;
  trigger?: 'auto' | 'hover' | 'click';
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  mouseConstraint?: boolean;
  fontSize?: string;
  className?: string;
  textColor?: string;
  fontFamily?: string;
}

const PhysicsFallingText = ({
  text,
  trigger = 'auto',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 0.2, // Slower default gravity
  mouseConstraint = true,
  fontSize = '24px',
  className = '',
  textColor = '#0F172A',
  fontFamily = '"Cormorant Garamond", serif', // Elegant default font
}: PhysicsFallingTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const {
      Engine,
      Render,
      Runner,
      World,
      Bodies,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;

    const engine = Engine.create();
    engine.gravity.y = gravity;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    const render = Render.create({
      element: container,
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes: wireframes,
      },
    });

    const runner = Runner.create();

    // Boundaries
    const ground = Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true });
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true });
    const topWall = Bodies.rectangle(width / 2, -25, width, 50, { isStatic: true });

    World.add(engine.world, [ground, leftWall, rightWall, topWall]);

    // Create text bodies
    const words = text.split(' ');
    const bodies: Matter.Body[] = [];

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    ctx.font = `${fontSize} ${fontFamily}`;
    
    let currentX = 50;
    let currentY = 50;

    words.forEach((word, index) => {
      const metrics = ctx.measureText(word);
      const wordWidth = metrics.width + 10;
      const wordHeight = parseInt(fontSize) + 10;

      if (currentX + wordWidth > width - 50) {
        currentX = 50;
        currentY += wordHeight + 20;
      }

      const body = Bodies.rectangle(currentX + wordWidth / 2, currentY, wordWidth, wordHeight, {
        restitution: 0.4,
        friction: 0.1,
        frictionAir: 0.05, // Slows down the fall significantly
        render: {
          fillStyle: 'transparent',
          strokeStyle: 'transparent',
        },
      });

      (body as any).word = word;
      (body as any).opacity = 0; // Start invisible
      (body as any).delay = index * 100; // Staggered entrance
      bodies.push(body);
      currentX += wordWidth + 15;
    });

    if (trigger === 'auto') {
      World.add(engine.world, bodies);
    }

    // Custom rendering for text with fade-in
    Events.on(render, 'afterRender', () => {
      const context = render.context;
      context.font = `${fontSize} ${fontFamily}`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';

      bodies.forEach((body) => {
        const { x, y } = body.position;
        const angle = body.angle;
        const word = (body as any).word;
        
        // Handle fade-in
        if ((body as any).opacity < 1) {
          (body as any).opacity += 0.01;
        }

        context.save();
        context.translate(x, y);
        context.rotate(angle);
        context.globalAlpha = (body as any).opacity;
        context.fillStyle = textColor;
        context.fillText(word, 0, 0);
        context.restore();
      });
    });

    // Mouse constraint
    if (mouseConstraint) {
      const mouse = Mouse.create(render.canvas);
      const mouseConstraintObj = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });
      World.add(engine.world, mouseConstraintObj);
      render.mouse = mouse;
    }

    Render.run(render);
    Runner.run(runner, engine);

    const handleResize = () => {
      if (!containerRef.current) return;
      const { width: newWidth, height: newHeight } = containerRef.current.getBoundingClientRect();
      render.options.width = newWidth;
      render.options.height = newHeight;
      canvasRef.current!.width = newWidth;
      canvasRef.current!.height = newHeight;
      Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight + 25 });
      Matter.Body.setPosition(rightWall, { x: newWidth + 25, y: newHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      World.clear(engine.world, false);
      window.removeEventListener('resize', handleResize);
    };
  }, [text, trigger, backgroundColor, wireframes, gravity, mouseConstraint, fontSize, textColor]);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-full min-h-[200px] cursor-grab active:cursor-grabbing ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default PhysicsFallingText;
