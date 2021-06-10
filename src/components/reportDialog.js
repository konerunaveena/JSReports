import React, { useState, memo, useEffect } from 'react';
import { injectIntl } from "react-intl"; // for localization
import { translation,Report } from '@carrier/ngecat-reactcomponents';

import ReportTable from "./reportTable"

const ReportsDialog = (props) => {
    const { reportCurrentPreviewIndex, setReportDownloadable,headerInfo,reportInfo} = props
    const [reportHooks, setReportHooks] = useState([<></>])
    const [reportData, setReportData] = useState(null)
    setReportDownloadable(true)
    useEffect(() => {
        const report = [<Report headerInfo={headerInfo} reportInfo = {reportInfo}/>]
        setReportData(report)
    }, [])

    useEffect(() => {
        const output = reportData
            ? [
                <Report headerInfo={headerInfo} reportInfo = {reportInfo}/>
              ].filter((page) => page)
            : [<></>]

        setReportHooks(output)
        props.updateList(output)
    }, [reportData])

    return reportData && reportCurrentPreviewIndex < reportHooks.length ? reportHooks[reportCurrentPreviewIndex] : reportHooks[0]
}

export default memo(injectIntl(ReportsDialog));
