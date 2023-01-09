import Avatar from '../docs/Avatar.png';

// Renders About me Tab


const AboutMe = () => {
  return (
    <div class='flex-row justify-space-around'>
      <div class='card'>
        <div class='card-header'><h1>Welcome!</h1>
          <div class='card-body'><img src={Avatar} alt="your-forum"></img>
          <div class='card-footer'><h3>I am a web developer looking for work based <br></br> out of Seattle,  Washington. Feel free to <br></br> browse my interests and work!</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutMe;


