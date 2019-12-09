import React from 'react';

const TBody = props => {
  return (
    <div className='row'>
      <div className='col-3'>{props.courses[0].title}</div>
      <div className='col-3'>{props.courses[0].id}</div>
      <div className='col-3'>{props.courses[0].authorId}</div>
      <div className='col-3'>{props.courses[0].category}</div>
      {/* <div>Title</div>
        <div>Slug</div>
        <div>AuthorId</div>
        <div>Category</div> */}
    </div>
  );
};

export default TBody;
