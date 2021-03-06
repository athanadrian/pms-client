import React, { useRef, useEffect, useState } from 'react';

const LanguagesDropdown = () => {
  const dropdownRef = useRef(null);

  const [dropdownState, updateDropdownState] = useState({
    isDropdownOpen: false
  });

  const toggleDropdown = () => {
    updateDropdownState({ isDropdownOpen: !dropdownState.isDropdownOpen });
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      updateDropdownState({ isDropdownOpen: false });
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, false);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, false);
    };
  });

  let className = 'dropdown-menu dropdown-menu-right p-0';

  if (dropdownState.isDropdownOpen) {
    className += ' show';
  }

  return (
    <li
      ref={dropdownRef}
      className="nav-item d-none d-sm-inline-block dropdown"
    >
      <button
        onClick={toggleDropdown}
        type="button"
        className="nav-link"
        data-toggle="dropdown"
      >
        <i className="flag-icon flag-icon-gb" />
      </button>
      <div className={className}>
        <button type="button" className="dropdown-item">
          <i className="flag-icon flag-icon-gr mr-2" />
          <span> Greek</span>
        </button>
        <button type="button" className="dropdown-item active">
          <i className="flag-icon flag-icon-gb mr-2" />
          <span> English</span>
        </button>
        <button type="button" className="dropdown-item">
          <i className="flag-icon flag-icon-de mr-2" />
          <span> German</span>
        </button>
        <button type="button" className="dropdown-item">
          <i className="flag-icon flag-icon-fr mr-2" />
          <span> French</span>
        </button>
        <button type="button" className="dropdown-item">
          <i className="flag-icon flag-icon-es mr-2" />
          <span> Spanish</span>
        </button>
      </div>
    </li>
  );
};

export default LanguagesDropdown;
