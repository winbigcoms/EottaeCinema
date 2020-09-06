import React from 'react';
import BookContainer from '../Containers/BookContainer';
import MainHeaderComponentBlack from '../Components/MainHeaderComponent/MainHeaderComponentBlack';
import MainFooterComponent from '../Components/MainFooterComponent/MainFooterComponent';
export function BookPage() {
  return (
    <>
      <MainHeaderComponentBlack />
      <BookContainer />
      <MainFooterComponent />
    </>
  );
}
