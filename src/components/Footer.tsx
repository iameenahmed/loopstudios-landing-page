import logo from "../assets/logo.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";
import twitterIcon from "../assets/icon-twitter.svg";

const Footer = () => {
  const links = ["About", "Careers", "Events", "Products", "Support"];
  const socialIcons = [facebookIcon, instagramIcon, pinterestIcon, twitterIcon];
  const socialLinks = [
    "www.facebook.com",
    "www.instagram.com",
    "www.pinterest.com",
    "www.twitter.com",
  ];

  return (
    <footer className="grid place-content-center gap-3 bg-black py-16 text-white lg:grid-cols-2 lg:grid-rows-2 lg:px-[10.25rem] lg:py-11">
      <div className="justify-self-center lg:justify-self-start">
        <img src={logo} alt="logo" />
      </div>
      <div className="my-8 lg:col-start-1 lg:row-start-2 lg:my-0">
        <ul className="flex flex-col items-center gap-6 lg:flex-row">
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="lg:col-start-2 lg:row-start-1 lg:self-center lg:justify-self-end">
        <ul className="flex items-center justify-center gap-4">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={socialLinks[index]}>
                <img src={icon} alt="icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:self-center lg:justify-self-end">
        <small className="text-primary">
          &copy; {new Date().getFullYear()} Loopstudios. All rights reserved.
        </small>
      </div>
    </footer>
  );
};
export default Footer;
