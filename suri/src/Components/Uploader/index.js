import React, { useState } from "react";
import { connect } from "react-redux";
import Spinner from "./Spinner";

import { upload } from "../../redux/app";
import "./uploader.css";

const Uploader = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  if (props.uploading) {
    return (
      <div className="centered">
        <Spinner />
        <p>Processing...</p>
      </div>
    );
  }
  if (props.uploadSuccess) {
      return (
          <div className="centered">
              <h1>Results</h1>
              <a href="http://localhost:5000/api/download" download><button>Download</button></a>
          </div>
      );
  }
  return (
    <div className="centered uploader">
      <h1>Upload CSV</h1>
      <label className="custom-file-upload" htmlFor="upload">
        Browse
      </label>
      <input
        id="upload"
        type="file"
        multiple={false}
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      {selectedFile ? <h2>{selectedFile.name}</h2> : null}
      <button onClick={() => {
          if (!selectedFile) {
              return;
          }
          const data = new FormData();
          data.append('file', selectedFile);
          props.upload(data, props.category);
      }}>Upload</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    uploading: state.app.uploading,
    uploadSuccess: state.app.uploadSuccess
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upload: (file, category) => dispatch(upload(file, category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Uploader);
