import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
  p {
    font-size: 13px;
    color: #b8b8d4;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #16195c;
    margin: 30px 0;
  }


  button {
    background-color: #25cd89;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
  }

  .backButton {
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    color: #b8b8d4;
  }
`;

export const Info = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: #fff;
  margin-right: 10px;
`;

export const Description = styled.div`
  font-size: 15px;
  color: #b8b8d4;
  font-weight: bold;
`;