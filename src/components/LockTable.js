import React, { Component } from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';
import 'firebase/database';

import ReactTable from "react-table";
import 'react-table/react-table.css';

class LockTable extends Component{
    state = { data: [] };
    
    componentDidMount() {
        const database = firebase.database().ref("LockerList");
    
        database.on("value", snapshot => {
            const data = [];
      
            snapshot.forEach(childSnapShot => {
              const locker = {
                LockerNumber: childSnapShot.key.toString(),
                Available: childSnapShot.val().Available,
                StudentName: childSnapShot.val().StudentName,
                StudentNumber: childSnapShot.val().StudentNumber.toString(),
                Period: childSnapShot.val().StudentPeriod.toString(),
                Teacher: childSnapShot.val().Teacher
              };
      
              data.push(locker);
            });
      
            this.setState(prevState => {
              return { data: [...prevState.data, ...data] };
            });
        });
    } 
    render(){
        const columns = [
            {
                Header: 'Locker Number',
                accessor: 'LockerNumber'
            }, {
                Header: 'Available',
                accessor: 'Available',
            }, {
                Header: 'Student Name',
                accessor: 'StudentName',
            }, {
                Header: 'Student Number',
                accessor: 'StudentNumber',
            }, {
                Header: 'Period',
                accessor: 'Period',
            }, {
                Header: 'Teacher',
                accessor: 'Teacher',
            } ];
        return(
            <div>
                <ReactTable data={this.state.data} columns={columns} />
            </div>
        );
    }
}

  
export default LockTable;