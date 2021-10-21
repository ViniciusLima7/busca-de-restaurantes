import React from 'react'
import styled from 'styled-components';


export const Card = styled.div`
  min-width: 90px;
  height: 90px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  p {
    margin-left: 6px;
    margin-top: 10px;
  }
`;

const Title = styled.span`
font-family: ${(props) => props.theme.fonts.regular};
color: #FFF;
font-size: 16px;

`;

const ImageCard = ({ photo, title }) => {
    return (
        <Card photo={photo} >
            <Title>{title}</Title>
        </Card>

    );
}



export default ImageCard;