import NavigatorList from "../util/routing/NavigatorList.jsx";
import NavigatorStyled from "../../../style/NavigatorStyled.jsx";

const Navigator = () => {

    const handleNavClick = () =>{

    }

    return (
        <NavigatorStyled >
            <nav className='nav_1'>
                <ul className='nav_1_list'>
                    {
                        NavigatorList.map((nav) => (
                            <li className='nav_1_list_item' key={nav.id} onClick={handleNavClick} >
                                {nav.name}
                                <ul className='nav_2_list'>
                                    {
                                        nav.children.length > 0 && nav.children.map((child) => (
                                            <li className='nav_2_list_item' key={child.id}>{child.name}</li >
                                        ))
                                    }
                                </ul>
                            </li >
                        ))
                    }
                </ul >
            </nav >
        </NavigatorStyled >
    )
}

export default Navigator