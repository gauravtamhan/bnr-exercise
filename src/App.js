import React, { useState } from 'react';
import { Layout, Row, Col, Space } from 'antd';
import useRequest from 'hooks/useRequest';
import AsyncRequestWrapper from 'components/AsyncRequestWrapper';
import Post from 'components/Post';

const { Content } = Layout;

const URL = 'https://jsonplaceholder.typicode.com/posts';
const ERR_MSG =
    'Error loading blog posts at this time. Please try again later.';

function App() {
    const { data, error, loading } = useRequest(URL, ERR_MSG);
    const [currentUserId, setCurrentUserId] = useState(1);

    const hasData = data?.length > 0;
    let leftColData = [];
    let rightColData = [];

    if (hasData) {
        data.forEach(post => {
            if (post.userId === currentUserId) {
                leftColData.push(post);
            } else {
                rightColData.push(post);
            }
        });
    }

    const generatePosts = ({ id, title, body, userId }) => (
        <Post
            key={id}
            title={title}
            body={body}
            userId={userId}
            onClick={() => setCurrentUserId(userId)}
        />
    );

    return (
        <AsyncRequestWrapper
            loading={loading}
            error={error}
            empty={data && !hasData}
        >
            <Layout>
                <Content className="custom-content-style">
                    <Row gutter={16}>
                        <Col span={6} offset={2}>
                            <Space direction="vertical" size="middle">
                                {leftColData.map(generatePosts)}
                            </Space>
                        </Col>
                        <Col span={14} offset={2}>
                            <Space align="start" wrap>
                                {rightColData.map(generatePosts)}
                            </Space>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </AsyncRequestWrapper>
    );
}

export default App;
