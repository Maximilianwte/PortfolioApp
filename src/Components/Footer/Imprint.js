import React, { Component } from "react";

class Imprint extends Component {
  render() {
    return (
      <div className="Imprint container-fluid">
        <div className="row" id="Imprint">
          <div className="col-12">
            {" "}
            <h4>Simon Helms Photography</h4>
            <h5>Göttingen, Germany.</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:simonhelms@live.com">simonhelms@live.com
          </a>
          </div>
        </div>
        <div className="row devlight">
          <div className="col-12">
            <a
              href="https://lightstrategies.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={require("../../Assets/DevelopedByLight.svg")}
                alt="Developed By Light"
                title="Developed by Light"
              />
            </a>
          </div>
        </div>
        <div className="row contentful">
          <div className="col-12 contentful">
            <a
              href="https://www.contentful.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.contentful.com/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg"
                alt="Powered by Contentful"
              />
            </a>
          </div>
        </div>
        <div className="row" id="head">
          <h4>Privacy Policy</h4>
        </div>
        <div className="row text-justify" id="Privacy">
          <p>
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit or make a purchase from
            simonhelms.de
          </p>
          <h3>PERSONAL INFORMATION WE COLLECT</h3>
          <p>
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that
            you view, what websites or search terms referred you to the Site,
            and information about how you interact with the Site. We refer to
            this automatically-collected information as “Device Information.” We
            collect Device Information using the following technologies: -
            “Cookies” are data files that are placed on your device or computer
            and often include an anonymous unique identifier.
          </p>
          <p>
            {" "}
            For more information about cookies, and how to disable cookies,
            visit http://www.allaboutcookies.org. - “Log files” track actions
            occurring on the Site, and collect data including your IP address,
            browser type, Internet service provider, referring/exit pages, and
            date/time stamps. - “Web beacons,” “tags,” and “pixels” are
            electronic files used to record information about how you browse the
            Site. We use google analytics to track and enhance the user
            experience. All data is anonym.
          </p>
          <p>
            {" "}
            In addition to that we use geoip from cdnservice to check if the
            user is located in Germany. If a user is located in Germany, we ask
            him/her if he/she wants to change to our german web app. We track
            that information only to enhance the user experience for the user.
            When we talk about “Personal Information” in this Privacy Policy, we
            are talking both about Device Information and Order Information.{" "}
          </p>
          <h3>HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>
          <p>
            {" "}
            We use the Order Information that we collect generally to fulfill
            any orders placed through the Site (including processing your
            payment information, arranging for shipping, and providing you with
            invoices and/or order confirmations).
          </p>
          <p>
            Additionally, we use this Order Information to: Communicate with
            you; Screen our orders for potential risk or fraud; and When in line
            with the preferences you have shared with us, provide you with
            information or advertising relating to our products or services. We
            use the Device Information that we collect to help us screen for
            potential risk and fraud (in particular, your IP address), and more
            generally to improve and optimize our Site (for example, by
            generating analytics about how our customers browse and interact
            with the Site, and to assess the success of our marketing and
            advertising campaigns).
          </p>
          <h3>SHARING YOUR PERSONAL INFORMATION</h3>
          <p>
            {" "}
            We share your Personal Information with third parties to help us use
            your Personal Information, as described above. We also use Google
            Analytics to help us understand how our customers use the Site--you
            can read more about how Google uses your Personal Information here:
            https://www.google.com/intl/en/policies/privacy/. You can also
            opt-out of Google Analytics here:
            https://tools.google.com/dlpage/gaoptout.
          </p>
          <p>
            {" "}
            Finally, we may also share your Personal Information to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant or other lawful request for information we receive, or to
            otherwise protect our rights. YOUR RIGHTS If you are a European
            resident, you have the right to access personal information we hold
            about you and to ask that your personal information be corrected,
            updated, or deleted. If you would like to exercise this right,
            please contact us through the contact information below.
          </p>
          <p>
            {" "}
            Additionally, if you are a European resident we note that we are
            processing your information in order to fulfill contracts we might
            have with you (for example if you make an order through the Site),
            or otherwise to pursue our legitimate business interests listed
            above. Additionally, please note that your information will be
            transferred outside of Europe, including to Canada and the United
            States.{" "}
          </p>
          <h3>DATA RETENTION</h3>
          <p>
            {" "}
            When you place an order through the Site, we will maintain your
            Order Information for our records unless and until you ask us to
            delete this information.
          </p>
          <h3>CHANGES</h3>
          <p>
            {" "}
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.{" "}
          </p>
          <h3>CONTACT US</h3>
          <p>
            {" "}
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by e-mail at simonhelms@live.com.
          </p>
        </div>
      </div>
    );
  }
}

export default Imprint;
