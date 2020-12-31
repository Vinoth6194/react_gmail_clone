import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./sendmail.css";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="To"
          name="to"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail__error">'To field is required'</p>}
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">'Subject field is required'</p>
        )}

        <input
          type="text"
          placeholder="Message ..."
          className="sendMail__message"
          name="message"
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">'Message field is required'</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
export default SendMail;
