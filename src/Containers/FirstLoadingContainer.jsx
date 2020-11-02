import React from 'react';
import ReactDom from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import FirstLoadingComponent from '../Components/FirstLoadingComponent/FirstLoadingComponent';

export default function FirstLoadingContainer() {
  // const dispatch = useDispatch();
  const loading = useSelector((state) => state.movies.loading);

  return ReactDom.createPortal(
    <FirstLoadingComponent loading={loading} />,
    document.getElementById('bookPotal'),
  );
}
