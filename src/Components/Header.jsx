import React from "react"
import styled from "styled-components"
import { useTheme } from "../Hooks/useTheme"

export const Header = () => {

       const [state, setState] = useTheme()
       
       const handleCheck = () => {
              setState(!state)
       }
       // console.log(state);

       let classNames = 'country-header'
       if(state) {
              classNames += ' countries-light-mode'
       }else {
              classNames += ' countries-dark-mode'
       }


       return (
              <Wrapper>
                     <div className={classNames}>
                            <div className="container header-center">
                            <h1 className="header-heading">Where in the world?</h1>

                            <label className="header-dark-section">
                                   <input className="visually-hidden" checked={state} onChange={handleCheck} type="checkbox" value={'theme'} />
                                   <span className="material-symbols-outlined dark-icon">dark_mode</span>
                                   <p className="dark-text">Dark Mode</p>
                            </label>
                            </div>
                     </div>
              </ Wrapper>
       )
}

const Wrapper = styled.div`
.country-header {
       padding: 24px 0;
       box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
}

.header-center {
       display: flex;
       align-items: center;
       justify-content: space-between;
}

.header-heading {
       margin: 0;
       font-size: 24px;
       font-weight: 800;
       line-height: normal;
}

.header-dark-section {
       display: flex;
       align-items: center;
       cursor: pointer;
}

.dark-text {
       margin: 0;
       margin-left: 8px;
       font-size: 16px;
       font-weight: 600;
       line-height: normal;
}
`