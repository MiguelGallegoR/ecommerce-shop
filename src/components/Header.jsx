import { Divider } from 'antd'
import '../styles/Header.css'
import { GenderMenu } from './GenderMenu'
import { UserMenu } from './UserMenu'
export function Header() {
    return (
        <>
         <header className="header">
            <GenderMenu/>
            <h1 className="header-title">HEAVENLY</h1>
            <UserMenu />
        </header>
        <Divider />
        </>
       
    )
}