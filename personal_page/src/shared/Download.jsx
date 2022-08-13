import React from "react";

const Download = () => {
  return (
    <button class="button">
      <svg class="circle" viewBox="0 0 76 76">
        <circle class="default" cx="38" cy="38" r="36"></circle>
        <circle class="active" cx="38" cy="38" r="36"></circle>
      </svg>
      <div class="icon">
        <svg class="line" viewBox="0 0 4 37">
          <line x1="2" y1="2" x2="2" y2="35"></line>
        </svg>
        <div>
          <svg class="arrow" viewBox="0 0 40 32"></svg>
          <svg class="progress" viewBox="0 0 444 10">
            <path d="M2,5 L42,5 C60.0089086,6.33131695 73.3422419,6.99798362 82,7 C87.572404,7.00129781 91.0932494,1.72677301 102,1.99944178 C112.906751,2.27211054 112.000464,7.99986045 122,8 C131.999536,8.00013955 132,2 142,2 C152,2 152,8 162,8 C172,8 172,2 182,2 C192,2 192,8 202,8 C212,8 212,2 222,2 C232,2 232,8 242,8 C252,8 252,2 262,2 C272,2 272,8 282,8 C292,8 292,2 302,2 C312,2 312,8 322,8 C332,8 332,2 342,2 C352,2 351.897852,7.49489262 362,8 C372.102148,8.50510738 378.620177,5.22532154 402,5 L442,5"></path>
          </svg>
        </div>
      </div>
      <span>0%</span>
    </button>
  );
};

export default Download;
