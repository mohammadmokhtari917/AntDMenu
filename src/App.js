import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;
const navitems=[
  {icon:NotificationOutlined,name:'GENERAL',drop:['Pictures','Standards','TagSetup','UoM','Equipments']},
  {icon:LaptopOutlined,name:'PLANT',drop:['db1','db2','db3']},
  {icon:UserOutlined,name:'USER',drop:['Security','Shift']}
               ]           

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = navitems.map(
  (sub , index) => {
    console.log(sub.icon);
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(sub.icon),
      label: `${sub.name}`,

      children: sub.drop.map((name, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `${name}`,
        };
      }),
    };
  },
);

const App: React.FC = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items2}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default App;