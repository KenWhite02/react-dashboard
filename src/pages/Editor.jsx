import React from 'react';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';

import { EditorData } from '../data/dummy';

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 mb-16 md:mb-0 bg-white rounded-xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Toolbar, Link, QuickToolbar, Image]} />
        <EditorData />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
