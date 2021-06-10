import React, { useState, useEffect } from 'react';
import './styles.css';
import TableReport from './Tables/TableReport';
import MultiColumnTable from './Tables/MultiColumnTable';
import  {reportData} from './Tables/ReportData';
import Header from "./Tables/header";

const Report = (props) => {
  console.log({props})
  const {headerInfo,reportInfo} = props;
  return (
    <>
      <table className="maintbl" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
          <Header headerData={props.headerInfo} />
          </tr>
        </tbody>
      </table>
      <table className="maintbl" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <table className='mainTable' cellPadding="0" cellSpacing="0">
              <tr>
                <td colSpan="2">
                  <p className='formatTitle'>
                    {headerInfo.formatTitle}
                  </p>
                  <p className='subTitle'>
                    {headerInfo.subTitle}
                  </p>
                </td>
              </tr>
            </table>
            <table className='subTbl' cellPadding="0" cellSpacing="0">
              <tr>
                <td className="column">
                  <TableReport data={reportData[0]}
                    headerLength="2"
                    colSpanVal="2"
                    fontWeight="normal"
                    textAlign="left"
                    backgroundColor={{ thcolor1: "color2", thcolor2: "color3" }}
                    className='subTable'
                  />
                </td>
                <td className="column center" >
                  <img src={headerInfo.imgPathOne} alt="Brand logo" width="200" height="123" />
                </td>
              </tr>
              <tr className='pageBreak'>
                <td className="column">
                  <TableReport data={reportData[1]}
                    headerLength="1"
                    colSpanVal="3"
                    fontWeight="bold"
                    textAlign="left"
                    backgroundColor={{ thcolor1: "color2", thcolor2: "color4" }}
                  />
                </td>
                <td className='column'>
                  <MultiColumnTable data={reportData[4]}
                    headerLength="2"
                    colSpanVal="3"
                    fontWeight="normal"
                    textAlign="left"
                    backgroundColor={{ thcolor1: "color2", thcolor2: "color3" }}
                  />
                </td>
              </tr>
              <tr className='pageBreak'>
                <td className="column">
                  <TableReport data={reportData[3]}
                    headerLength="0"
                    colSpanVal="3"
                    fontWeight="bold"
                    textAlign="left"
                    backgroundColor={{ thcolor1: "color2", thcolor2: "color4" }}
                  />
                </td>
              </tr>
            </table>
          </tr>
        </tbody>
      </table>
    </>
  )
}
export default Report;