import Link from '@mui/material/Link';
import './style.scss';
import '../../assets/style/themify-icons.css';
import links from './links';


export default function TopMenu() {
    return (
        <div className="topMenu">
            {links.map(item => (
                <div
                    key={item.title}
                    className="topMenu__item"
                >
                    <Link href={item.path} underline="none">
                        {item.title}
                    </Link>
                </div>
            ))}
            <div className="topMenu__item">
                <span className="ti-bag"></span>
            </div>
            <div className="topMenu__item">
                <span className="ti-search"></span>
            </div>
            <div className="topMenu__item">
                <span className="ti-user"></span>
            </div>
        </div>
    )
}