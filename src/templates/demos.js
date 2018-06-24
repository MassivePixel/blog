import React from 'react';

import './demos.css';

import Demos from '../pages/2018-forms-in-react/demos';

const DemoResolver = ({ path, ...props }) => {
  switch (path) {
    case '2018-forms-in-react':
      return <Demos {...props} />;
  }
};

export default DemoResolver;
