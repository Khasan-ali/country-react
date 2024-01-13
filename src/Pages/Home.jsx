import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../Hooks/useTheme";
import { Hero } from '../Components/Hero'

export const Home = () => {
       const [state,] = useTheme()

       let homeClassname = ''
       if(state) {
              homeClassname += ' home-light-mode'
       }else {
              homeClassname += ' home-dark-mode'
       }

       const [data, setData] = React.useState([])
       React.useState(() => {
              fetch('https://restcountries.com/v3.1/all')
                     .then(response => response.json())
                     .then(commits => setData(commits))
       }, [])
       // console.log(data);

       return (
              <Wrapper>
                     <Hero/>

                     <ul className="list">
                            {
                                   data.map((row, index) => (
                                          <li className={`item ${homeClassname}`} key={index}>
                                                 <NavLink className={`list-navlink ${homeClassname}`} to={`/home/${row?.name.common}`}>
                                                        <img className="flag-img" src={row.flags.png} alt="flagsss" />
                                                        <div className="item-section">
                                                        <h3 className="item-title">{row?.name.common}</h3>
                                                        <ul className="inner-list">
                                                               <li className="inner-item">
                                                                      <span className="inner-heading">Population:</span>
                                                                      <p className="inner-desc">{row?.population}</p>
                                                               </li>
                                                               <li className="inner-item">
                                                                      <span className="inner-heading">Region:</span>
                                                                      <p className="inner-desc">{row?.region}</p>
                                                               </li>
                                                               <li className="inner-item">
                                                                      <span className="inner-heading">Capital:</span>
                                                                      <p className="inner-desc">{row?.capital}</p>
                                                               </li>
                                                        </ul>
                                                        </div>
                                                 </NavLink>
                                          </li>
                                   ))
                            }
                     </ul>
              </ Wrapper>
       )
}


const Wrapper = styled.div`
.home-light-mode {
       background: #FFF;
       color: #111517;
}

.home-dark-mode {
       background: #2B3844;
       color: #FFF;
}

.list {
       display: grid;
       grid-template-columns: auto auto auto auto;
       gap: 75px;

       margin: 0;
       padding: 0;
       list-style: none;
}

.item {
       max-width: 267px;
       width: 100%;
       border-radius: 5px;
       box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
}

.list-navlink {
       max-width: 264px;
       width: 100%;
       text-decoration: none;
}

.flag-img {
       max-width: 267px;
       width: 100%;
       max-height: 160px;
       height: 100%;
       border-radius: 5px;
}

.item-section {
       display: flex;
       flex-direction: column;
       padding: 24px 24px 46px;
}

.item-title {
       margin: 0;
       max-width: 240px;
       width: 100%;
       font-size: 18px;
       font-weight: 800;
       line-height: 26px;
}

.inner-list {
       display: flex;
       flex-direction: column;

       margin: 0;
       margin-top: 16px;
       padding: 0;
       list-style: none;
}

.inner-item {
       display: flex;
       align-items: center;
}

.inner-item:not(:last-child) {
       margin-bottom: 8px;
}

.inner-heading {
       font-size: 14px;
       font-weight: 600;
       line-height: 16px;
}

.inner-desc {
       margin: 0;
       font-size: 14px;
       font-style: normal;
       font-weight: 300;
       line-height: 16px;
}
`