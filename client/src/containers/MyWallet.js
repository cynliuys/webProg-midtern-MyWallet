import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import AddWindow from '../component/AddWindow';
import Header from './Header';
import Main from './Main';



class MyWallet extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            windowOpen: false,
            month : 201905,
            nextMonth : 201906,
            preMonth : 201904,
            mode : "read", //add, read
            dataGroup : []
        };
        this.url = "http://localhost:3001/201905";
        this.init();
    }

    
    init = () => {
        console.log("init() has been called!")
        fetch(this.url, {method: "GET"})
        .then(res => res.json())
        .then(data =>{
            this.setState({ dataGroup: data});
        })
        .catch((err) => console.log('Error in init() :', err));
    }

    changeMonth = (command) => {
        console.log("changeMonth() has been called!", command)
        let newPre = 0;
        let newNext = 0;
        let newMonth = 0;

        if(command === "previous"){
            this.url ="http://localhost:3001/"+this.state.preMonth.toString();
            newPre = this.state.preMonth-1;
            newMonth = this.state.preMonth;
            newNext = this.state.month;
            if(newPre.toString().slice(-1)==='0'&&newPre.toString().slice(-2,-1)==='0'){
                newPre -=88;
            }
        }

        if(command === "next"){
            this.url ="http://localhost:3001/"+this.state.nextMonth.toString();
            newPre = this.state.month;
            newMonth = this.state.nextMonth;
            newNext = this.state.nextMonth+1;

            if(newNext.toString().slice(-1)==='3' && newNext.toString().slice(-2,-1)==='1'){
                newNext +=88;
            }
        }
        fetch(this.url, {method: "GET"})
        .then(res => res.json())
        .then(data =>{
            this.setState({ 
                month: newMonth,
                preMonth : newPre,
                nextMonth : newNext,
                dataGroup: data
            });
        })
        .catch((err) => console.log('Error in changeMonth() :', err));
    }

    clearData = () => {
        console.log("clearData() has been called!");
        this.url = "http://localhost:3001/";
        fetch(this.url, {method: "DELETE"})
        .then(res => {
            this.setState({ dataGroup: []});
        })
        .catch((err) => console.log('Error in clearData() :', err));
    }

    handleClose = () => {
        this.setState({ windowOpen: false });
    };

    postNewItem = (newItem) =>{
        this.url = "http://localhost:3001/";
        fetch(this.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newItem)
        })
        .catch((err) => console.log('Error in postNewItem() :', err))
        .then(res => {
            this.url = "http://localhost:3001/"+this.state.month;
            fetch(this.url, {method: "GET"})
            .then(res => res.json())
            .then(data =>{
                this.setState({ dataGroup: data});
                this.setState({ windowOpen: false });
            })
        })
    }

    changeMode = (command) =>{
        switch(command){
            case "add":
                this.setState({ windowOpen : true});
                break;
            case "clear":
                this.clearData();
                break;
            case "previous":
                this.changeMonth(command);
                break;
            case "next":
                this.changeMonth(command);
                break;
        }
    }

    render(){
        return(
            <BrowserRouter>
                <div className="my-wallet__root">
                    <Header />

                    <Switch>
                        <Route path="/:month" >
                            <Main dataGroup={this.state.dataGroup} month={this.state.month}
                                nextMonth={this.state.nextMonth} preMonth={this.state.preMonth}
                                handleClick={(command)=>this.changeMode(command)}>
                            </Main>
                        </Route>
                        <Redirect from="/" to="/201905"/>
                    </Switch>

                    <AddWindow open={this.state.windowOpen} close={() => this.handleClose()}
                        postNewItem={(newItem) => this.postNewItem(newItem)}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default MyWallet;