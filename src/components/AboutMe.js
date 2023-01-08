import Avatar from '../docs/Avatar.png';

// Renders About me Tab


const AboutMe = () => {
  return (
    <div class='flex-row justify-space-around'>
      <div class='card'>
        <div class='card-header'><h3>Welcome!</h3>
          <div class='card-body'><img src={Avatar} alt="your-forum"></img>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutMe;


