import React, { Component } from 'react';
import { MonthList } from '../component/MonthList';
import { NavLink } from "react-router-dom";
import left from '../img/left.png';
import right from '../img/right.png';
import Button from '@material-ui/core/Button';



class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.month = "";
    }

    render(){
        this.month = this.props.month.toString();
        let temp = this.month.slice(0,4)+' ';
        temp += MonthList[this.month.slice(-2)];
        this.month = temp;
        return (
            <footer className="my-wallet__footer">
                {/* <div className="my-wallet__add">
                    <Button onClick={()=>this.props.handleClick("add")}>Add</Button>
                </div>
                <div className="my-wallet__previous">
                    <img src={left} className="my-wallet__LR-img" id="previous"
                        onClick={()=>this.props.handleClick("previous")}/>
                </div>
                <div className="my-wallet__month">
                    {this.month}
                </div>
                <div className="my-wallet__next">
                    <img src={right} className="my-wallet__LR-img" id="next"
                        onClick={()=>this.props.handleClick("next")}/>
                </div>
                <div className="my-wallet__clear">
                    <Button onClick={()=>this.props.handleClick("clear")}>Clear</Button>
                </div> */}
                <div className="my-wallet__add">
                    <Button onClick={()=>this.props.handleClick("add")}> Add </Button>
                </div>

                <div className="my-wallet__previous">
                    <NavLink to={"/" + (this.props.month-1).toString()}>
                        <img src={left} className="my-wallet__LR-img" id="previous"
                            onClick={()=>this.props.handleClick("previous")}/>
                    </NavLink>
                </div>
                <div className="my-wallet__month">
                    {this.month}
                </div>
                <div className="my-wallet__next">
                    <NavLink to={"/" + (this.props.month+1).toString()}>
                        <img src={right} className="my-wallet__LR-img" id="next"
                            onClick={()=>this.props.handleClick("next")}/>
                    </NavLink>     
                </div>
                <div className="my-wallet__clear">
                    <Button onClick={()=>this.props.handleClick("clear")}>Clear</Button>
                </div>
            </footer>
        );
    }
}

  
export default Footer;
