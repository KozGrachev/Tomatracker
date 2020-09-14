import React from 'react';

function Dial(props){
  const [isActive, setActive] = useState(false);
  const [isDeepFocus, setDeepFocus] = useState(false);
  const [time, setTime] = useState(0);


  const setupCircles = () => {


    // workTimeline.css("width", "90%").css("height", "90%");
    // restTimeline.css("width", "90%").css("height", "90%");
  }
  const dialSize = 300;
  const svgSize = dialSize + 20;

  return (
    <div className="circle dial">
      <div>
        <svg height={svgSize} width={svgSize}>
          <circle cx={svgSize/2} cy={svgSize/2} r={dialSize/2}  />
        </svg>


      </div>

    </div>
  )
}

export default Dial;