import React from "react";
import './ContactCard.css'

const ContactCard = (props) => {

    const {title , email, phone, address, icon} = props

  return (
    <>
      <div class="contact-info-box" style={{borderRadius:'5px'}}>
        <div class="icon">
          {/* <i data-feather="mail"></i> */}
          {icon}
        </div>
        <h3>{title}</h3>
        <p>
          <a href="#">
            <span
              class="__cf_email__"
              data-cfemail="2f4e4b4246416f5c5b4e5d5b5f014c4042"
            >
                {email}
            </span>
          </a>
        </p>
        <p>
          <a href="#">
            <span
              class="__cf_email__"
              data-cfemail="ee87808881ae9d9a8f9c9a9ec08d8183"
            >
              {phone}
            </span>
          </a>
        </p>
        <p>
          <a href="#">
            <span
              class="__cf_email__"
              data-cfemail="ee87808881ae9d9a8f9c9a9ec08d8183"
            >
              {address}
            </span>
          </a>
        </p>
      </div>
    </>
  );
};

export default ContactCard;
