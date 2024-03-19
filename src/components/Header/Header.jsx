import { useState } from "react";
import Link from "../Link/Link";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
    const routes = [
        {
            id: 1,
            path: '/',
            component: 'Home'
        },
        {
            id: 2,
            path: '/about',
            component: 'About'
        },
        {
            id: 3,
            path: '/services',
            component: 'Services'
        },
        {
            id: 4,
            path: '/contact',
            component: 'Contact'
        },
        {
            id: 5,
            path: '/products',
            component: 'Products'
        }
    ];
    const [open, setOpen] = useState(false);

    return (
        <nav className="container mx-auto py-5">
            <div className="md:hidden text-2xl">
                
                {
                    open ? <AiOutlineClose className="text-red-500" onClick={()=>setOpen(!open)} /> : <FaBars className="text-green-600" onClick={() => setOpen(!open)} /> 
                }
                
            </div>
            <ul className={`md:flex gap-10 ${open ? '' : 'hidden'}`}>
                
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Header;