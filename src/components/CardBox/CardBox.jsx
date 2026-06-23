import "./CardBox.css"

export default function CardBox({leftMargin, rightMargin, topMargin, bottomMargin, cardContent, hasHoverResponse, occupyWidth, occupyHeight, hasRoundedCorner}) {

    const cardBoxStyle = {
        '--left-margin': `${leftMargin}`,
        '--right-margin': `${rightMargin}`,
        '--top-margin': `${topMargin}`,
        '--bottom-margin': `${bottomMargin}`,
        '--card-width': `${occupyWidth ? '100%' : 'fit-content'}`,
        '--card-height': `${occupyHeight ? '100%' : 'fit-content'}`,
        '--card-cursor': `${hasHoverResponse ? 'pointer' : 'default'}`,
        "--border-radius": `${hasRoundedCorner ? "10px" : "0px"}`
    }

    return (
        <div className="cardContainer" style={cardBoxStyle}>
            {cardContent}
        </div>
    )
}