
const Header = ({handleSwitchMode}) => {
    return (
        <div className="header">
            <h1>My Notes</h1>
            <button className="save" 
                        onClick={() => 
                             handleSwitchMode(
                                    previous => !previous)}
                    >
                        Mode
            </button>
        </div>
    );
}

export default Header;