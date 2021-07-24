
import { Component } from "react";

interface IState{}
interface IProps{
}

class Second extends Component <IProps,IState>{
    constructor(props:IProps){
        super(props);
       
    }
    render(){
        return(
        <table>{this.props.children}</table>
        )
    }
}
export default Second;