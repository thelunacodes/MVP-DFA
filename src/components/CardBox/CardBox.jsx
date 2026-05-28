import "./CardBox.css"

export default function CardBox({leftMargin, rightMargin, topMargin, bottomMargin, cardContent}) {

    const cardBoxStyle = {
        '--left-margin': `${leftMargin}`,
        '--right-margin': `${rightMargin}px`,
        '--top-margin': `${topMargin}px`,
        '--bottom-margin': `${bottomMargin}px`,
    }

    // const leftMargin = props.leftMargin;
    // const rightMargin = props.rightMargin;
    // const topMargin = props.topMargin;
    // const bottomMargin = props.bottomMargin;

    return (
        <div id="card-container" style={cardBoxStyle}>
            {cardContent}
        </div>
    )
}