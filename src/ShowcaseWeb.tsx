import { useState } from 'react';
import './ShowcaseWeb.css';

type ShowcaseType = {
  meter: number,
  name: string,
  preview: JSX.Element,
  link: string
}

function ShowcaseWeb({ name, preview, link }: ShowcaseType): JSX.Element {
  const [linkPopup, setLinkPopup] = useState<string | null>(null);

  return (
    <div 
      className="showcase"
      onMouseEnter={() => setLinkPopup(link)} 
      onMouseLeave={() => setLinkPopup(null)} 
    >
      <div 
        className="preview"
        onClick={() => { window.open(`${link}`, "_blank") }}  
      >
        {preview}
        {linkPopup === `${link}` && <span className="linkPopup">{link}</span>}
      </div>
      <h3>
        {name}
      </h3>
    </div>
  );
}

export default ShowcaseWeb;