import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./sendmail.css";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";
function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  const dispatch = useDispatch();
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => {
            dispatch(closeSendMessage());
          }}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
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
