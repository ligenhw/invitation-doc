import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '易用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        通过微信几分钟即可创建出精美的邀请函，分享给微信好友。
      </>
    ),
  },
  {
    title: '功能强大',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        包含 海报 相册 导航 留言 弹幕 礼金 婚礼视频点播等功能
      </>
    ),
  },
  {
    title: '开源',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        本项目开源发布于 GitHub 面向全世界人用作对技术的学习交流使用
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
