import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
  return (
    <>  
      <Routes>
        <Route path='login/*' element={
          <PublicRouter>
            {/* <LoginPage /> */}
            <Routes>
              <Route path='/*' element={ <LoginPage />} />
            </Routes>
          </PublicRouter>
        }/>
        
        <Route path='/*' element={
          <PrivateRouter>
            <HeroesRoutes />
          </PrivateRouter>
        }/>
        {/* <Route path="login" element={ <LoginPage />} /> */}

        {/* <Route path="/*" element={ <HeroesRoutes />} /> */}
        {/* <Route path='*' element={ <HeroesRoutes />} /> */}
      </Routes>
    </>
  )
}
