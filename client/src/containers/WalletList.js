import React, { Component } from 'react';
import Item from '../component/Item';
import List from '@material-ui/core/List';
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