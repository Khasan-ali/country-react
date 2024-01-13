import React from "react";
import { useParams, Await } from "react-router-dom";

export const Detailing = () => {

       const [detail, setDetail] = React.useState({})

       const { productName } = useParams();

       React.useEffect(() => {
              fetch(`https://restcountries.com/v3.1/name/${productName}`)
                     .then(response => response.json())
                     .then(data => setDetail(data[0]))
       }, [])

       console.log(detail);

       return (
              <>
                     <div className="detail-hero">
                            <span className="material-symbols-outlined">keyboard_backspace</span>
                            <p className="back-text">Back</p>
                     </div>

                     <div className="detail">
                            <img src={detail?.flags?.png} alt="" />
                            <div className="detail-section">
                                   <h2 className="detail-title">{detail?.name?.common}</h2>
                                   <div className="detail-info">
                                          <ul className="detail-list">
                                                 <li className="detail-item">
                                                        <span className="detail-list-span">Native Name</span>
                                                        <p className="detail-list-text">{detail?.name?.nativeName?.eng?.common}</p>
                                                 </li>
                                                 <li className="detail-item">
                                                        <span className="detail-list-span">Population</span>
                                                        <p className="detail-list-text">{detail?.population}</p>
                                                 </li>
                                                 <li className="detail-item">
                                                        <span className="detail-list-span">Region</span>
                                                        <p className="detail-list-text">{detail?.region}</p>
                                                 </li>
                                                 <li className="detail-item">
                                                        <span className="detail-list-span">Sub Region</span>
                                                        <p className="detail-list-text">{detail?.subregion}</p>
                                                 </li>
                                                 <li className="detail-item">
                                                        <span className="detail-list-span">Capital</span>
                                                        <p className="detail-list-text">{detail?.capital}</p>
                                                 </li>
                                          </ul>
                                          <ul className="detail-list">
                                                 <li className="detail-item">
                                                        <span className="detail-list-span">Top Level Domain</span>
                                                        <p className="detail-list-text"></p>
                                                 </li>
                                                 <li className="detail-item">
                                                        <span className="detail-list-span">Currencies</span>
                                                        <p className="detail-list-text"></p>
                                                 </li>
                                                 <li className="detail-item">
                                                        <span className="detail-list-span">Language</span>
                                                        <p className="detail-list-text">{detail?.languages?.ron}</p>
                                                 </li>
                                          </ul>
                                   </div>
                                   <div className="detail-bottom">
                                          <p className="detail-bottom-heading">Border Countries:</p>
                                          <ul className="detail-bottom-list">
                                                 {detail?.borders?.map((row, index) => (
                                                 <li className="detail-bottom-item" key={index}>{row}</li>
                                                 ))}
                                          </ul>
                                   </div>
                            </div>
                     </div>

              </>
       )
}