import React from 'react';

export default function Progress(props) {
    return (
        <div className="progress">
            <p className="questioncounter">
                <span className="progressq">Kysymys {props.currentQuestion + 1} / 20</span>
            </p>
            <div className="progressBar" style={{ 'width': ((props.currentQuestion + 1) / 20) * 100 + '%' }}></div>
        </div>
    );
}
