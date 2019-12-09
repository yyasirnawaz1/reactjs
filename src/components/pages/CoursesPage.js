import React, { useEffect, useState } from 'react';
import THeader from './partialViews/CourseTableHeader';
import TBody from './partialViews/CourseTableBody';

const CoursesPage = props => {
  const getCourses = () => {
    return fetch('http://localhost:3001/courses');
  };
  const loadCourses = async () => {
    const data = await getCourses().then(response => {
      console.log(JSON.stringify(response));
      return response;
    });

    //setCourses(JSON.parse(data));
  };

  let data = {
    courses: [
      {
        id: 1,
        title: 'Securing React Apps with Auth0',
        authorId: 1,
        category: 'JavaScript'
      }
    ]
  };

  const [courses, setCourses] = useState(data);

  // useEffect(() => {
  //   if (courses.length === 0) setCourses(loadCourses());
  // }, [courses]);

  return (
    <React.Fragment>
      <div className='pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center'>
        <h1 className='display-4'>Courses</h1>
        <p className='lead'>
          Check below table for the detail on the Courses available
        </p>
        <input
          type='button'
          className='btn btn-primary'
          onClick={() => loadCourses()}
          value='Load Records'
        />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='table'>
              <THeader {...courses} />
              <TBody {...courses} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoursesPage;
