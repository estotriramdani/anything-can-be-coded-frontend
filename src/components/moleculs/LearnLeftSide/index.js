import React from 'react';
import { Button, Gap } from '../../atoms';
import CommunityCorner from '../CommunityCorner';
import CourseCard from '../CourseCard';
import MyLastCourse from '../MyLastCourse';

const LearnLeftSide = () => {
  return (
    <div className="learn-left-side">
      <div>
        <h2 className="heading-2">Lanjut Belajar</h2>
        <Gap height={10} />
        <MyLastCourse />
        <Gap height={23} />
      </div>
      <div>
        <h2 className="heading-2">Kelas Lainnya</h2>
        <Gap height={15} />
        <CourseCard />
        <Gap height={10} />
        <CourseCard />
        <Gap height={10} />
        <Button title="Lihat Semua Kelas" />
        <Gap height={23} />
      </div>
      <div>
        <h2 className="heading-2">Community Corner</h2>
        <Gap height={5} />
        <CommunityCorner />
        <Gap height={23} />
      </div>
      <div>
        <h2 className="heading-2">Tentang Aplikasi</h2>
        <p className="tentang-aplikasi-desc">
          Anything Can Be Coded (ACBC) adalah situs belajar pemrograman yang
          dibuat oleh, dari, dan untuk komunitas.
        </p>
        <p className="tentang-aplikasi-desc">
          ACDC &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default LearnLeftSide;
