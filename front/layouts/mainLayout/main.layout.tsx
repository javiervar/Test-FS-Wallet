import styles from './MainLayout.module.scss';
import NavBar from '../../components/navbar/NavBar'
type MainLayoutProps={
    children:React.ReactNode
}

const MainLayout=({children}:MainLayoutProps)=>{
    return <>
        <NavBar/>
        <main>
            {children}
        </main>
    </>
}

export default MainLayout