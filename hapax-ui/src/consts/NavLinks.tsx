import { BiRadar } from 'react-icons/bi'
import { FaIndustry } from 'react-icons/fa'; 
import { CgOrganisation } from 'react-icons/cg'
import { MdMiscellaneousServices, MdPersonAddAlt1 } from 'react-icons/md'
import {BsFilePostFill} from 'react-icons/bs'
import { HomePage } from '../pages';
import { BlogListingPage } from '../pages/BlogListingPage';

export type NavLink = {
  path: string;
  text: string;
  Icon: React.FC;
  element: JSX.Element;
}

export const navLinks: NavLink[] = [
  { path: '/insights', text: 'Insights', Icon: BiRadar, element: (<HomePage />)},
  { path: '/industries', text: 'Industries', Icon: FaIndustry, element: (<HomePage />)},
  { path: '/services', text: 'Services', Icon: MdMiscellaneousServices , element: (<HomePage />)},
  { path: '/careers', text: 'Careers', Icon: MdPersonAddAlt1, element: (<HomePage />)},
  { path: '/about', text: 'About', Icon: CgOrganisation, element: (<HomePage />)},
  { path: '/blog', text: 'Blog', Icon: BsFilePostFill, element: (<BlogListingPage />)}
]