import NavbarBottom from '@/components/navbar/NavbarBottom'
import NavbarTop from '@/components/navbar/NavbarTop'

export default function Navbar() {
    return (
        <div className="pb-5 border-b">
            <NavbarTop/>
            <NavbarBottom/>
        </div>
    )
}