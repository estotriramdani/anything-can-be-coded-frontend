import React from 'react';
import { Link } from '../../atoms';

const CommunityCorner = () => {
  return (
    <ul className="community-corner-links">
      <li>
        <Link title="Menjadi Tutor" onClick={() => alert('ok')} />
      </li>
      <li>
        <Link title="Koreksi Materi" onClick={() => alert('ok')} />
      </li>
      <li>
        <Link title="Request Materi" onClick={() => alert('ok')} />
      </li>
    </ul>
  );
};

export default CommunityCorner;
