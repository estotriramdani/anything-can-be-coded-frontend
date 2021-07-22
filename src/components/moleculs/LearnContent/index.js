import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CourseVideo from '../CourseVideo';

const LearnContent = () => {
  const {
    menjadiTutor,
    koreksiMateri,
    courseVideo,
    isPageChange,
    requestMateri,
  } = useSelector((state) => state.learnReducer);

  return (
    <div className="learn-content">
      {/* {menjadiTutor ? <p>Menjadi Tutor Page</p> : null}
      {koreksiMateri ? <p>KoreksiMater</p> : null}
      {requestMateri ? <p>Request Materi</p> : null}
      {courseVideo ? <CourseVideo /> : null}
      {!isPageChange ? ( */}
      <Router>
        <Switch>
          <Route exact path="/learn/menjadi-tutor">
            <p>Menjadi Tutor s</p>
          </Route>
          <Route exact path="/learn/koreksi-materi">
            <p>Koreksi Materi</p>
          </Route>
          <Route exact path="/learn/:courseName/:epId?">
            <CourseVideo />
          </Route>
          <Route path="/">
            <p>Learn Home</p>
          </Route>
        </Switch>
      </Router>
      {/* ) : (
        ''
      )} */}
    </div>
  );
};

export default LearnContent;
