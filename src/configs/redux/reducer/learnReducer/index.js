const initialStateLearn = {
  menjadiTutor: false,
  koreksiMateri: false,
  requestMateri: false,
  lihatSemuaKelas: false,
  courseVideo: false,
  isPageChange: false,
};

const learnReducer = (state = initialStateLearn, action) => {
  if (action.type === 'MENJADI_TUTOR') {
    return {
      menjadiTutor: true,
      isPageChange: true,
    };
  }

  if (action.type === 'KOREKSI_MATERI') {
    return {
      koreksiMateri: true,
      isPageChange: true,
    };
  }

  if (action.type === 'REQUEST_MATERI') {
    return {
      requestMateri: true,
      isPageChange: true,
    };
  }

  if (action.type === 'COURSE_VIDEO') {
    return {
      courseVideo: true,
      isPageChange: true,
    };
  }

  return state;
};

export default learnReducer;
