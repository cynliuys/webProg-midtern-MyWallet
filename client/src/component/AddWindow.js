import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';

function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
  }
  
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};



export const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textFirst: {
        display: 'flex',
        margin: 'auto',
        width: 300,
    },
    textSecond: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 600,
    },
    formFirst: {

    },
    formSecond: {
        display: 'flex',
        margin: 'auto',
        width: 550,
    },

    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
});
export const maptable = [
    {
      value: 'gain',
      label: 'Income',
    },
    {
      value: 'pay',
      label: 'Expenses',
    },
];




class AddWindow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            type : 'eat',
            detail: '',
            money: 0,
            gainOrPay: 'pay',
            date : 0,
            value: 0,
        };
    }
    
      handleChangeBar = (event, v) => {
        let temp = "";
        console.log("v : ", v);/////////////////////
        if(v === 0){temp = "pay";}
        else{ temp = "gain;";}
        this.setState({
            value : v,
        gainOrPay : temp
        });
      };
    
      handleChangeIndex = index => {
        console.log("index : ", index);/////////////////////
        let temp = "";
        if(index === 0){temp = "pay";}
        else{ temp = "gain;"}
        this.setState({
            value: index,
            gainOrPay : temp
        });
      };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render(){
        const { classes, theme } = this.props;
        return(
            <Dialog
                open={this.props.open}
                onClose={this.handleClose}
                maxWidth='sm' fullWidth={true}
            >
                <DialogContent>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChangeBar}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Expenses" />
                        <Tab label="Income" />
                    </Tabs>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.value}
                        onChangeIndex={this.handleChangeIndex}
                    >
                        <TabContainer dir={theme.direction}>Item One</TabContainer>
                        <TabContainer dir={theme.direction}>Item Two</TabContainer>
                    </SwipeableViews>

                    <TextField
                        required
                        id="money"
                        label="Amount"
                        className={classes.textFirst}
                        onChange={this.handleChange('money')}
                        margin="normal"
                        variant="outlined"
                    />
                    <form className={classes.formSecond}>
                    
                        <TextField
                            id="type"
                            required
                            select
                            label="Type"
                            className={classes.textSecond}
                            value={this.state.type}
                            onChange={this.handleChange('type')}
                            margin="normal"
                            variant="outlined"
                        >
                            <MenuItem key="Eat" value="Eat"> Eat </MenuItem>
                            <MenuItem key="Snack" value="Snack"> Snack </MenuItem>
                            <MenuItem key="Beverage" value="Beverage"> Beverage </MenuItem>
                            <MenuItem key="Daily" value="Daily"> Daily </MenuItem>
                            <MenuItem key="Transportation" value="Transportation"> Transportation </MenuItem>
                            <MenuItem key="Exercise" value="Exercise"> Exercise </MenuItem>
                            <MenuItem key="Movie" value="Movie"> Movie </MenuItem>
                            <MenuItem key="Leisure" value="Leisure"> Leisure </MenuItem>
                            <MenuItem key="Study" value="Study"> Study </MenuItem>
                            <MenuItem key="Medical" value="Medical"> Medical </MenuItem>
                            <MenuItem key="Other" value="Other"> Other </MenuItem>
                            <MenuItem key="Work" value="Work"> Work </MenuItem>
                            <MenuItem key="Interest" value="Interest"> Interest </MenuItem>

                        </TextField>

                        <TextField
                            required
                            id="date"
                            label="Date"
                            className={classes.textSecond}
                            onChange={this.handleChange('date')}
                            margin="normal"
                            variant="outlined"
                            placeholder="YYYYMMDD"
                        />

                        <TextField
                            id="detail"
                            label="Detail"
                            className={classes.textSecond}
                            onChange={this.handleChange('detail')}
                            margin="normal"
                            variant="outlined"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>this.props.close()} color='default'>
                        Cancel
                    </Button>
                    <Button onClick={
                        () => this.props.postNewItem(this.state)
                    } color='default'>
                        Finish
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

}

AddWindow.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
  
export default withStyles(styles, { withTheme: true })(AddWindow);