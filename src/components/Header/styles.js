import styled from 'styled-components';

export const Container = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  margin-top: -3%;
  background-color: #1A202C; 
  box-shadow: 0 0 10px 2px;
  justify-content: space-between ;
  align-items: center;
  position: relative;
  z-index: 1;
  > svg {
    position: relative;
    color: white;
    width: 25px;
    height: 25px;
    margin-left: 5px;
    cursor: pointer;
    z-index: 1;
  }

  > img{
    position: relative;
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;
    
  }

  .titulo{
    display: flex;
    color: chocolate;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  
  }

  .banner3{
    position: absolute;
    width: 100%;
    height: 98%;
  }

`;

