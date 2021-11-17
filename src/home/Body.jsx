import firstPlate from '../assets/Group 109@2x.png'
import secondPlate from '../assets/68e08138077791.575576838de9d@2x.png'
import number from '../assets/Path 99.svg'

function Body() {
    return (
      <div className="content">
          <div className="smallText">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
          </div>

          <div className="firstPlate">
            <img src={firstPlate} alt="food plate" srcSet="" />
          </div>

          <div className="largeText">           
            <svg xmlns="http://www.w3.org/2000/svg" id="bigTitle" viewBox="0 0 572 234">
              <g id="Group_110" data-name="Group 110" transform="translate(-50 -704)">
                <g id="Group_106" data-name="Group 106" transform="translate(0 335)">
                  <g id="Group_96" data-name="Group 96" transform="translate(50 444)">
                    <g id="Group_95" data-name="Group 95">
                      <text id="Lorem_ipsum_dolor_sit_amet." data-name="Lorem ipsum dolor sit amet." transform="translate(0 -55)" fill="#dbdbdb" fontSize="82" fontFamily="SofiaPro-Black, Sofia Pro" fontWeight="800"><tspan x="0" y="82">Lorem Ipsum </tspan><tspan x="0" y="188.6">Dolor Sit Amet.</tspan></text>
                    </g>
                  </g>
                </g>
                <text id="Lorem_ipsum_dolor_sit_amet_consetetur." data-name="Lorem ipsum dolor sit amet, consetetur." transform="translate(50 704)" fill="#dbdbdb" fontSize="16" fontFamily="OpenSans-SemiBold, Open Sans" fontWeight="600" letterSpacing="0.169em"><tspan x="0" y="17">LOREM IPSUM DOLOR SIT AMET, CONSETETUR.</tspan></text>
              </g>
            </svg>
          </div>

          <div className="number">
            <img src={number} alt="food plate" srcSet="" />
          </div>

          <div className="secondPlate">
            <img src={secondPlate} alt="food plate" srcSet="" />
          </div>

      </div>
    );
  }
  
export default Body;
  