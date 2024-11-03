import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Editor = ({ page }) => {
  const [content, setContent] = useState(localStorage.getItem(page) || '');
  const navigate = useNavigate();

  const handleSave = () => {
    localStorage.setItem(page, content);
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Edit {page} Page</h2>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Editor;
