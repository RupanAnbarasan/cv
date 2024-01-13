import "./information.css";
import React from "react";
const About = () => {
  /*          <li className="Skills-l1">Mendix</li>
          <li className="Skills-l6">Unit testing and Writing Test Cases</li>
          
          <li className="Skills-l8">Creation of Technical documentation.</li>
 */
  return (
    <div className="about">
      <div className="about-card1">
        <div className="about-me">
          <div className="about-experience">
        <h2>About</h2>

          <p >
            Strong problem solving and analytical skill specialist with one year
            and nine months of experience. Seeking a software company to apply
            my skills and knowledge.
          </p>
          </div>
          <div className="about-Professional-Experience">
            {" "}
            <h2>Professional Experience</h2>
            <p>
              <strong>Company : </strong>Indium Software Pvt. Ltd.
            </p>
            <p> Feb 2022 - Nov 2023</p>
            <p>
            <strong>Role : </strong>Associate Software Engineer
          </p>


          </div>
        </div>
        <div className="Education">
          <div className="hr"></div>
          <section>
            <h4>Bachelor of Science: Computer Science</h4>
            <p> KSR college of Arts and Science -Namakkal</p>
            <p> 2018-06 - 2021-06</p>
          </section>
          <section>
            <h4> Higher Secondary School Certificate</h4>
            <p> Sru Gayathri Higher Secondary School-Salem</p>
            <p> 2017 - 2018</p>
          </section>
          <section>
            <h4>Secondary School Leaving Certificate</h4>
            <p> Holy Flower Matric Higher Secondary School-Salem</p>
            <p> 2015 - 2016</p>
          </section>
        </div>
      </div>
      <div className="skills">
        <h2 className="sub-header">Skills</h2>
        <div className="hr"></div>
        <ul className="Skills-ul">
          <li className="Skills-li">
            {" "}
            HTML <div className="thread thread1"></div>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="5em"
              width="5em"
              className="svg1"
            >
              <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302l-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z" />
            </svg>
          </li>

          <li className="Skills-li">
            {" "}
            CSS <div className="thread thread2"></div>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="5em"
              width="5em"
              className="svg2"
            >
              <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z" />
            </svg>
          </li>
          <li className="Skills-li">
            {" "}
            React<div className="thread thread3"></div>
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="5em"
              width="5em"
              className="svg3"
            >
              <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
            </svg>
          </li>
          <li className="Skills-li">
            {" "}
            Redux<div className="thread thread4"></div>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="5em"
              width="5em"
              className="svg4"
            >
              <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z" />
            </svg>
          </li>
          <li className="Skills-li">
            RestFUL<div className="thread thread5"></div>
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="5em"
              width="5em"
              className="svg5"
            >
              <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
            </svg>
          </li>
          <li className="Skills-li">
            Node.js<div className="thread thread6"></div>
            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              height="5em"
              width="5em"
              className="svg6"
            >
              <path
                fill="currentColor"
                d="M5.304 16.563a.265.265 0 00-.132-.23L2.98 15.072a.26.26 0 00-.121-.035h-.023a.264.264 0 00-.121.035L.524 16.333a.265.265 0 00-.133.23l.005 3.396a.13.13 0 00.066.114.13.13 0 00.132 0l1.302-.746a.267.267 0 00.132-.23V17.51c0-.094.05-.182.132-.229l.555-.319a.272.272 0 01.265 0l.554.319a.264.264 0 01.132.229v1.587c0 .095.051.181.133.23l1.302.746a.13.13 0 00.132 0 .133.133 0 00.066-.114l.004-3.396zm11.702-4.669c-.041-.023-.091-.022-.131.002s-.065.067-.065.114v3.363a.093.093 0 01-.139.08l-.549-.316a.267.267 0 00-.265 0l-2.192 1.265a.265.265 0 00-.133.229v2.531c0 .095.05.182.132.229l2.192 1.266a.267.267 0 00.265 0l2.193-1.266a.265.265 0 00.132-.229v-6.309a.265.265 0 00-.136-.231l-1.305-.728zm-.203 6.437a.063.063 0 01-.033.057l-.753.434a.065.065 0 01-.066 0l-.753-.434a.065.065 0 01-.033-.057v-.869c0-.024.013-.046.033-.057l.753-.435a.065.065 0 01.066 0l.753.435c.02.012.033.034.033.057v.869zm8.047-.892a.265.265 0 00.132-.229v-.613a.264.264 0 00-.132-.229l-2.178-1.265a.262.262 0 00-.265 0l-2.192 1.265a.264.264 0 00-.132.229v2.53c0 .095.051.183.134.23l2.178 1.241c.08.046.179.046.26.001l1.317-.732c.041-.023.067-.067.068-.115s-.025-.092-.066-.116l-2.206-1.266a.131.131 0 01-.066-.115v-.793c0-.047.025-.091.066-.115l.687-.395a.135.135 0 01.132 0l.687.395a.132.132 0 01.066.115v.624c0 .047.025.091.066.115s.092.023.133 0l1.312-.763zM9.291 15.09a.267.267 0 01.265 0l2.192 1.265a.263.263 0 01.132.229v2.532a.265.265 0 01-.132.229l-2.192 1.266a.267.267 0 01-.265 0l-2.192-1.266a.264.264 0 01-.132-.229v-2.532c0-.095.05-.182.132-.229l2.192-1.265zm19.815 5.557a.438.438 0 01-.217-.058l-.69-.408c-.103-.058-.052-.078-.019-.09.137-.048.165-.059.312-.142.015-.009.036-.005.052.004l.53.315a.066.066 0 00.064 0l2.067-1.193a.065.065 0 00.031-.056v-2.386a.067.067 0 00-.032-.057l-2.066-1.192a.066.066 0 00-.064 0l-2.066 1.192a.066.066 0 00-.033.057v2.386c0 .023.013.044.032.055l.566.327c.307.154.495-.027.495-.209v-2.355a.06.06 0 01.06-.059h.262a.06.06 0 01.06.059v2.355c0 .41-.223.645-.612.645-.119 0-.214 0-.476-.129l-.542-.312a.436.436 0 01-.217-.377v-2.386c0-.155.083-.3.217-.377l2.067-1.194a.452.452 0 01.434 0l2.067 1.194a.436.436 0 01.217.377v2.386a.437.437 0 01-.217.377l-2.067 1.193a.436.436 0 01-.218.058zm.639-1.643c-.905 0-1.094-.415-1.094-.764 0-.033.026-.059.06-.059h.267a.06.06 0 01.059.051c.04.272.16.41.708.41.435 0 .621-.099.621-.329 0-.133-.052-.232-.729-.298-.565-.056-.915-.181-.915-.633 0-.417.352-.666.941-.666.662 0 .99.23 1.031.723.002.017-.004.033-.016.046s-.027.019-.044.019h-.268a.06.06 0 01-.058-.047c-.064-.286-.221-.378-.645-.378-.475 0-.531.166-.531.29 0 .151.065.194.707.279.635.084.937.203.937.649 0 .45-.375.708-1.03.708zm-7.239-1.683a.052.052 0 01.051 0l.421.243a.05.05 0 01.026.044v.486a.05.05 0 01-.026.044l-.421.243a.052.052 0 01-.051 0l-.42-.243a.05.05 0 01-.025-.044v-.486c0-.018.01-.035.025-.044l.42-.243z"
              />
            </svg>
          </li>
          <li className="Skills-li">
            {" "}
            Express.js<div className="thread thread7"></div>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="5em"
              width="5em"
              className="svg7"
            >
              <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
            </svg>
          </li>
          <li className="Skills-li">
            Git Hub<div className="thread thread8"></div>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="5em"
              width="5em"
              className="svg8"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
          </li>
          <li className="Skills-li">
            {" "}
            MongoDB<div className="thread thread9"></div>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="5em"
              width="5em"
              className="svg9"
            >
              <path d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 01-.48-.48L12 9l.45 10a3.57 3.57 0 01-.45.48z" />
            </svg>
          </li>
          <li className="Skills-li">
            JIRA <div className="thread thread10"></div>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="5em"
              width="5em"
              className="svg10"
            >
              <path d="M12.004 0c-2.35 2.395-2.365 6.185.133 8.585l3.412 3.413-3.197 3.198a6.501 6.501 0 011.412 7.04l9.566-9.566a.95.95 0 000-1.344L12.004 0zm-1.748 1.74L.67 11.327a.95.95 0 000 1.344C4.45 16.44 8.22 20.244 12 24c2.295-2.298 2.395-6.096-.08-8.533l-3.47-3.469 3.2-3.2c-1.918-1.955-2.363-4.725-1.394-7.057z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;