import React, { useEffect, useRef } from 'react';
import { Card } from 'antd';

const TableauEmbedCholesterolSodium: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divElement = document.getElementById('viz1734195259673');
    if (divElement) {
      const vizElement = divElement.getElementsByTagName('object')[0];
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = '1000px';
        vizElement.style.height = '827px';
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '1000px';
        vizElement.style.height = '827px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '1827px';
      }
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      vizElement.parentNode?.insertBefore(scriptElement, vizElement);
    }
  }, []);

  return (
    <Card title="Dashboard: Cholesterol and Sodium Level Comparison" style={{ width: '100%', marginTop: 16 }}>
      <div
        ref={containerRef}
        className="tableauPlaceholder"
        id="viz1734195259673"
        style={{ position: 'relative' }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Cholesterol and Sodium Level Comparison"
              src="https://public.tableau.com/static/images/qi/qinwenwang-cs/12/1_rss.png"
              style={{ border: 'none' }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: 'none' }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="qinwenwang-cs/12" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/qi/qinwenwang-cs/12/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="zh-CN" />
          <param name="filter" value="publish=yes" />
        </object>
      </div>
    </Card>
  );
};

export default TableauEmbedCholesterolSodium;