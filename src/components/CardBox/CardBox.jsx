import "./CardBox.css"

export default function CardBox({leftMargin, rightMargin, topMargin, bottomMargin, cardContent, hasHoverResponse, occupyWidth, occupyHeight}) {

    const cardBoxStyle = {
        '--left-margin': `${leftMargin}`,
        '--right-margin': `${rightMargin}`,
        '--top-margin': `${topMargin}`,
        '--bottom-margin': `${bottomMargin}`,
        '--card-width': `${occupyWidth ? 'auto' : 'fit-content'}`,
        '--card-height': `${occupyHeight ? 'auto' : 'fit-content'}`,
        '--card-cursor': `${hasHoverResponse ? 'pointer' : 'default'}`
    
    }

    return (
        <div id="card-container" style={cardBoxStyle}>
            {cardContent}
        </div>
    )
}