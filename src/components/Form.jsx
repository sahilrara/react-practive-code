// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const Form = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       "service_ycz4jdo",
//       "template_g0u4hnl",
//       form.current,
//       "fnrzC6sB0B51hp0PJ"
//     );
//   };
//   return (
//     <div>
//       {" "}
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="user_name" />
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     </div>
//   );
// };

// export default Form;

import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </div>
  );
};

export default Form;
