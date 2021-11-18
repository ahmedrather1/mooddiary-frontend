import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getInitialMood,
  postMood,
  updateMood,
} from "../redux/MoodSubmitterSlice";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

function MoodSubmitter() {
  const dispatch = useDispatch();

  const moodFromSlice = useSelector((state) => state.mood);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let midnightBegin = new Date();
    midnightBegin.setHours(0, 0, 0);
    let midnightBeginJson = midnightBegin.toJSON();

    let midnightEnd = new Date();
    midnightEnd.setHours(23, 59, 59);
    let midnightEndJson = midnightEnd.toJSON();

    let input = {
      path:
        process.env.REACT_APP_API_URL +
        "?" +
        "createdFrom=" +
        midnightBeginJson +
        "&" +
        "createdTo=" +
        midnightEndJson,
      body: null,
    };
    dispatch(getInitialMood(input));
  }, []);

  // this functionality to not show initial moodSubmitter state needs to be fixed
  useEffect(() => {
    if (moodFromSlice === null) {
      return;
    }
    setLoading(false);
  }, [moodFromSlice]);

  const activeTheme = createTheme({
    palette: {
      primary: {
        main: "#00bcd4",
      },
    },
  });

  const inactiveTheme = createTheme({
    palette: {
      primary: {
        main: "#616161",
      },
    },
  });

  const handleSlider = (event, val) => {
    if (moodFromSlice.mood.moodId === null) {
      let postPayload = {
        path: process.env.REACT_APP_API_URL,
        body: {
          mood: val,
          date: new Date(),
        },
      };
      dispatch(postMood(postPayload));
    } else {
      let updatePayload = {
        path: process.env.REACT_APP_API_URL + "/" + moodFromSlice.mood.moodId,
        body: {
          mood: val,
          date: new Date(),
        },
      };
      dispatch(updateMood(updatePayload));
    }
  };

  return (
    <Container>
      <Row className="text-center mt-5">
        <Col className="col-12">
          <ThemeProvider
            theme={
              moodFromSlice.mood.modified === false
                ? inactiveTheme
                : activeTheme
            }
          >
            {!loading && (
              <>
                <Typography id="discrete-slider" gutterBottom>
                  {moodFromSlice.mood.modified === false ? "Pick mood" : "Mood"}
                </Typography>

                <Slider
                  key={`slider-${moodFromSlice.mood.moodVal}`}
                  defaultValue={moodFromSlice.mood.moodVal}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={10}
                  onChange={handleSlider}
                />
              </>
            )}
          </ThemeProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default MoodSubmitter;
