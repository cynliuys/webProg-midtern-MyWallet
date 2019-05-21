import React, { Component } from 'react';
import TopBar from './TopBar';
import WalletList from './WalletList';
import Footer from './Footer';


class Main extends React.Component{
    constructor(props) {
        super(props);
        this.balance = [];
    }

    splitData = () => {
        if(this.props.dataGroup){
            console.log(this.props.dataGroup);
            this.balance = this.props.dataGroup[0];
        }
        else{
            this.balance = [];
        }
    }

    render(){
        this.splitData();
        return(
            <div className="my-wallet__main">
                <TopBar balanceList={this.balance}/>
                <WalletList dataList={this.props.dataGroup}/>
                <Footer month={this.props.month} nextMonth={this.props.nextMonth} preMonth={this.props.preMonth}
                    handleClick={(command) => this.props.handleClick(command)}/>
            </div>
        );
    }
}

export default Main;
