import { Divider } from 'antd'
import '../styles/Header.css'
import { CategoryMenu } from './CategoryMenu'
import { UserMenu } from './UserMenu'
export function Header() {
    return (
        <>
         <header className="header">
            <CategoryMenu/>
            <h1 className="header-title">HEAVENLY</h1>
            <UserMenu />
        </header>
        <Divider />
        </>
       
    )
}