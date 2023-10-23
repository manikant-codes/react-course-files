import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" ref={ref}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Learning React
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Demos
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/useState">
                    useState
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/useEffectCounter">
                    useEffect Counter
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/useEffectFetch">
                    useEffect Fetch
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/useRefPersistance">
                    useRef Persistance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/useRefDom">
                    useRef DOM
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/useRefDomTwo">
                    useRef DOM Scroll
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/useCallback">
                    useCallback
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/useMemo">
                    useMemo
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/memo">
                    memo
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/form">
                    Form
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/useContext">
                    useContext
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
