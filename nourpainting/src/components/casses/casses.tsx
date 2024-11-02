import React, { useRef } from 'react';
import './casses.sass'; 
import WorkCell from "../../components/workcell/workcell";

interface WorkCellData {
  posterImg: string;
  name: string;
  title: string;
  videoSrc: string;
}

interface CasesProps {
  workCells: {
    [key: string]: WorkCellData;
  };
}

const Cases: React.FC<CasesProps> = ({ workCells }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Desktop Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      startX.current = e.clientX - sliderRef.current.offsetLeft;
      scrollLeft.current = sliderRef.current.scrollLeft;
      sliderRef.current.addEventListener('mousemove', handleMouseMove);
      sliderRef.current.addEventListener('mouseup', handleMouseUp);
      sliderRef.current.addEventListener('mouseleave', handleMouseUp);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (sliderRef.current) {
      const x = e.clientX - sliderRef.current.offsetLeft;
      const walk = (x - startX.current) * 2; // Adjust scroll speed
      sliderRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handleMouseUp = () => {
    if (sliderRef.current) {
      sliderRef.current.removeEventListener('mousemove', handleMouseMove);
      sliderRef.current.removeEventListener('mouseup', handleMouseUp);
      sliderRef.current.removeEventListener('mouseleave', handleMouseUp);
    }
  };

  // Mobile Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (sliderRef.current) {
      startX.current = e.touches[0].clientX - sliderRef.current.offsetLeft;
      scrollLeft.current = sliderRef.current.scrollLeft;
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (sliderRef.current) {
      const x = e.touches[0].clientX - sliderRef.current.offsetLeft;
      const walk = (x - startX.current) * 2; // Adjust scroll speed
      sliderRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handleTouchEnd = () => {
    if (sliderRef.current) {
      sliderRef.current.removeEventListener('touchmove', handleTouchMove);
      sliderRef.current.removeEventListener('touchend', handleTouchEnd);
    }
  };

  // Attach touch events
  React.useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener('touchmove', handleTouchMove as EventListener, { passive: true });
      sliderRef.current.addEventListener('touchend', handleTouchEnd as EventListener);
    }
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('touchmove', handleTouchMove as EventListener);
        sliderRef.current.removeEventListener('touchend', handleTouchEnd as EventListener);
      }
    };
  }, []);

  return (
    <div className="cases-con">
      <div
        className="slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {Object.values(workCells).map((cellData, index) => (
          <div className="slide" key={index}>
            <WorkCell
              posterImg={cellData.posterImg}
              name={cellData.name}
              title={cellData.title}
              videoSrc={cellData.videoSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cases;
