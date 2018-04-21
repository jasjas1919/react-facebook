import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MainApp } from './components/main/main';

class IndexView extends React.Component<{}, {}> {
    render(){
        return (
            <MainApp />
        )
    }
};

ReactDOM.render(<IndexView />,document.getElementById('root'));
