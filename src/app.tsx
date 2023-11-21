import { routes, route } from 'react-router-dom';

import './global.css'
import SigninForm from './components/SigninForm';
import SignupForm from './components/SignupForm';
import { Home } from './components/Home';

const app=() => {
  return (
    <main className="text-3xl font-bold underline">
      <routes>
        {/*public routes*/}
        <route element={<AuthLayout />} />
        <route path="/sign-in" element={<SigninForm />} />
        <route path="/sign-up" element={<SignupForm />} />
      </route>
        {/*private routes*/}
        <route element={<RootLayout />} />
        <route index element={<Home />} />
        </route>
      </routes>
    </main>
  )
}

export default app