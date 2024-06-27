import React, {useEffect, useRef, useState} from "react";
import NavigatorList from "../util/routing/NavigatorList.jsx";
import NavigatorStyled from "../../../style/NavigatorStyled.jsx";

const Navigator = ({ className }) => {
    const [activeItems, setActiveItems] = useState({});
    const [menuHeights, setMenuHeights] = useState({});
    const listRefs = useRef({});

    const handleNavClick = (id) => {
        setActiveItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    }

    useEffect(() => {
        const heights = {};
        NavigatorList.forEach(nav => {
            if (listRefs.current[nav.id]) {
                heights[nav.id] = listRefs.current[nav.id].scrollHeight;
            }
        });
        setMenuHeights(heights);
    }, []);

    return (
        <NavigatorStyled>
            <nav className={`nav_1 ${className}`}>
                <ul className='nav_1_list'>
                    {
                        NavigatorList.map((nav) => (
                            <NavigatorStyled
                                key={nav.id}
                                isOpen={activeItems[nav.id]}
                                menuHeight={`${menuHeights[nav.id]}px`}
                            >
                                <li
                                    className={`nav_1_list_item ${activeItems[nav.id] ? 'on' : ''}`}
                                    onClick={() => handleNavClick(nav.id)}
                                    ref={el => listRefs.current[nav.id] = el}
                                >
                                    {nav.name}
                                    <ul className='nav_2_list'>
                                        {
                                            nav.children.length > 0 && nav.children.map((child) => (
                                                <li
                                                    className={`nav_2_list_item ${activeItems[child.id] ? 'on' : ''}`}
                                                    key={child.id}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleNavClick(child.id);
                                                    }}
                                                >
                                                    {child.name}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            </NavigatorStyled>
                        ))
                    }
                </ul>
            </nav>
        </NavigatorStyled>
    )
}

export default Navigator;