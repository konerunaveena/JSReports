import React from 'react';
import classnames from 'classnames'

//set Table Header Background Color
export const getBackgroundColor = (region) => {
  const backgroundColorByRegion = {
    ASIA: 'color1',
    NA: 'color2',
    default: 'color3',
  }
  return backgroundColorByRegion[region] || backgroundColorByRegion['default']
}
// Text Align
export const textAlign = (val) => {
  const align = {
    left: 'left',
    right: 'right',
    default: 'center',
  }
  return align[val] || align['default']
}

//dynamic header
export const generateHeaderTable = (reportData, report) => {
  let rows = [];
  if (report.headerLength === "0") {
    rows.push(<tr></tr>)
  }
  else if (report.headerLength === "1") {
    rows.push(
      <tr>
        <th colSpan={report.colSpanVal}
          className={
            classnames(
              { 'table75': true },
              report.textAlign,
              report.backgroundColor["thcolor1"])
          }
        >
          {reportData.header[0]}
        </th>
      </tr>
    )
  }
  else if (report.headerLength === "2") {
    rows.push(
      <tr>
        <th
          className={
            classnames(
              { 'ctableHeaderTh1': true },
              report.textAlign,
              report.fontWeight,
              report.backgroundColor["thcolor1"])
          }
        >
          {reportData.header[0]}
        </th>
        <th
          className={
            classnames(
              { 'ctableHeaderTh1': true },
              report.textAlign,
              report.fontWeight,
              report.backgroundColor["thcolor1"])
          }
        >
        </th>
        <th
          className={
            classnames(
              { 'ctableHeaderTh2': true },
              report.fontWeight,
              report.backgroundColor["thcolor2"])
          }
        >
          {reportData.header[1]}
        </th>
      </tr>
    )
  }
  else if (report.headerLength === "4") {
    rows.push(
      <tr>
        <th colSpan={3}
          className={
            classnames(
              { 'ctableHeaderTh1': true },
              report.textAlign,
              report.fontWeight,
              report.backgroundColor["thcolor1"])
          }
        >
          {reportData.header[0]}
        </th>
        <th
          className={
            classnames(
              { 'ctableHeaderTh2': true },
              report.backgroundColor["thcolor2"])
          }
        >
          {reportData.header[1]}
        </th>
      </tr>
    )
  }
  return rows;
}

