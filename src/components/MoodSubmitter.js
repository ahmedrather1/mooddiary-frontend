import React from "react";
import { Dropdown, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postMood, updateMood } from "../redux/MoodSubmitterSlice";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

function MoodSubmitter() {
  //const [mood, setMood] = useState();

  const moodFromSlice = useSelector((state) => state.mood);
  const dispatch = useDispatch();

  // not sure what this does
  function valuetext(value) {
    return `${value}`;
  }

  const handleSlider = (event, val) => {
    console.log(
      "from slider, moodval is: " +
        moodFromSlice.mood.moodVal +
        " moodID is " +
        moodFromSlice.mood.moodId
    );
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
          <Typography id="discrete-slider" gutterBottom>
            Mood
          </Typography>
          <Slider
            defaultValue={moodFromSlice.mood.moodVal}
            //getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
            onChange={handleSlider}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MoodSubmitter;
