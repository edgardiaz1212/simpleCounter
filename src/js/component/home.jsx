import React , { useState, useEffect } from "react";


	function SecondCounter() {
		const [count, setCount] = useState(0);
	
		useEffect(() => {
			const interval = setInterval(() => {
				setCount(count + 1);
			}, 1000);
	
			return () => clearInterval(interval);
		}, [count]);
	
		return (
			<div className="container bg-black text-white p-4 d-flex ">
			   <h1 className="my-auto py-5 text-center bg-dark border border-light-subtle border-top-0 border-bottom-0 rounded   w-25" style={{ fontSize: 50 }}><i className="fa-regular fa-clock"></i></h1>
			   
				<h1 className=" my-auto py-5 text-center bg-dark border border-light-subtle border-top-0 border-bottom-0 rounded   w-25 " style={{ fontSize: 50 }} >{Math.floor(count / 10000) % 10 }</h1>
				<h1 className=" my-auto py-5 text-center bg-dark border border-light-subtle border-top-0 border-bottom-0 rounde w-25 " style={{ fontSize: 50 }}>{Math.floor(count / 10000) % 10 }</h1>
				<h1 className=" my-auto py-5 text-center bg-dark border border-light-subtle border-top-0 border-bottom-0 rounded w-25 " style={{ fontSize: 50 }}>{Math.floor(count / 1000) % 10 }</h1>
				<h1 className=" my-auto py-5 text-center bg-dark border border-light-subtle border-top-0 border-bottom-0 rounded w-25 " style={{ fontSize: 50 }}>{Math.floor(count / 100) % 10 }</h1>
				<h1 className="my-auto py-5 text-center bg-dark border border-light-subtle border-top-0 border-bottom-0 rounded w-25 " style={{ fontSize: 50 }}>{Math.floor(count / 10) % 10 }</h1>
				<h1 className=" my-auto py-5 text-center bg-dark border border-light-subtle border-top-0 border-bottom-0 rounded w-25 " style={{ fontSize: 50 }}>{Math.floor(count / 1) % 10 }</h1>
			</div>
		);
	}
export default SecondCounter;
