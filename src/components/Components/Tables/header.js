import React from 'react'
import translation from '../../Translation';
const Header = (props) => {
  const headerData = props.headerData;
  return(
  <table className='mainTable' cellPadding="0" cellSpacing="0">
    <tr className='header'>
      <td className='tdWidth'>
        <img src={headerData.imgPath} height='38' width='94' alt="Brand logo" />
      </td>
      <td className='reportTitle'>
      {headerData.reportName}
      </td>
      <td className='tdWidth'></td>
    </tr>
    <tr className='header'>
      <td className='tdWidth'>
        <p className='date'>
          {`${headerData.date.toLocaleDateString()} ${headerData.date.toLocaleTimeString()}`}
        </p>
      </td>
      <td className='tdWidth'></td>
      <td className='preparator'>
        Preparator: {headerData.userName}
      </td>
    </tr>
  </table>
  )
}

export default Header;