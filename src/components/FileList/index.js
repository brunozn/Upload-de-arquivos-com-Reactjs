import React from "react";

import {CircularProgressbar} from 'react-circular-progressbar';

import {MdLink, MdCheckCircle, MdError} from 'react-icons/md';

import { Contain, FileInfo,Preview } from "./styles";

const FileList = () => (
  <Contain>
    <li>
        <FileInfo>
          <Preview src="https://images.unsplash.com/photo-1531170515419-b26209bbe710?ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80"/>
          <div>
            <strong>imag.png</strong>
            <span> 64kb
                <button onClick={() => {}}>
                  Excluir
                </button>
              
            </span>
          </div>
        </FileInfo>

        <div>
          <CircularProgressbar
            styles= {{
              root: { width: 24},
              path: { stroke: '#005166'}
            }}
            strokeWidth={10}
            percentage={60}
            />

            <a
              href="https://images.unsplash.com/photo-1531170515419-b26209bbe710?ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80"
              target="_blank"
              rel="noopener noreferrer"
              >
                <MdLink style={{marginRight: 8}} size={24} color="222" />
            </a>

            <MdCheckCircle/>
            <MdError/>
        </div>

      </li>
  </Contain>
);

export default FileList;