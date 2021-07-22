import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postMood, updateMood } from "../redux/MoodSubmitterSlice";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeActive } from "../redux/MoodSliderSlice";

function MoodSubmitter() {
  //const [theme, setTheme] = useState("inactive");
  //const [text, setText] = useState("Pick your mood");

  const moodFromSlice = useSelector((state) => state.mood);
  const sliderSlice = useSelector((state) => state.slider);

  const dispatch = useDispatch();

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
    console.log(
      "from slider, moodval is: " +
        moodFromSlice.mood.moodVal +
        " moodID is " +
        moodFromSlice.mood.moodId
    );
    //setTheme("active");
    //setText("Mood");
    dispatch(makeActive());

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
      console.log("updating mood....");
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
              sliderSlice.theme === "inactive" ? inactiveTheme : activeTheme
            }
          >
            <Typography id="discrete-slider" gutterBottom>
              {sliderSlice.text}
            </Typography>
            <Slider
              defaultValue={moodFromSlice.mood.moodVal}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              onChange={handleSlider}
            />
          </ThemeProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default MoodSubmitter;
