import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from '../../atoms';

const CommunityCorner = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const changeContent = ({ link, pageName }) => {
    history.push(link);
    dispatch({ type: pageName });
  };
  return (
    <ul className="community-corner-links">
      <li>
        <Link
          title="Menjadi Tutor"
          onClick={() =>
            changeContent({
              link: '/learn/menjadi-tutor',
              isTrue: true,
              pageName: 'MENJADI_TUTOR',
            })
          }
        />
      </li>
      <li>
        <Link
          title="Koreksi Materi"
          onClick={() =>
            changeContent({
              link: '/learn/koreksi-materi',
              isTrue: true,
              pageName: 'KOREKSI_MATERI',
            })
          }
        />
      </li>
      <li>
        <Link
          title="Request Materi"
          onClick={() =>
            changeContent({
              link: '/learn/request-materi',
              isTrue: true,
              pageName: 'REQUEST_MATERI',
            })
          }
        />
      </li>
      <li>
        <Link
          title="Belajar"
          onClick={() =>
            changeContent({
              link: '/learn/course/1',
              isTrue: true,
              pageName: 'COURSE_VIDEO',
            })
          }
        />
      </li>
    </ul>
  );
};

export default CommunityCorner;
