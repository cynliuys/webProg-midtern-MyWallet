import React, { Component } from 'react';
import { images } from './Image';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';


const styles = theme => ({
    root: {
        width: '100%',
    },
});


class Item extends React.Component{
    constructor(props) {
        super(props);
        if(this.props.children){
            this.detail = this.props.className+" - "+this.props.children;
        }
        else{
            this.detail = this.props.className;
        }
        if(this.props.gainOrPay === "pay"){
            let temp = this.props.money;
            this.money = "-$"+temp;
        }
        else{
            let temp = this.props.money;
            this.money = "$"+temp;
        }
        this.pic="";
    }

    init = () => {
        this.pic = images[this.props.className];
        if(this.props.children){
            this.detail = this.props.className+" - "+this.props.children;
        }
        else{
            this.detail = this.props.className;
        }
        if(this.props.gainOrPay === "pay"){
            let temp = this.props.money;
            this.money = "-$"+temp;
        }
        else{
            let temp = this.props.money;
            this.money = "$"+temp;
        }
        this.date = this.props.date.toString();
    }

    

    render(){
        const { classes } = this.props;
        this.init();
        return(
            <ListItem className="my-wallet__item">
                <Avatar>
                    <img src={this.pic} className="my-wallet__item-img" id={this.props.id}/>
                </Avatar>
                <ListItemText primary={this.detail} secondary={this.date} className={classes.root}/>
                <div className={this.props.gainOrPay+" my-wallet__item-money"} id={this.props.id}>
                    {this.money}
                </div>
            </ListItem>
        )
    }
}

Item.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Item);