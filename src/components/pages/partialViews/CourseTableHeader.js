import React from 'react';

const THeader = props => {
  return (
    <div className='row'>
      <div className='col-3'>Title</div>
      <div className='col-3'>Slug</div>
      <div className='col-3'>AuthorId</div>
      <div className='col-3'>Category</div>
    </div>
  );
};

export default THeader;
