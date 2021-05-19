import React from 'react';
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
    value: 8,
    label: 'Feb',
  },
  {
    value: 16,
    label: 'Mar',
  },
  {
    value: 24,
    label: 'Apr',
  },
  {
    value: 32,
    label: 'May',
  },
  {
    value: 40,
    label: 'Jun',
  },
  {
    value: 48,
    label: 'Jul',
  },
  {
    value: 58,
    label: 'Aug',
  },
  {
    value: 68,
    label: 'Sept',
  },
  {
    value: 78 ,
    label: 'Oct',
  },
  {
    value: 90,
    label: 'Nov',
  },
  {
    value: 100,
    label: 'Dec',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function ProgressMobileStepper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="track-false-slider" gutterBottom>
      </Typography>
      <Slider
        track={false}
        aria-labelledby="track-false-slider"
        getAriaValueText={valuetext}
        defaultValue={30}
        marks={marks}
      />
    </div>
  );
}
