import React, { Component } from "react";
class FileInput extends Component {
  displayName = "FileInput";
  state = {
    length: 0
  };
  loadFile = file => {
    return new Promise((resolve, reject) => {
      const data = {};
      const reader = new FileReader();
      reader.onload = e => {
        const fileResult = e.target.result;
        let format =
          "." +
          fileResult.substring(
            fileResult.indexOf("/") + 1,
            fileResult.indexOf(";")
          );
        data.fileName = file.name;
        data.fileSize = file.size;
        data.fileResult = fileResult;
        data.format = format === ".jpeg" ? ".jpg" : format;
        data.result = fileResult.substring(fileResult.indexOf(",") + 1);
        resolve(data);
      };
      reader.readAsDataURL(file);
    });
  };
  onChange = () => {};
  render = () => {
    const { length } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="file-loader">
            <figure>
              <div>
                <span>Choose File</span>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </div>
              <figcaption>
                {length !== 0 && <span>{`Files added : ${length}`}</span>}
              </figcaption>
            </figure>
          </label>
          <input id="file-loader" type="file" onChange={this.onChange} />
        </div>
        <style jsx>{`
          #file-loader {
            display: none;
          }
          figure > div {
            color: #444;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          figure svg {
            width: 1.3em;
            height: 1.3em;
            fill: #fff;
            background: #222;
            stroke-width: 1;
            border-radius: 5px;
            margin-left: 0.4em;
          }
          figcaption{
              padding-top: .4em;
              color : #ccc;
              
          }
        `}</style>
      </div>
    );
  };
}

export default FileInput;
