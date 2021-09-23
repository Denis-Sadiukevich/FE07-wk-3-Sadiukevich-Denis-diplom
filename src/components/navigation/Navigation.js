import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';


import './Navigation.css'


const Navigation = () => {

   const history = useHistory();
   
   const [activeRoute, setActiveRoute] = useState(history.location.pathname)

   useEffect(() => {
      return history.listen((location) => {
         setActiveRoute(location.pathname);
      })
   }, [history] )

   return (
      <div className='navigation-container'>
         <Link to='/'>
            <div className={activeRoute === '/' ? 'navigation-item-active' : 'navigation-item'}>
               Домой
            </div>
         </Link>

         <Link to='/login'>
            <div className={activeRoute === '/login' ? 'navigation-item-active' : 'navigation-item'}>
               Логин
            </div>
         </Link>

         <Link to='/registration'>
            <div className={activeRoute === '/registration' ? 'navigation-item-active' : 'navigation-item'}>
               Регистрация
            </div>
         </Link>

         <Link to='/tasks'>
            <div className={activeRoute === '/tasks' ? 'navigation-item-active' : 'navigation-item'}>
               Задачи
            </div>
         </Link>
      </div>
   ) 
}

export default Navigation