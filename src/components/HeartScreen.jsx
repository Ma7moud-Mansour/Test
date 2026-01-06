import { useEffect, useState } from 'react';

export default function HeartScreen({ name }) {
    const [showName, setShowName] = useState(false);
    const [fillHeart, setFillHeart] = useState(false);

    useEffect(() => {
        // Start filling the heart after drawing completes (e.g., 2s)
        const fillTimer = setTimeout(() => setFillHeart(true), 2000);
        // Show name slightly after fill starts
        const nameTimer = setTimeout(() => setShowName(true), 2500);

        return () => {
            clearTimeout(fillTimer);
            clearTimeout(nameTimer);
        };
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <svg
                    width="400"
                    height="400"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M50 88.9L44.2 83.6C23.6 64.9 10 52.6 10 37.5C10 25.2 19.7 15.5 32 15.5C38.9 15.5 45.6 18.7 50 23.8C54.4 18.7 61.1 15.5 68 15.5C80.3 15.5 90 25.2 90 37.5C90 52.6 76.4 64.9 55.8 83.6L50 88.9Z"
                        stroke="#ff4d6d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{
                            strokeDasharray: 250,
                            strokeDashoffset: 250,
                            animation: 'drawHeart 2s ease-out forwards',
                            fill: fillHeart ? '#ff4d6d' : 'transparent',
                            transition: 'fill 0.5s ease-in-out'
                        }}
                    />
                </svg>
                <div style={{
                    ...styles.name,
                    opacity: showName ? 1 : 0,
                    transform: showName ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.5)'
                }}>
                    {name}
                </div>
            </div>

            <style>{`
        @keyframes drawHeart {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
        </div>
    );
}

const styles = {
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    content: {
        position: 'relative',
        width: '400px', // Match SVG width
        height: '400px', // Match SVG height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        animation: 'pulse 2s infinite ease-in-out',
        animationDelay: '3s', // Start pulsing after drawing and filling
    },
    name: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 10,
        color: 'white',
        fontSize: '3rem',
        fontWeight: '800',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        textAlign: 'center',
        width: '100%',
        pointerEvents: 'none',
    }
};
