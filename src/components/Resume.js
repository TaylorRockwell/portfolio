import MyResume from '../docs/Resume.pdf';

// Render resume
const Resume = () => {
  return (
    <div>
      <iframe src={MyResume} title="resume" width="100%" height="1000px"></iframe>
    </div>
  );
};

export default Resume;
