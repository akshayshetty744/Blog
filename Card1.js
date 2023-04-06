class Card1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
  render() {
      return (
        <div>
          <div className="Card">
            <div className="childCard"> 
                      <div className="saharaImg" ><div className="date">06 <span className="mar">April</span></div><button className="photobtn">PHOTOS</button></div>
                      <div className="city">City Lights in New York</div>
                      <div className="theCity">The city that never sleeps.</div>
                      <div className="newYork">New York.the largest city int U.S., is an architecture marvel with plenty of history monuments, magnificent building and countless dazzling skyscrapers.</div>
                      <div className="icons">o 6 mins ago<button className="commentBtn"><span className="comments"><img className="commentIcon" src="./src/comments-solid.svg" />39 comments{ }</span></button></div>
            </div>
          </div>
        </div>
      );
  }
}