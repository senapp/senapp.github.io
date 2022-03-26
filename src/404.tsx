import * as React from 'react';
import * as ReactDOM from 'react-dom';

export const NotFound: React.FC = () => (
    <div>
        404
    </div>
);

ReactDOM.render(<NotFound />, document.getElementById('root'));