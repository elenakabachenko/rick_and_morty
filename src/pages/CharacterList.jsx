import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {listCharacters} from "../actions/characters";
import Character from "../components/Character";
import {Grid, Pagination, CircularProgress} from "@mui/material";
import {useSearchParams} from "react-router-dom";

export const CharacterList = () => {
  const dispatch = useDispatch();
  const {list, pages, loading} = useSelector(({characters}) => characters);
  let [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') || 1

  useEffect(() => {
    dispatch(listCharacters(page));
  }, [dispatch, page]);

  return loading
    ? <CircularProgress sx={{margin: "64px auto", display: "flex"}}/>
    : <Fragment>
        <Grid container spacing={2} sx={{width: '100%', maxWidth: 724, bgcolor: 'background.paper', margin: "32px auto 0"}}>
          {list.map(item => <Grid key={item.id} item xs={12} md={3}><Character data-testid="" {...item}/></Grid>)}
        </Grid>
        <Pagination sx={{margin: "32px auto", display: "flex", justifyContent: "center"}}
                    count={pages}
                    page={parseInt(page)}
                    onChange={(e, page) => setSearchParams({page})}/>
    </Fragment>
}