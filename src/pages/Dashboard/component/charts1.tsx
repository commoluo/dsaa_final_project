import React, { useEffect, useRef } from 'react';
import { Card } from 'antd';

const TableauEmbed1: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divElement = document.getElementById('viz1734026797940');
    if (divElement) {
      const vizElement = divElement.getElementsByTagName('object')[0];
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = '1169px';
        vizElement.style.height = '854px';
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '1169px';
        vizElement.style.height = '854px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '2477px';
      }
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      vizElement.parentNode?.insertBefore(scriptElement, vizElement);
    }
  }, []);

  return (
    <Card title="Tableau Visualization" style={{ width: '100%', marginTop: 16 }}>
      <div
        ref={containerRef}
        className="tableauPlaceholder"
        id="viz1734026797940"
        style={{ position: 'relative' }}
      >
        <noscript>
          <a href="#">
            <img
              alt="仪表板 1"
              src="https://public.tableau.com/static/images/_1/_17339891093680/1/1_rss.png"
              style={{ border: 'none' }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: 'none' }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="_17339891093680/1" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/_1/_17339891093680/1/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
        </object>
      </div>
    </Card>
  );
};

export default TableauEmbed1;