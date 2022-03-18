
function PBlock(props){
    return (//PBlok Paragraf blok kısaltması
        <div id="hakkimda-blok" className="kutucuk">
            <h3>{props.values[0].title}</h3>
            <p>{props.values[0].text}</p>
            <p>{props.values[0].hobbie}</p>
        </div>
    );
}

export default PBlock;