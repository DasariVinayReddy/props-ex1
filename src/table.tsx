import { TableCell } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import React, { Component } from "react";
import { TableBody } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import Second from "./second";
interface IState{
   key1:any[];
       
}
interface IProps{
    
}
class first extends Component <IProps,IState>{
    constructor(props:IProps){
    super(props);
    this.state={
        key1:[{"ID":1,"FirstName":"Vinay","LastName":"Reddy","Age":"23","FullName":"Vinay Reddy"},
              {"ID":2,"FirstName":"Jhon","LastName":"Snow","Age":"21","FullName":"Jhon Snow"},
              {"ID":3,"FirstName":"Cermei","LastName":"lanemei","Age":"20","FullName":"Cermei lanemei"},
              {"ID":4,"FirstName":"Vinu","LastName":"Rock","Age":"19","FullName":"Vinu Rock"},
              {"ID":5,"FirstName":"Arya","LastName":"Stark","Age":"22","FullName":"Arya Stark"},
              {"ID":6,"FirstName":"sandeep","LastName":"Reddy","Age":"27","FullName":"Sandeep Reddy"},
              {"ID":7,"FirstName":"Denie","LastName":"Nien","Age":"29","FullName":"Denie Nien"},
              {"ID":8,"FirstName":"Suresh","LastName":"Raina","Age":"35","FullName":"Suresh Raina"},]
    }
}
render(){  
    return( 
        <React.Fragment>
           <Second>
               <TableContainer>
                        <Table>
                             <TableHead >
                                   <TableRow component="th">
                                      <TableCell>S_NO</TableCell>
                                      <TableCell>ID</TableCell>
                                      <TableCell>First_Name</TableCell>
                                      <TableCell>Last_Name</TableCell>
                                      <TableCell>Age</TableCell>
                                      <TableCell>Full_Name</TableCell>
                                   </TableRow>
                             </TableHead>
                           <TableBody>
                                    {this.state.key1.map((element,index) => (
                                      <TableRow key={index}>
                                        <TableCell>
                                          {index+1}
                                        </TableCell>
                                        <TableCell>{element.ID}</TableCell>
                                        <TableCell>{element.FirstName}</TableCell>
                                        <TableCell>{element.LastName}</TableCell>
                                        <TableCell>{element.Age}</TableCell>
                                        <TableCell>{element.FullName}</TableCell>
                                      </TableRow>
                                    ))}
                             </TableBody>
                    </Table>
                    </TableContainer>
            </Second>
        </React.Fragment>
    )
 }
}
export default first;
