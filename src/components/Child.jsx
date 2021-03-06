import React from 'react';

const ChildComponent = ({data}) => {
  return (
    <div>
      <img src={data} alt="tech" className='child'/>
    </div>
  );
};

export default ChildComponent;