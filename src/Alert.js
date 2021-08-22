import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, list }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeAlert();
    }, 1500);
    return () => clearTimeout(timer);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
