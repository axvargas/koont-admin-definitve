import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
// import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider
} from '@material-ui/core';
// import PersonIcon from '@material-ui/icons/Person';
// import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import RefreshIcon from '@material-ui/icons/Refresh';
import { createMuiTheme } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '460px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: theme.palette.icon
  }
}));

const colores = createMuiTheme({
  palette: {
    color1: '#3f51b5',
    color2: '#8bc34a',
    color3: '#e91e63',
    color4: '#009688',
    color5: '#ff9800',
  },
});

const ActiveInactiveAdmins = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [80, 20,10,20,40],
        backgroundColor: [
          colores.palette.color1,
          colores.palette.color2,
          colores.palette.color3,
          colores.palette.color4,
          colores.palette.color5,
        ],
        borderWidth: 4,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white,
      }
    ],
    labels: ['Activos', 'Inactivos','Tag3','Tag4', 'Tag5']
  };

  const options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
    },
    legend: { 
      display: true,
      position: 'bottom',
    },
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary
    }
  };

  // const devices = [

  //   {
  //     title: 'Activos',
  //     value: '80',
  //     icon: <PersonIcon />,
  //     color: theme.palette.primary.main
  //   },
  //   {
  //     title: 'Inactivos',
  //     value: '20',
  //     icon: <PermIdentityIcon />,
  //     color: theme.palette.error.main
  //   },
  // ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <IconButton size="small">
            <RefreshIcon />
          </IconButton>
        }
        title="5 Tags más populares"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Doughnut
            data={data}
            options={options}
          />
        </div>
        {/* <div className={classes.stats}>
          {devices.map(device => (
            <div
              className={classes.device}
              key={device.title}
            >
              <span className={classes.deviceIcon}>{device.icon}</span>
              <Typography variant="body1">{device.title}</Typography>
              <Typography
                style={{ color: device.color }}
                variant="h2"
              >
                {device.value}%
              </Typography>
            </div>
          ))}
        </div> */}
      </CardContent>
    </Card>
  );
};

ActiveInactiveAdmins.propTypes = {
  className: PropTypes.string
};

export default ActiveInactiveAdmins;