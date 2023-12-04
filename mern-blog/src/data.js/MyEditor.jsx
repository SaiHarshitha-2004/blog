import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onChange = (newState) => {
    setEditorState(newState);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  return (
     <div className='h-screen border border-black p-3'>
        <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={onChange}
        />
     </div>
  );
};

export default MyEditor;
