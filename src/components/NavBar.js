import React from 'react';

export default function NavBar({ onPageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          className="nav-link"
          href="#dogs"
          onClick={() => onPageChange('Dogs')}>
          Dogs
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#about"
          onClick={() => onPageChange('About')}>
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#signup"
          onClick={() => onPageChange('SignUp')}>
          Sign Up
        </a>
      </li>
    </ul>
  )
}