import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { RootState } from '../store/store'

const MyLayout = () => {
    const data = useSelector((state: RootState) => state.productReducer.basket).length;
    return (
        <>
            <div style={{ backgroundColor: 'lightGray', padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product" style={{ marginLeft: '10px' }}>Product</NavLink>
                </div>
                <div>Sepetteki Sayı: {data}</div>
            </div>
            <div style={{ padding: 10 }}>
                <Outlet />
            </div>
        </>
    )
}

export default MyLayout