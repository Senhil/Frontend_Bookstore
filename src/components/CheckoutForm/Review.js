import { Table } from '@material-ui/core';
import React from 'react';
import { Order } from '@stripe/stripe-js';
const Review = (props) => {
	return (
		<div>
            <div className="order">
			<a href="/home">
                <img src="assets/orderconfirmed.png" class="orderlogo" />
				</a>
                <div className="hurray">hurray!!! your order is confirmed </div>
                <div className="hurray" >the order id {props.orderid} is save the order id for</div> 
                <div className="hurray">further communication..</div>
                <br/>
				{/* <Table className ="table" columns = {columns} dataSource ={data}/> */}
				{/* <button className='continueShooping' onClick={()=>(history.push('/dashboard'))}>CONTINUE SHOOPING !!!</button> */}
                

            </div>
            
        </div>
		
	);
};

export default Review;