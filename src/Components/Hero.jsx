import React from "react";
import styled from "styled-components";
import { useTheme } from "../Hooks/useTheme";

export const Hero = () => {
       const [state,] = useTheme()

       
       let classNames = ''
       if(state) {
              classNames += ' hero-light-mode'
       }else {
              classNames += ' hero-dark-mode'
       }

       return (
              <Wrapper>
              <div className="hero">
              <div className={`hero-search-section ${classNames}`}>
              <span class="material-symbols-outlined">search</span>
              <input className={`search-input ${classNames}`} type="text" placeholder="Search for a country…" />
              </div>

              <select className={`hero-select ${classNames}`}>
                     <option value="all">Filter by Region</option>
              </select>

              </div>
              </ Wrapper>
       )
}

const Wrapper = styled.div`

.hero-light-mode {
       background: #fff;
       color: #848484;
}

.hero-dark-mode {
       background: #2B3844;
       color: #fff;
}

.hero {
       display: flex;
       align-items: center;
       justify-content: space-between;
       padding: 48px 0;
}

.hero-search-section {
       display: flex;
       align-items: center;
       padding: 19px 32px;
       max-width: 480px;
       width: 100%;
       border-radius: 5px;
       box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
}

.search-input {
       margin-left: 24px;
       border: none;
}

.search-input:focus {
       outline: none;
}

.hero-select {
       padding: 18px 24px;
       max-width: 200px;
       width: 100%;
       border: none;
       border-radius: 5px;
       box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
       cursor: pointer;
}

.hero-select:focus {
       outline: none;
}
`