import EmptyState from '@atlaskit/empty-state';
import { Alert, Button, Layout, notification, Space } from 'antd';
import Head from 'next/head';
const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    notification.open({
      message: "Dave, I'm afraid I can't do that.",
      description:
        'This notification content should be powered by us, along with tracking the metrics of how it performs with impressions and clicks!',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Header>
          <Head>
            <title>HappyPath Demo Site</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <main>
            <div>
              <h1>Welcome to the Cabana HappyPath Demo Site!</h1>
              <p>
                <h4>Get Started:</h4>
                <code>npm i emptystates</code>
              </p>

              {/* NOTIFICATION EXAMPLE */}
              <Button type="primary" onClick={openNotification}>
                Open the notification box
              </Button>
              {/* END NOTIFICATION EXAMPLE */}

              {/* Empty state - replace with ours! */}
              <EmptyState
                header="hello empty state!"
                description="This is of the empty state from atlassian component"
                primaryAction={
                  <Button type="primary">Works with existing buttons</Button>
                }
              />
              {/* ALERT */}
              <Alert
                message="You are getting close to your monthly credit limit"
                description="You can upgrade to the enterprise plan and you will be able to get 10,000 credits per month. Wowza!"
                type="warning"
                showIcon
                closable
                action={
                  <Space direction="horizontal">
                    <Button size="small" type="primary">
                      Learn more
                    </Button>
                    <Button size="small" danger type="ghost">
                      Schedule a walk-through
                    </Button>
                  </Space>
                }
              />
            </div>
          </main>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Synthesize Inc.</Footer>
      </Space>
    </>
  );
}
