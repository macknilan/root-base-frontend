/* 
COMPONENT TO SHOW WHEN A PAGE IT'S NOT FOUND
*/
import React from 'react';

import Error404Image from '@images/Error404Image.jpg';

const NotFound = () => (
  <>
    <h1>404_error</h1>
    <img alt="404 error" tittle="404 error" src={`${Error404Image}`} />
  </>
);

export default NotFound;
