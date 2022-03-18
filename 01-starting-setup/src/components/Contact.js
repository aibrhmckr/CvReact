function Contact(props) {
    const month = props.values[3].dogumt.toLocaleString("tr-Tr", { month: "long" });
    const day = props.values[3].dogumt.toLocaleString("tr-Tr", { day: "2-digit" });
    const year = props.values[3].dogumt.getFullYear();
  return (
    <div>
      <h3>{props.values[3].title}</h3>
      <address>
        <b>E-posta: </b><a href="mailto:aibrhmckrofficial@gmail.com">{props.values[3].eposta}</a><br/>
        <b>Adres:</b>{props.values[3].adres}<br/>
        <b>Telefon: </b><a href="tel:+905525740028">{props.values[3].tel}</a><br/>
        <b>Adres:</b>{props.values[3].adres}<br/>
        <div className="expense-date__month"><b>Doğum Tarihi: </b>{day} {month} {year}</div>

      </address>
    </div>
  );
}
export default Contact;