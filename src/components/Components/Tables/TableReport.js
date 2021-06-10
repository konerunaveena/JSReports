import React, { useState } from 'react';
import classnames from 'classnames'
import { getBackgroundColor, textAlign, generateHeaderTable } from '../tableHeader'

const TableReport = (props) => {
  const reportData = props.data;
  const region = "ASIA";
  
  return (
    <>
      <table className='table100' cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <th colSpan="3"
            className={
              classnames({ 'ctableHeader': true},getBackgroundColor(region))
            }
            >
              {reportData.title}
            </th>
          </tr>
          {
            generateHeaderTable(reportData,props)
          }
          {
            reportData.body.map((list, index) => {
              return (
                <tr key={index}>
                  <td
                  className={
                    classnames(
                      { 'ctableHeaderTh1': true},
                      props.fontWeight,
                      props.backgroundColor["thcolor1"])
                  }
                  >
                    {list.name}
                  </td>
                  <td 
                  className={
                    classnames(
                      { 'ctableSpan': true},
                      props.fontWeight,
                      props.backgroundColor["thcolor1"])
                  }
                  >
                    {list.unit}
                  </td>
                  <td
                  className={
                    classnames(
                      { 'ctableHeaderTh2': true},
                      { 'center': true},
                      props.fontWeight,
                      props.backgroundColor["thcolor2"])
                  }
                  >
                    {list.value}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}
export default TableReport;