import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import { MainTheme } from '../themes/Theme.js';
import "../styles/Spinner.scss";

export const Spinner = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div className="spinner">
        <Loader className="spinner__loader" type="Oval" color={MainTheme} height={100} width={100} />
      </div>
    )
  );
};
