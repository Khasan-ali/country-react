import React from "react"
import styled from "styled-components"

export const Header = () => {

       return (
              <Wrapper>
                     <div className="country-header">
                            <h1 className="header-heading">Where in the world?</h1>

                            <div className="header-dark-section">
                                   <span className="material-symbols-outlined dark-icon">dark_mode</span>
                                   <p className="dark-text">Dark Mode</p>
                            </div>
                     </div>
              </ Wrapper>
       )
}

const Wrapper = styled.div`
.country-header {
       display: flex;
       align-items: center;
       justify-content: space-between;
       padding: 24px;
       background: #FFF;
       box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
}

.header-heading {
       margin: 0;
}

.header-dark-section {
       display: flex;
       align-items: center;
}

.dark-text {
       margin: 0;
       margin-left: 8px;
}
`