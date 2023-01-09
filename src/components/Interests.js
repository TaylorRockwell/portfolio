import Foster from '../docs/Foster.png';
import WhiffRates from '../docs/WhiffRates.pdf';
import Reggae from '../docs/Reggae.mp3'
import EDM from '../docs/EDM.mp3'
import SocialMediaAd from '../docs/SocialMediaAd.mp3'
import HipHop from '../docs/HipHop.mp3'
import Indie from '../docs/Indie.mp3'
import Soundtrack from '../docs/Soundtrack.mp3'

// Renders Interests Tab


const Interests = () => {
  return (
    <div class='flex-row justify-space-around'>
      <div class='card'>
        <div class='card-header'><h1>Data Analysis</h1>
          <div class='card-body'>
            <iframe src={WhiffRates} title="Whiff Rates" width="100%" height="514px"></iframe>
          </div>
        </div>
      </div>

      <div class='card'>
        <div class='card-header'><h1>Business</h1>
          <div class='card-body'>
            <img id="Foster" src={Foster} alt="your-forum"></img>
          </div>
        </div>
      </div>

      <div class='card'>
        <div class='card-header'><h1>Music Production</h1>
          <div class='card-body'>
          <h3>Reggae</h3>
          <audio id="player"controls>
            <source src={Reggae} type="audio/mp3"></source>
          </audio>
          <h3>EDM</h3>
          <audio id="player"controls>
            <source src={EDM} type="audio/mp3"></source>
          </audio>
          <h3>Hip Hop</h3>
          <audio id="player"controls>
            <source src={HipHop} type="audio/mp3"></source>
          </audio>
          <h3>Soundtrack</h3>
          <audio id="player"controls>
            <source src={Soundtrack} type="audio/mp3"></source>
          </audio>
          <h3>Indie</h3>
          <audio id="player" controls>
            <source src={Indie} type="audio/mp3"></source>
          </audio>
          <h3>Social Media Ad</h3>
          <audio id="player"controls>
            <source src={SocialMediaAd} type="audio/mp3"></source>
          </audio>
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default Interests;


