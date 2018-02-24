import React from "react";
import Link from "next/link";
import Button from "../buttons/HolaBtn";
export default ({ src, visible, right = false }) => {
  return (
    <div
      className="image"
      style={{
        backgroundImage: `url(${src})`
      }}
    >
      <div className={`welcome ${visible ? "anim" : ""}`}>
        welcome to <span>Terc design</span>
      </div>
      <div className={`text-wrap ${right ? "right" : ""}`}>
        <div className="text">
          <h1>добро пожаловать</h1>
          <p>
            <p>
              Мы занимаемся разработкой и проектированием мебели в{" "}
              <span>минималистическом стиле </span>
              для <span>современных домов</span>{" "}
            </p>
            <p>здесь вы найдете лучшие дизайнерские решения для вашего дома</p>{" "}
            <p>
              а также многофункциональные <span>мебель трансформеры</span>{" "}
              которые помогут рационально использовать каждый квадратный метр в
              вашем доме
            </p>
          </p>
          <div className="mt-5 d-flex justify-content-center">
            <Link href="/store">
              <div>
                <Button text="магазин" invert />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .text h1 {
          color: #fff;
        }
        .text p:first-letter {
          text-transform: uppercase;
        }
        .welcome {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 20px;
          color: #fff;
          text-transform: capitalize;
          font-size: 1.4em;
          font-weight: bold;
        }
        .welcome.anim {
          animation: fadeIn 2s ease-in-out 1;
        }
        .welcome span {
          color: #5bffee;
        }
        .text-wrap {
          perspective: 800px;
          position: absolute;
          left: 60px;
          width: 400px;
          top: 120px;
          z-index: 1;
        }
        .text-wrap.right {
          left: auto;
          right: 80px;
        }
        .text {
          transition: transform 0.5s ease-in-out;
          transform: rotateY(30deg);
          background: rgba(0, 0, 0, 0.5);
          border-radius: 20px;
          padding: 20px;
        }
        .text-wrap.right .text {
          transform: rotateY(-30deg);
        }
        .text-wrap:hover .text {
          transform: rotateY(0deg);
        }
        .text span {
          color: #5bffee;
        }
        .text p {
          font-weight: bold;
          color: #fff;
        }
        h1 {
          font-family: serif;
          text-transform: capitalize;
          font-weight: bold;
          font-size: 2em;
          color: #fff;
        }
        .image {
          position: absolute;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
