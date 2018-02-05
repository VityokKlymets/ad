import css from "styled-jsx/css";
const logoColor = 'rgb(37, 52, 95);';
const logoTextColor = 'rgb(37, 52, 95)'
const invertLogoColor = '#fff'
export default css`
  .logo {
    display: flex;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.3em;
    cursor: pointer;
    color: rgb(65, 100, 196);
    font-weight: bold;
    position: absolute;
    left: 2%;
    top: 5px;
    text-transform: uppercase;
    align-items: center;
    border-radius: 5px;
    z-index: 3;
    color : ${logoTextColor};
  }
  .logo svg {
    width: 40px;
    height: 40px;
    fill: ${logoColor};
  }
  .menu {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 6%;
    border-left: 1px solid rgb(37, 52, 95);
    display: flex;
    flex-direction: column;
    background: #fff;
    z-index: 3;
  }
  .menu .menu-icon {
    cursor: pointer;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgb(37, 52, 95);
    background: #fff;
  }
  .menu .menu-icon:hover {
    background: rgb(37, 52, 95);
  }
  .invert .logo svg{
      fill : ${invertLogoColor};
  }
  .menu .menu-icon:hover svg {
    fill: #fff;
  }
  .menu .menu-icon svg {
    width: 30px;
    height: 30px;
    fill: rgb(37, 52, 95);
  }
`;
