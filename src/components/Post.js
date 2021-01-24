import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const { Meta } = Card;

function Post({ title, body, userId, onClick }) {
    return (
        <Card hoverable title={title} style={{ width: 300 }} onClick={onClick}>
            <p>{body}</p>
            <Meta description={`User ${userId}`} />
        </Card>
    );
}

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    userId: PropTypes.number,
    onClick: PropTypes.func,
};

export default Post;
