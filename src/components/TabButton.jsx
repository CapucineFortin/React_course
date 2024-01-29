function TabButton({ children, onClick, active }) {    
    return <li>
        <button onClick={onClick} className={active? "active": ""}>
            {children}
        </button>
    </li>;
}
export default TabButton;