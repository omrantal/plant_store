import React from 'react';
import { RotatingLines, TailSpin } from 'react-loader-spinner';

const Spinner = ({ height, width }) => {
  return (
    <div className={`flex justify-center items-center w-full h-fit min-h-[${height}]`}>
      <RotatingLines
        strokeColor="#669660"
        strokeWidth="3"
        animationDuration="0.5"
        width={width ? width : "80px"}
        visible={true}
      />
    </div>
  )
}

const TailSpinner = ({ width, color }) => {
  return <TailSpin
    height={width}
    width={width}
    color={color ? color : "Black"}
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
}

export { Spinner, TailSpinner }
