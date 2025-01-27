"use client";

import React, { useEffect } from "react";
import { animateLetters, wcButtonFC } from "../../commFun";
import Link from "next/link";
import { Router } from "react-router-dom";
import { useRouter } from "next/navigation";

const ProjectInMind = ({ mainTxt }) => {
  const router = useRouter();
  useEffect(() => {
    animateLetters();
    wcButtonFC();
  }, []);

  return (
    <>
      <div className="ideas-wait-main mt_100">
        <div className="container text-center">
          <div className="ideas-wait-text mt_40 sec-title-2">
            <h3 className="mb-0 text-wrapper" id="text">
              {mainTxt?.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="word">
                  {word.split("").map((letter, letterIndex) => (
                    <span key={letterIndex} className="letter">
                      {letter}
                    </span>
                  ))}
                  <span className="space">&nbsp;</span>{" "}
                  {/* Adds space between words */}
                </span>
              ))}
            </h3>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="btn_wrapper">
            <Link
              onClick={() => router.push("/get-in-touch")}
              href="/get-in-touch"
              className="wc-btn-primary btn btn-outline-light work-btn mt_40"
            >
              Let's Talk
              <span className="material-symbols-outlined">
                {" "}
                arrow_right_alt{" "}
              </span>
              <span className="circle"></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectInMind;
