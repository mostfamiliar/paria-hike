import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: 'Jan',
  },
  {
    value: 10,
    label: 'Feb',
  },
  {
    value: 20,
    label: 'Mar',
  },
  {
    value: 30,
    label: 'Apr',
  },
  {
    value: 40,
    label: 'May',
  },
  {
    value: 50,
    label: 'Jun',
  },
  {
    value: 60,
    label: 'Jul',
  },
  {
    value: 70,
    label: 'Aug',
  },
  {
    value: 80,
    label: 'Sept',
  },
  {
    value: 90,
    label: 'Oct',
  },
  {
    value: 100,
    label: 'Nov',
  },
  {
    value: 110,
    label: 'Dec',
  },
];

export default function ProgressMobileStepper(props) {
  const classes = useStyles();


  const findMonth = value => {
    const dictionary = {0: 1, 10: 2, 20: 3, 30: 4, 40: 5, 50: 6, 60: 7, 70: 8, 80: 9, 90: 10, 100: 11, 110: 12};
    props.updateMonth(dictionary[value])
  }


  return (
    <div className={classes.root}>
      <Typography id="track-false-slider" gutterBottom>
      </Typography>
      <Slider
        track={false}
        step={null}
        aria-labelledby="track-false-slider"
        defaultValue={0}
        onChange={(event, val) => findMonth(val)}
        max={110}
        marks={marks}
      />
    </div>
  );
}
