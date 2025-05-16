import { Outlet } from 'react-router-dom'


const AuthenticationLayout = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
            {/** handler to store the user data */}
            <img src="/assets/img/bg.png" className='absolute inset-0 w-full h-full object-cover opacity-20' />
            <Outlet />

        </div>
    )
}

export default AuthenticationLayout;