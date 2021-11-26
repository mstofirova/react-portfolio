import React from "react";
import "./Loader.css";
function Loader(props) {
	const { setIsLoading } = props;
	setTimeout(() => {
		setIsLoading(false);
	}, 2000);
	return (
		<div className="loaders">
			<img alt="loading" className="loadingImg" src='/images/Loading.svg' />

			<div className="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default Loader;


// import { renderHook, act } from '@testing-library/react-hooks'
// import useCounter from './Loader.js'

// test('should increment counter', () => {
//   const { result } = renderHook(() => setIsLoading(true))

//   act(() => {
//     result.current.
//   })

//   expect(result.current.count).toBe(1)
// })