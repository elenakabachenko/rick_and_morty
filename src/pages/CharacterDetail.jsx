import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCharacter} from "../actions/characters";
import {Typography, Box, Divider, Grid} from "@mui/material";
import styled from "@emotion/styled";

const Root = styled('div')({
  padding: 16,
  margin: "0px auto"
});

const Img = styled('img')({
  maxWidth: "100%",
  width: "100%"
});

export const CharacterDetail = () => {
  let {id} = useParams();
  const dispatch = useDispatch();
  const char = useSelector(({characters}) => characters.current);

  useEffect(() => {
    dispatch(getCharacter(id));
  }, [dispatch, id]);

  return <Root>
    <Box sx={{width: '100%', maxWidth: 724, margin: "0 auto"}}>
      <Typography variant="h3" gutterBottom>
        {char.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {char.status}
      </Typography>
      <Divider sx={{ margin: "24px 0" }}/>

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Img src={char.image} alt={char.name}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1">
            {char.species}
          </Typography>
          <Typography variant="body1">
            {char.gender}
          </Typography>
          <Typography variant="body1">
            {char?.origin?.name}
          </Typography>
          <Typography variant="body1">
            {char?.location?.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Number of episodes: {(char.episode || []).length}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Root>
}
