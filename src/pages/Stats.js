import React from 'react';
import DrawerLeft from '../components/Drawer.js';
import Phone from '../assets/phone4.png';
import { rows } from '../utilities/CreateData.js';
import '../styles/Phone.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { statsStyles } from '../themes/Theme.js';




export default function Stats() {
  const classes = statsStyles();
  return (
    <div className="Phone">
      <div className="Phone__container">
        <div className="Phone__container__wrapper">
          <img className="Phone__container__wrapper__phone" src={Phone} alt="phone" />
          <div className="Phone__container__wrapper__inner">
            <DrawerLeft page="Stats" />
            <div className="Phone__container__wrapper__inner__content--stats">
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell tabIndex="0" >Stats</TableCell>
                      <TableCell tabIndex="0" align="left">Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.stat}>
                        <TableCell tabIndex="0" component="th" scope="row">
                          {row.stat}
                        </TableCell>
                        <TableCell tabIndex="0" className={classes.value} align="left">{row.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
