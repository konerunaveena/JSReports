import React, { useEffect, useRef, useState, cloneElement } from "react";
import { useStore } from "react-redux";
import downloadPDF from "./pdfDownload.jsx";
import "./JSReportContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faFilePdf,
  faFileWord,
} from "@fortawesome/free-solid-svg-icons";
import ClipLoader from "react-spinners/ClipLoader";
import Zoom from "@material-ui/core/Zoom";

/**
 * Preview a report
 * Navigation between pages / download
 * @param {Array<JSX.Element>} props.children List of pages of the report
 * @param {boolean} props.isOpen Opening boolean
 * @param {boolean} props.onClose Closing callback
 * @param {string} props.title Title of the preview header
 * @param {boolean} props.isDownloadable Allows to download report if true, else disable the feature
 * @param {object} props.store Redux store
 * @param {object} props.intl
 * @param {object} props.config Configuration file, containing :
 * - fileName : string, name of file to download
 * - styles.url : string, url of css folder (hosted on azure)
 * - stiles.files : array<string>, name of css files to use, at the url
 * @param {string} props.jsReportApi js report api (e.g store.api.jsReport)
 */
const JSReportContainer = (props) => {
  const { intl, config, title, isOpen, onClose, isDownloadable, jsReportApi } =
    props;
  const [reportCurrentPreviewIndex, setReportCurrentPreviewIndex] = useState(0);
  const [pageList, setPageList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [scrollBarWidth, setScrollBarWidth] = useState(0);

  const popupRef = useRef();
  const topBarRef = useRef();
  const store = useStore();

  const downloadWord = () => {
    // To develop
  };

  if (isOpen) {
    return (
      <div className="js-report">
        <div className="report-back">
          <Zoom in={true}>
            <div className="report-popup" ref={popupRef}>
              {cloneElement(props.children, {
                reportCurrentPreviewIndex: reportCurrentPreviewIndex,
                updateList: (data) => setPageList(data),
              })}
            </div>
          </Zoom>
        </div>
      </div>
    );
  } else return null;
};

export default JSReportContainer;
