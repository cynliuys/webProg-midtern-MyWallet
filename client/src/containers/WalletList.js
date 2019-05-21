import React, { Component } from 'react';
import x from '../img/x.png'
import Item from '../component/Item';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    dividerFullWidth: {
      margin: `5px 0 0 ${theme.spacing.unit * 2}px`,
    },
    dividerInset: {
      margin: `5px 0 0 ${theme.spacing.unit * 9}px`,
    },
  });


class WalletList extends React.Component{
    constructor(props) {
        super(props);

        this.dataList = [];
        this.HTML = [];
    }

    initList =()=>{
        const { classes } = this.props;
        this.HTML = [];
        if(this.props.dataList) {this.dataList = this.props.dataList;}
        else{this.dataList =[];}
        console.log("initList");
        for(let i=this.dataList.length-1 ; i>0; i--){
            let target = {};
            target = this.dataList[i];
            console.log(target);
            this.HTML.push(<Item id={target["id"]} className={target["type"]} money={target["money"]} 
                            gainOrPay={target["gainOrPay"]} date={target["date"]} key={i}>
                            {target["detail"]}</Item>);
        }
    }
    
    render(){
        const { classes } = this.props;
        this.initList();
        return (
            <List className={"my-wallet__list"}>
                    {this.HTML}
            </List>
        )
    }
}


WalletList.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(WalletList);
  


/*
                    <Item id="0" className="eat" money="-$100" gainOrPay="pay">cola</Item>
                    <Item id="1" className="eat" money="-$100" gainOrPay="pay">ica cream</Item>
                    <Item id="2" className="work" money="$100" gainOrPay="gain"></Item>
                    <Item id="3" className="eat" money="-$100" gainOrPay="pay"></Item>
                    <Item id="4" className="eat" money="-$100" gainOrPay="pay"></Item>
                    <Item id="5" className="eat" money="-$100" gainOrPay="pay"></Item>
                    <Item id="6" className="eat" money="-$100" gainOrPay="pay"></Item>
                    <Item id="7" className="eat" money="-$100" gainOrPay="pay"></Item>
                    <Item id="8" className="eat" money="-$100" gainOrPay="pay"></Item>
                    */