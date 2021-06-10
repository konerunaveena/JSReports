
import React, { useState, useEffect} from 'react';
import JSReportContainer from '../JSReportContainer/JSReportContainer.jsx'
import Report from './Report';

const ReportsPage = (props) => {

    const { intl } = props;
    const {headerInfo,reportInfo} = props;
    const [openJSReport, setOpenJSReport] = useState(false)
    const [reportConfig, setReportConfig] = useState({})
    
    const [isReportDownloadable, setReportDownloadable] = useState(false)
    const reportData = <Report setReportDownloadable={setReportDownloadable} headerData ={headerInfo} reportInfo={reportData}/>
       
    return (
        <>
          {reportData && (
                <JSReportContainer
                    title={translation('Report (preview)')}
                    open={openJSReport}
                    isDownloadable={isReportDownloadable}
                    onClose={() => setOpenJSReport(false)}
                    config={reportConfig}
                    jsReportApi={reportConfig.jsReportApiUrl}
                    intl={intl} >
                    {reportData}
                </JSReportContainer>
            )}
        </>
    )
}
export default ReportsPage