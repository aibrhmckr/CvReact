function LbBlockO(props) {
  //Bu bölümde okul listesi kısmı var
  return (
    <div id="okul">
      <h3>{props.values[1].title}</h3>
      <dl>
        <dt>{props.values[1].o1}</dt>
        <dd>{props.values[1].o1n}</dd>
        <dt>{props.values[1].o2}</dt>
        <dt>{props.values[1].o3}</dt>
      </dl>
    </div>
  );
}
export default LbBlockO;
