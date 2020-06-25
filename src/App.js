import React from 'react';

import GlobalStyle from './styles/global.js';

import {Containe , Content} from './styles';

import Upload from "./components/Upload";
//import FileList from "./components/FileList";

function App() {
  //const { uploadedFiles } = '';
  return (
    <Containe> 
       <GlobalStyle />
      <Content>
      <Upload />

      </Content>
    </Containe>
   
  );
}

export default App;
