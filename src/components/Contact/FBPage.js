import React from "react";
import { FacebookEmbed } from "react-social-media-embed";
import { useRef } from "react";

const FBPage = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  let widthPosterFB = 300;
  console.log(windowSize.current[0], windowSize.current[1]);

  let lgWidthPosterFB = 420;
  let lgHeightPosterFB = 700;

  if (windowSize.current[0] < 400) {
    widthPosterFB = 330;
  } else if (windowSize.current[0] > 400 && windowSize.current[0] < 450) {
    widthPosterFB = 370;
  } else if (windowSize.current[0] > 900 && windowSize.current[0] < 950) {
    widthPosterFB = 440;
  }

  if (windowSize.current[0] > 1010 && windowSize.current[0] < 1050) {
    lgWidthPosterFB = 420;
    lgHeightPosterFB = 700;
  }

  return (
    <>
      <div className="hidden lg:block">
        <FacebookEmbed
          url="https://www.facebook.com/permalink.php?story_fbid=pfbid0FvMYVxx4vSPnwLQA5EeaM4mUjzu2sfohqmow92Ro4EzG9Y1mgfLZMXpZgbXvQciwl&id=61554876353764"
          width={lgWidthPosterFB}
          height={lgHeightPosterFB}
        />
      </div>
      <div className="lg:hidden">
        <div id="fb-root"></div>
        <div
          className="fb-page w-full"
          data-href="https://www.facebook.com/profile.php?id=61554876353764"
          data-tabs=""
          data-width={widthPosterFB}
          data-height="70"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/profile.php?id=61554876353764"
            class="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/profile.php?id=61554876353764">
              AZAI แอปจัดการหอพัก
            </a>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default FBPage;
