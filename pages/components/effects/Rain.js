import React from 'react'

export default () => {
  return (
   <div>
       <style jsx>{`
        div{
            transition: opacity 1s ease-in-out;
            position: absolute;
            top : 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index : 4;
            background: url('/static/images/rain-drops-hi.png');
            background-size : 15%;
            animation: rain 4s linear infinite;
            @keyframes rain {
                0% {background-position: 0% 0%;}
                100% {background-position: 0% 100%;}
            }            
            }
            div:hover{
                opacity: 0;
            }
       `}</style>
   </div>
  )
}