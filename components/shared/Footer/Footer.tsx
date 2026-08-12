import { CONTENT } from '@/constants/content';
import Logo from '../Logo';
import RightsReserved from '../RightsReserved';
import { FooterNav } from './FooterNav';

export const Footer = () => {
  return (
    <footer className="bg-slate-200 text-white py-4 mt-auto">
      <div className="flex flex-col max-w-[85rem] mx-auto w-full ">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-4 lg:justify-between items-start w-full px-6 md:px-8 md:px-8 py-6 bg-bg-primary font-sans dark:bg-black">
          <div className="flex flex-col gap-4 w-1/2 lg:max-w-[20%]">
            <Logo />
            <p className="text-sm text-slate-700">{CONTENT.footer.tagline}</p>
          </div>
          <FooterNav />
        </div>

        <RightsReserved centered={false} />
      </div>
      {/* <div className="container mx-auto text-center text-sm"> */}

      {/* </div> */}
    </footer>
  );
};
