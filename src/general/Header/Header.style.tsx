import styled from 'styled-components';

export const LogoContainer = styled.div`
  .logo-wrapper {
    background: pink;
    .bar {
      width: 100%;
      max-height: 60px;
      min-height: 60px;
      height: 60px;
      background-color: #28a745;
      position: relative;
      .logo {
        &::after {
          position: absolute;
          content: ' ';
          height: 0;
          width: 0;
          border-width: 20px 50px;
          border-style: solid;
          border-color: #28a745 transparent transparent #28a745;

          right: 0;
          bottom: -40px;
          z-index: -20;
        }

        margin: -8px;

        position: absolute;
        width: 200px;
        min-height: 90px;
        max-height: 90px;
        padding: 15px 15px 0 15px;
        background: #28a745;
        left: 50%;
        margin-left: -100px;

        &::before {
          position: absolute;
          content: ' ';
          height: 0;
          width: 0;
          margin: 0;
          border-width: 20px 51px;
          //   border-width: 20px 50px;
          border-style: solid;
          border-color: #28a745 #28a745 transparent transparent;

          left: 0;
          bottom: -40px;
          z-index: -20;
        }

        a {
          position: relative;
          color: #28a745;
          &::after {
            content: ' ';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 5px 10px;
            position: absolute;
            top: -15px;
            left: -33px;
            border-color: transparent #247e39 #247e39 transparent;
            z-index: -1;
          }

          .img-container {
            width: 70px;
          }

          .heading {
            margin-top: -15px;

            h5 {
              font-size: 16px;
              font-weight: 900;
              margin-bottom: 1.2px;
              color: orange;
              letter-spacing: 0.115em;
            }

            p {
              font-size: 8px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.2rem;
            }
          }

          &::before {
            content: ' ';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 5px 10px;
            position: absolute;
            top: -15px;
            left: 185px;
            border-color: transparent transparent #247e39 #247e39;
            z-index: -1;
          }
        }
      }
    }
  }
`;
