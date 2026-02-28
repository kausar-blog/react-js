function ContactCard(props) {
  return (
    <>
      <div className="">
        <div className="ring-1 p-5 m-5">
          <h1>{props.name} Contact Information</h1>
          <p>{props.des}</p>
          <button type="button">Contact </button>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
