import hamburger from "../assets/icons/hamburger.svg";
import logo from "../assets/images/logo.png";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={logo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[59px] rounded-[4px]'
          />
        </a>
        <ul className='flex gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-right text-lg text-white'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg text-white leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Book us Now!</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
