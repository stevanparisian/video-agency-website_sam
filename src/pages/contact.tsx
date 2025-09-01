import Head from "next/head";
import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Future implementation: send form data
  };

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <section style={{minHeight:"60vh", display:"grid", placeItems:"center"}}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nom
            <input id="name" name="name" type="text" required />
          </label>
          <label htmlFor="email">
            Email
            <input id="email" name="email" type="email" required />
          </label>
          <label htmlFor="message">
            Message
            <textarea id="message" name="message" rows={5} required />
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </>
  );
}
