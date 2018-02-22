import React from "react";
import Link from "next/link";
const logoColor = "rgb(37, 52, 95);";
const logoTextColor = "rgb(37, 52, 95)";
export default ({ animate }) => {
  return (
    <Link href="/">
      <div className={`logo ${animate ? "animate" : ""}`}>
        <span>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13C15,12.45 14.55,12 14,12H8V10H10C10.55,10 11,9.55 11,9V7H13C14.1,7 15,6.1 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16C9,17.1 9.9,18 11,18M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z" />
          </svg>
        </span>
        <div>
          <div>terc</div>
          <div>design</div>
        </div>
        <style jsx>{`
        .logo {
          display: flex;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-size: 1em;
          cursor: pointer;
          color: rgb(65, 100, 196);
          font-weight: bold;
          position: absolute;
          left: 10px
          top: 5px;
          text-transform: uppercase;
          align-items: center;
          border-radius: 5px;
          z-index: 3;
          color: ${logoTextColor};
        }
        .logo.animate svg{
            animation : spin 1s ease-in-out infinite;
        }
        .logo svg {
          width: 40px;
          height: 40px;
          fill: ${logoColor};
        }
        @keyframes spin {
          from {
            transform: rotateZ(0deg);
          }
          to {
            transform: rotateZ(360deg);
          }
        }
      `}</style>
      </div>
    </Link>
  );
};
