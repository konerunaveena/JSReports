import React, { useState } from 'react';
import classnames from 'classnames'
import { getBackgroundColor, generateHeaderTable } from '../tableHeader'

const MultiColumnTable = (props) => {
  const reportData = props.data;
  const region = "ASIA";
  return (

    <>
      <table className="table100" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <th colSpan="4"
              className={
                classnames({ 'ctableHeader': true }, getBackgroundColor(region))
              }
            >
              {reportData.title}
            </th>
          </tr>
          {
            generateHeaderTable(props.headerLength, reportData, props.backgroundColor, props.colSpanVal)
          }
          {
            reportData.body.map((subdata, subIndex) => {

              return (
                <>
                  <th colSpan="4"
                    className={
                      classnames({
                        'commonBorder': true
                      },
                        props.textAlign,
                        props.fontWeight,
                        props.backgroundColor["thcolor1"]
                      )
                    }>
                    {subdata.subHeader}
                  </th>
                  {
                    subdata.data.map((type, typeIndex) => {
                      return (
                        <tr key={subIndex}
                          className={
                            classnames({
                              'commonBorder': true
                            },
                              props.fontWeight,
                              props.backgroundColor["thcolor1"]
                            )
                          }
                        >
                          {
                            typeIndex === 0 &&
                            <th
                              rowSpan={subdata.data.length}
                              className={
                                classnames({
                                  'borderBottom': true
                                }
                                )
                              }
                            >
                              {subdata.type}
                            </th>
                          }
                          <th
                            className={
                              classnames(
                                { 'commonBorder': true },
                                { 'left': true },
                                props.fontWeight,
                                props.backgroundColor["thcolor1"]
                              )
                            }
                          >
                            {type.name}
                          </th>
                          <th
                            className={
                              classnames(
                                { 'ctableSpan': true },
                                props.fontWeight,
                                props.backgroundColor["thcolor1"]
                              )
                            }
                          >
                            {type.unit}
                          </th>
                          <td
                            className={
                              classnames(
                                { 'commonBorder': true },
                                { 'center': true },
                                props.fontWeight,
                                props.backgroundColor["thcolor2"]
                              )
                            }
                          >
                            {type.value}
                          </td>
                        </tr>
                      )
                    })
                  }
                </>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}
export default MultiColumnTable