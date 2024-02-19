import ChartMixedIco from "./ui/ChartMixedIco";
import DumbbellIco from "./ui/DumbbellIco";
import HomeIco from "./ui/HomeIco";
import ProfileIco from "./ui/ProfileIco";


const Navbar = () => {
    return (
        <div className='fixed z-500 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-0 left-1/2 dark:bg-gray-700 dark:border-gray-600'>
            <div className='grid h-full max-w-lg grid-cols-4 mx-auto'>
                <button
                    data-tooltip-target='tooltip-home'
                    type='button'
                    className='inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group'
                >
                    <HomeIco />
                    <span className='sr-only'>Home</span>
                </button>
                <div
                    id='tooltip-home'
                    role='tooltip'
                    className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
                >
                    Home
                    <div className='tooltip-arrow' data-popper-arrow></div>
                </div>
                <button
                    data-tooltip-target='tooltip-wallet'
                    type='button'
                    className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
                >
                    <DumbbellIco />
                    <span className='sr-only'>Wallet</span>
                </button>
                <div
                    id='tooltip-wallet'
                    role='tooltip'
                    className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
                >
                    Wallet
                    <div className='tooltip-arrow' data-popper-arrow></div>
                </div>
                <button
                    data-tooltip-target='tooltip-settings'
                    type='button'
                    className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
                >
                    <ChartMixedIco />
                    <span className='sr-only'>Settings</span>
                </button>
                <div
                    id='tooltip-settings'
                    role='tooltip'
                    className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
                >
                    Settings
                    <div className='tooltip-arrow' data-popper-arrow></div>
                </div>
                <button
                    data-tooltip-target='tooltip-profile'
                    type='button'
                    className='inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group'
                >
                    <ProfileIco />
                    <span className='sr-only'>Profile</span>
                </button>
                <div
                    id='tooltip-profile'
                    role='tooltip'
                    className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
                >
                    Profile
                    <div className='tooltip-arrow' data-popper-arrow></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
