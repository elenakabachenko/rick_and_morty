import * as React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

const Img = styled('img')({
  borderRadius: '50%',
  marginBottom: 16,
  width: 100
});

const Name = styled('div')({
  textAlign: 'center',
  color: '#262626'
});

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
}

const Character = ({ id, name, image }) => {
  return <Link style={containerStyle} to={`/${id}`}>
    <Img src={image}/>
    <Name>{name}</Name>
  </Link>
}


export default Character;

