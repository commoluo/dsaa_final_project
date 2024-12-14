import React, { useEffect } from 'react';
import { Card } from 'antd';

const TableauEmbed: React.FC = () => {
  useEffect(() => {
    const divElement = document.getElementById('viz1734000661194');
    const vizElement = divElement?.getElementsByTagName('object')[0];
    if (vizElement) {
      vizElement.style.width = `${200 * 16 / 9}px`;
      vizElement.style.height = '200px'; // 明确限制 Tableau 图表高度
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      vizElement.parentNode?.insertBefore(scriptElement, vizElement);
    }
  }, []);

  return (
    <Card
      title="Tableau Visualization"
      style={{
        width: '100%',
        margin: '16px 0',
        overflow: 'hidden', // 确保内容不超出卡片范围
      }}
    >
      <div
        className="tableauPlaceholder"
        id="viz1734000661194"
        style={{
          position: 'relative',
          width: '100%',
          height: '200px', // 控制容器高度
          overflow: 'hidden',
        }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Carbohydrates"
              src="https://public.tableau.com/static/images/te/test_17339903521450/Carbohydrates/1_rss.png"
              style={{ border: 'none' }}
            />
          </a>
        </noscript>
        <object
          className="tableauViz"
          style={{
            display: 'none',
          }}
        >
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="test_17339903521450/Carbohydrates" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/te/test_17339903521450/Carbohydrates/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="zh-CN" />
        </object>
      </div>
    </Card>
  );
};

export default TableauEmbed;