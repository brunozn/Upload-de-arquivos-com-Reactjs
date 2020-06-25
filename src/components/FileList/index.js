import React from "react";

import { Contain, FileInfo,Preview } from "./styles";

const FileList = () => (
  <Contain>
    <li>
        <FileInfo>
          <Preview src=""/>
          <div>
            <strong>imag.png</strong>
            <span> 64kb
                <button onClick={() => {}}>
                  Excluir
                </button>
              
            </span>
          </div>
        </FileInfo>

      </li>
  </Contain>
);

export default FileList;