import css from "styled-jsx/css";

export default css`
  .posters {
    display: flex;
    flex-direction: row;
    width: 100vh;
  }
  .poster {
    width: 100vw;
  }
  .poster-gui .poster-button {
    margin: 0 5px;
  }
  .poster-gui .poster-btn-wrapper {
    flex-direction: row;
    bottom: 2%;
    left: 2%;
    padding: 5px 15px;
  }
  .poster-gui .arrow.active svg {
    opacity: 1;
    fill: rgb(0, 0, 0);
  }
  .poster-gui .arrow svg {
    fill: rgb(73, 73, 73);
    opacity: 0.4;
    width: 50px;
  }
  .poster-gui .arrow:first-child::after {
    content: "";
    display: block;
    border-bottom: 2px solid #000;
  }
  .poster-gui .arrow {
    right: 8%;
    bottom: 2%;
  }
`;
