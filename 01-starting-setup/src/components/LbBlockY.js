function LbBlockY(props) {
  //Bu bölümde yetenek ve alınan dersler kısmı var
  return (
    <div id="yetenekler-blok">
        <h3>{props.values[2].title}</h3>
      <ul>
        <li>{props.values[2].a1}</li>
        <li>{props.values[2].a2}</li>
        <li>{props.values[2].a3}</li>
        <li>{props.values[2].a4}</li>
        <li>{props.values[2].a5}</li>
        <li>{props.values[2].a6}</li>
        <li>{props.values[2].a7}</li>
      </ul>
      <ul>
        <li>{props.values[2].y1}</li>
        <li>{props.values[2].y2}</li>
        <li>{props.values[2].y3}</li>
        <li>{props.values[2].y3}</li>
        <li>{props.values[2].y4}</li>
      </ul>
      <p>{props.values[2].text}</p>
    </div>
  );
}
export default LbBlockY;
