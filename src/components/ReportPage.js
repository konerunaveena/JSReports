
import React, { useState, useEffect} from 'react';
import { injectIntl } from "react-intl";
import ReportContainer from './reportContainer'
import { translation } from '@carrier/ngecat-reactcomponents';
import {headerData,reportData} from './reportData';
import ReportsDialog from './reportsDialog';

const ReportsPage = (props) => {
    const {headerData} = props;
    const { intl } = props;
    const [openJSReport, setOpenJSReport] = useState(false)
    const [reportConfig, setReportConfig] = useState({})
    const [reportData, setReportData] = useState(null);
    const [isReportDownloadable, setReportDownloadable] = useState(false)
    
    const showReport = () => {
        setReportDownloadable(false)
        setOpenJSReport(true)
        setReportData(<ReportsDialog setReportDownloadable={setReportDownloadable} headerInfo ={headerData} reportInfo={reportData}/>)
    }
   
    return (
        <>
           
            {reportData && (
                <ReportContainer
                    title={translation('Report (preview)')}
                    open={openJSReport}
                    isDownloadable={isReportDownloadable}
                    onClose={() => setOpenJSReport(false)}
                    intl={intl} >
                    {reportData}
                </ReportContainer>
            )}
        </>
    )
}
export default injectIntl((ReportsPage));