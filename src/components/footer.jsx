import twitterIcon from '../assets/Twitter_Icon.svg';
import faceBookIcon from '../assets/Facebook_Icon.svg';
import instagramIcon from '../assets/Instagram_Icon.svg';
import githubIcon from '../assets/GitHub_Icon.svg';

function FooterSection() {
  return (
    <div className='footerBody'>
      <a target="_blank" href="https://x.com/its_Hemant_"><img src={twitterIcon} alt="" /></a>
      <a target="_blank" href="https://github.com/Hemant-29"><img src={faceBookIcon} alt="" /></a>
      <a target="_blank" href="https://x.com/its_Hemant_"><img src={instagramIcon} alt="" /></a>
      <a target="_blank" href="https://github.com/Hemant-29"><img src={githubIcon} alt="" /></a>

    </div>
  );
}

export default FooterSection;
