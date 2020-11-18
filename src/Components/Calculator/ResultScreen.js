const { FormLabel } = require("react-bootstrap")

const resultScreen = (props) => {
    let { result } = props;
    let question = '';

    question = (
        props.sample.map((d, index) => <div key={index}>{d} </div>)
    )

    return <div>
        <div style={{
            'backgroundColor': '#2c0066', 'textAlign': 'right', 'color': 'white', 'padding': '17px'
        }}>
            <label>{question}</label>
            <br />
            <label style={{ 'fontSize': '32px' }}>{result}</label>
        </div>
    </div >

}

export default resultScreen;