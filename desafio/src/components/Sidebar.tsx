// Sidebar.tsx
import Image from "next/image";
import { FaGithub } from 'react-icons/fa';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed top-0 left-0 h-full w-1/4 bg-gray-900 text-white overflow-y-auto transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <FaGithub className="mr-2" size={20} />
                    <span className="font-bold text-lg">GitHub</span>
                </div>
                <button onClick={onClose} className="text-white">
                    Fechar
                </button>
            </div>

            {/* Links da barra lateral */}
            <div className="text-white font-bold flex justify-center border-b-2 px-6">
                <p>Fpereiraaraujo_</p>
            </div>
            <div className='mt-4 px-6 text-gray-300 text-base  flex justify-between items-center font-semibold leading-tight'>
                Top Repositories
                <div className="w-16 h-7 pl-3 pr-4 py-1 bg-green-700 rounded-md border border-blue-50 border-opacity-10 justify-start items-center inline-flex">
                    <div className="w-4 h-4 relative" />
                    <div className="text-white text-xs font-medium font-['Noto Sans'] leading-tight">New</div>
                </div>
            </div>
            <div className='mt-6 px-6 '>
                < input
                    type="text"
                    placeholder="Find repository..."
                    className="border rounded-md w-full text-sm px-6 py-1
                        bg-slate-950 text-white "  />
            </div>
            <div className='mt-6 gap-2 px-6  flex-col text-white  w-32 h-5 pt-2.5 pb-2 justify-start items-start flex '>
                <p className='text-gray-300 hover:text-white  text-sm font-normal  cursor-pointer'>Fpereiraaraujo/Image-resizer-electron</p>
                <p className='text-gray-300  hover:text-white text-sm font-normal cursor-pointer '>Fpereiraaraujo/
                    next13_project_car_showcase</p>
                <p className='text-gray-300 hover:text-white  text-sm font-normal  cursor-pointer'>Fpereiraaraujo/
                    Portfolio-3D</p>
                <p className='text-gray-300 hover:text-white  text-sm font-normal cursor-pointer '>Fpereiraaraujo/
                    netfilmes</p>
                <p className='text-gray-300 hover:text-white  text-sm font-normal cursor-pointer '>Fpereiraaraujo/netfilmes </p>
                <div className='text-zinc-400 hover:text-white text-xs font-normal cursor-pointer '>
                    show more
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
