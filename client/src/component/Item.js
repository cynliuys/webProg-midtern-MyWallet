import React, { Component } from 'react';
import { classify } from './Class';
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
      fontSize : '80px'
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
    }

    init = () => {
        this.pic = classify(this.props.className);
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



            // <li className="my-wallet__item item-pay" id={this.props.id}>
            //     <img src={this.pic} className="my-wallet__item-img" id={this.props.id}/>
            //     <div className="my-wallet__item-detail" id={this.props.id}>
            //         {this.detail}
            //     </div>
            //     <div className={this.props.gainOrPay+" my-wallet__item-money"} id={this.props.id}>
            //         {this.money}
            //     </div>
            // </li>
        )
    }
}

Item.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Item);