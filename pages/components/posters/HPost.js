import React from "react";
import Button from "../buttons/HolaBtn";
import Link from "next/link";
export default () => {
  return (
    <div className="hpost">
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-8 col-sm-12 ">
          <div className="text">
            <h1>добро пожаловать</h1>
            <div>
              <p>
                Мы занимаемся разработкой и проектированием мебели в{" "}
                <span>минималистическом стиле </span>
                для <span>современных домов</span>{" "}
              </p>
              <p>
                здесь вы найдете лучшие дизайнерские решения для вашего дома
              </p>{" "}
              <p>
                а также многофункциональные <span>мебель трансформеры</span>{" "}
                которые помогут рационально использовать каждый квадратный метр
                в вашем доме
              </p>
            </div>
            <div className="mt-3 d-flex justify-content-center">
              <Link href="/store">
                <div>
                  <Button text="магазин" invert />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        h1 {
          color: #333;
        }
        .text {
          color: #000;
          font-size: 1.2em;
          background: rgba(255, 255, 255, 0.7);
          padding: 20px;
          border-radius: 20px;
        }
        .text p {
          text-shadow: 1px 2px 2px rgba(255, 255, 255, 0.5);
          margin: 5px 0;
        }
        .text p:first-letter {
          font-size: 1.4em;
          text-transform: uppercase;
          color: #000f28;
        }
        .text p span {
          color: #1c1603;
          text-decoration: underline;
        }
        .hpost {
          display: flex;
          padding: 60px 80px 100px 50px;
          width: 100%;
          height: 100%;
          background-image: url("/static/images/interer-villa-gostinaia-chicago-loft.jpg");
          background-repeat: no-repeat;
          background-size: cover;
        }
        @media (max-width: 768px) {
          h1{
            text-align-left;
            margin: 0;
          }
          .hpost{
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};
