import { useSelector, useDispatch } from "react-redux";
import {
  increaseCount,
  decreaseCount,
  getLatestNews,
  getNews,
} from "./redux/actions/actionCreator";
import { Button, Container, Typography, Box } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import News from "./components/News";

const App = () => {
  const count = useSelector((store) => store.counter.count);
  const latestNews = useSelector((store) => store?.news?.latestNews || []);
  const popularNews = useSelector((store) => store?.news?.popularNews || []);

  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  const handleDecrease = () => {
    dispatch(decreaseCount());
  };

  const handleNews = () => {
    dispatch(getNews());
  };

  return (
    <Container maxWidth={"1280px"} sx={{ p: 3, textAlign: "center" }}>
      <Typography variant='h2' textTransform={"capitalize"}>
        redux-saga {count}
      </Typography>
      <Box>
        <Button
          onClick={handleIncrease}
          variant='contained'
          sx={{ width: 150, py: 2, mr: 2 }}
        >
          <Add fontSize='large' />
        </Button>
        <Button
          onClick={handleDecrease}
          variant='contained'
          color='error'
          sx={{ width: 150, py: 2 }}
        >
          <Remove fontSize='large' />
        </Button>
      </Box>
      <Button
        onClick={handleNews}
        variant='contained'
        color='secondary'
        sx={{ my: 4, py: 2 }}
      >
        <Typography variant='h4'>Get News</Typography>
      </Button>
      <News news={latestNews} title='Latest News' />
      <News news={popularNews} title='Popular News' />
    </Container>
  );
};

export default App;
