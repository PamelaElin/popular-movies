import Icon from "./Icon";
import "./Header.css";

const Header = ({ value, onSubmit, onChange,onClickApp,valueApp}) => {
 

  return (
    <>
      <nav className="navbar header">
        <div className="container-fluid text-light">
          <div className="d-flex justifiy-content-start align-items-center" onClick={onClickApp} value={valueApp} >
            <Icon/> 
        <label >
          App Movies
          </label>
          </div>
        

          <form className="d-flex" onSubmit={onSubmit}>
            <input
              type="search"
              placeholder="Movie Search"
              className="input_search me-2"
              aria-label="search"
              name="query"
              value={value}
              onChange={onChange}
            />
            
              <button className="btn " type="submit">
              <span>Search</span>
            </button>
            
            
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
