import React from "react";

import {CircularProgressbar} from 'react-circular-progressbar';

import {MdLink, MdCheckCircle, MdError} from 'react-icons/md';

import { Contain, FileInfo,Preview } from "./styles";

const FileList = ({ files }) => (
  <Contain>
      {files.map(uploadedFile => (
            <li>
            <FileInfo>
              <Preview src={uploadedFile.preview} />
              <div>
                <strong>{uploadedFile.name}</strong>
                <span> {uploadedFile.readableSize}{" "}
                  { !!uploadedFile.url &&(
                    <button onClick={() => {}}>Excluir</button>
                  )}
                </span>
              </div>
            </FileInfo>
    
            <div>
              {!uploadedFile.uploaded && !uploadedFile.error && (
                <CircularProgressbar
                styles= {{
                  root: { width: 24},
                  path: { stroke: '#005166'}
                }}
                strokeWidth={10}
                percentage={uploadedFile.progress}
                />
              )}
                {uploadedFile.url && (
                <a
                  href="https://images.unsplash.com/photo-1531170515419-b26209bbe710?ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <MdLink style={{marginRight: 8}} size={24} color="222" />
                </a>
                 )}

                  { uploadedFile && <MdCheckCircle size={24} color="#78e5d5" /> }
                  { uploadedFile.error && <MdError size={24} color="#e57878" /> }
            </div>
          </li>

      ))}
  </Contain>
);

export default FileList;