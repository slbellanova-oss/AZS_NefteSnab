"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0F172A'
    }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          .preloader-logo {
            animation: heartbeat 1s ease-in-out infinite !important;
            -webkit-animation: heartbeat 1s ease-in-out infinite !important;
          }
          .preloader-spinner {
            animation: spin 1s linear infinite !important;
            -webkit-animation: spin 1s linear infinite !important;
          }
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.15); }
          }
          @-webkit-keyframes heartbeat {
            0%, 100% { -webkit-transform: scale(1); }
            50% { -webkit-transform: scale(1.15); }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @-webkit-keyframes spin {
            0% { -webkit-transform: rotate(0deg); }
            100% { -webkit-transform: rotate(360deg); }
          }
        `
      }} />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px'
      }}>
        <Image
          src="/ЛоготипNew.png"
          alt="АЗС-НефтеСнаб"
          width={200}
          height={133}
          className="preloader-logo"
          priority
        />
        <div className="preloader-spinner" style={{
          width: '40px',
          height: '40px',
          border: '4px solid #D97706',
          borderTop: '4px solid transparent',
          borderRadius: '50%'
        }} />
      </div>
    </div>
  );
}
