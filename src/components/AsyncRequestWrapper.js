import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Empty, Alert } from 'antd';

function AsyncRequestWrapper({ loading, error, empty, children }) {
    if (loading || empty || error) {
        return (
            <div className="center-container">
                {loading && (
                    <div className="spin">
                        <Spin size="large" tip="Loading..." />
                    </div>
                )}
                {empty && <Empty description="No blog posts to show" />}
                {error && (
                    <Alert
                        message="Error"
                        description={error}
                        type="error"
                        showIcon
                    />
                )}
            </div>
        );
    }

    return <>{children}</>;
}

AsyncRequestWrapper.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.string,
    empty: PropTypes.bool,
    children: PropTypes.element.isRequired,
};

export default AsyncRequestWrapper;
