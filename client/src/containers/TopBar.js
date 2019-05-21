import React, { Component } from 'react';


class TopBar extends React.Component{
    constructor(props) {
        super(props);
        this.totalBalance = '';
        this.monthlyBalance = '';
    }

    initTopBar =()=>{
        if(this.props.balanceList){
            if(this.props.balanceList.total>=0){
                this.totalBalance = "$ ";
                this.totalBalance += (this.props.balanceList.total).toString();
            }
            else{
                this.totalBalance = "-$ ";
                this.totalBalance += (this.props.balanceList.total*(-1)).toString();
            }
            if(this.props.balanceList.monthly>=0){
                this.monthlyBalance = "$ "
                this.monthlyBalance += (this.props.balanceList.monthly).toString();

            }
            else{
                this.monthlyBalance = "-$ ";
                this.monthlyBalance += (this.props.balanceList.monthly*(-1)).toString();

            }

        }
        else{
            this.totalBalance = "$ 0";
            this.monthlyBalance = "$ 0";
        }
    }

    render(){
        this.initTopBar();
        return (
            <div className="my-wallet__top-bar">
                <span className="my-wallet__balance" id="total">
                    <div className="balance_word"  id="total">Total Balance</div>
                    <div className="balance_money"  id="total">{this.totalBalance}</div>
                </span>
                <span className="my-wallet__balance" id="monthly">
                    <div className="balance_word"  id="monthly">Monthly Balance</div>
                    <div className="balance_money" id="monthly">{this.monthlyBalance}</div>
                </span>
            </div>
        );
    }
}

export default TopBar;
