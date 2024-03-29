"use client";
import React from "react";
import { HTMLRender } from "~components/helpers/htmlRender";
import GravForm from "~components/GravForm/GravForm";
import "./style.scss";

//const GravityForm = React.lazy(() => import("react-gravity-form"));

const ContactBlock = ({ blockData, globalData }) => {
    const contactDetails = globalData.acfOptionsContactDetails.contactDetails;

    return (
        <div className="contact-block">
            <div className="container">
                <div className="contact-block__column-one">
                    <HTMLRender data={blockData.text} />
                    {contactDetails.address && (
                        <div className="contact-detail contact-detail--address">
                            <svg x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor">
                                <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z" />
                            </svg>
                            <address>
                                <HTMLRender data={contactDetails.address} />
                            </address>
                        </div>
                    )}
                    {contactDetails.emailAddresses && (
                        <div className="contact-detail contact-detail--email">
                            <svg viewBox="0 0 32 32" fill="currentColor">
                                <path d="m31.348 13.8a15.5 15.5 0 0 0 -30.721 4.215 15.614 15.614 0 0 0 13.31 13.351 16.058 16.058 0 0 0 2.08.136 15.351 15.351 0 0 0 7.972-2.217 1.5 1.5 0 0 0 -1.548-2.57 12.5 12.5 0 1 1 -4.789-23.109 12.5 12.5 0 0 1 10.162 16.488 2.166 2.166 0 0 1 -2.079 1.406 2.238 2.238 0 0 1 -2.235-2.235v-9.265a1.5 1.5 0 0 0 -3 0v.014a7.5 7.5 0 1 0 .541 11.523 5.224 5.224 0 0 0 4.694 2.963 5.167 5.167 0 0 0 4.914-3.424 15.535 15.535 0 0 0 .699-7.276zm-15.348 6.7a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5z" />
                            </svg>
                            <p>
                                <a href={`mailto:${contactDetails.emailAddresses[0].email}`} className="contact-link">
                                    {contactDetails.emailAddresses[0].email}
                                </a>
                            </p>
                        </div>
                    )}
                    {contactDetails.telephoneNumbers && (
                        <div className="contact-detail contact-detail--phone">
                            <svg viewBox="0 0 513.64 513.64" fill="currentColor">
                                <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72 c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68 c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44 l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
                            </svg>
                            <p>
                                <a href={`tel:${contactDetails.telephoneNumbers[0].number}`} className="contact-link">
                                    {contactDetails.telephoneNumbers[0].number}
                                </a>
                            </p>
                        </div>
                    )}
                </div>
                <div className="contact-block__column-two">
                    {/* <Suspense fallback={<></>}>
                        <GravityForm title={false} backendUrl={`${process.env.GATSBY_WORDPRESS_REST_URL}/ishtar/v1/gf/forms`} formID={blockData.formId} />
                    </Suspense> */}

                    <GravForm id={blockData.formId} />
                </div>
            </div>
        </div>
    );
};
export default ContactBlock;
