import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme } from 'antd';
import React from 'react';
import TableauEmbed from "../components/card"; // 假设 TableauEmbed 是一个 Tableau 嵌入组件

const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
  Component?: React.ReactNode; // 可传入的 React 组件
}> = ({ title, href, index, desc, Component }) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '300px', // 合理的卡片最小宽度
        maxWidth: '500px', // 合理的卡片最大宽度
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>

      {/* 如果提供了组件，则渲染组件，否则展示链接 */}
      {Component ? (
        <div
          style={{
            width: '100%',
            height: '300px', // 限制展示组件的高度
            marginTop: '10px',
          }}
        >
          {Component}
        </div>
      ) : (
        <a href={href} target="_blank" rel="noreferrer">
          了解更多 {'>'}
        </a>
      )}
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('')",
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            Introduction to Tableau & Data Visualization
          </div>
          <p
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '65%',
            }}
          >
            Tableau is a powerful tool for data visualization and analysis. Explore its capabilities through examples and understand how it can transform raw data into actionable insights.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="https://www.tableau.com/why-tableau/what-is-tableau"
              title="What is Tableau?"
              desc="Learn the basics of Tableau and how it empowers organizations with data insights through interactive dashboards and visualizations."
            />
            <InfoCard
              index={2}
              title="Explore Sample Dashboard"
              Component={<TableauEmbed />}
              desc="An interactive Tableau dashboard showcasing real-world data visualization examples for analysis and insights."
            />
            <InfoCard
              index={3}
              title="Why Data Visualization?"
              href="https://www.tableau.com/learn/articles/data-visualization"
              desc="Understand the importance of data visualization in decision-making and how Tableau enables effective communication of insights."
            />
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;