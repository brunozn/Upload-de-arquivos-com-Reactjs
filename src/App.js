import React, {Component} from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

import GlobalStyle from './styles/global.js';

import {Containe , Content} from './styles';

import Upload from "./components/Upload";
import FileList from "./components/FileList";

class App extends Component{
  state = {
    UploadedFiles: [],
  };

  handleUpload = files => {
    console.log(files)
    const UploadedFiles = files.map(file => ({
      file, 
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      Uploaded: false,
      error: false,
      url: null,
    }))

    this.setState({
      UploadedFiles: this.state.UploadedFiles.concat(UploadedFiles)
    });
  };

  
  render() {
    const { UploadedFiles} = this.state;
  return (
    <Containe> 
       <GlobalStyle />
      <Content>
      <Upload onUpload={this.handleUpload} />
      { !!UploadedFiles.length  && (
          <FileList files={UploadedFiles} />
      )}
      

      </Content>
    </Containe>
   
  );
}
}
export default App;
