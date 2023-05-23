import React, { useEffect, useState } from "react";
import axios from "axios";
import "./postitems.scss";

function Postitems(props) {
  const [media, setMedia] = useState([]);
  useEffect(() => {
    let url = `https://www.power-funnels.com/wp-json/wp/v2/media/${props.image}`;
    axios.get(url).then((res) => {
      setMedia(res.data);
    });
    // eslint-disable-next-line
  }, []);
// eslint-disable-next-line
  Date.prototype.customFormat = function (formatString) {
    var YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhhh, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th;
    var dateObject = this;
    YY = ((YYYY = dateObject.getFullYear()) + "").slice(-2);
    MM = (M = dateObject.getMonth() + 1) < 10 ? ('0' + M) : M;
    MMM = (MMMM = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][M - 1]).substring(0, 3);
    DD = (D = dateObject.getDate()) < 10 ? ('0' + D) : D;
    DDD = (DDDD = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dateObject.getDay()]).substring(0, 3);
    th = (D >= 10 && D <= 20) ? 'th' : ((dMod = D % 10) === 1) ? 'st' : (dMod === 2) ? 'nd' : (dMod === 3) ? 'rd' : 'th';
    formatString = formatString.replace("#YYYY#", YYYY).replace("#YY#", YY).replace("#MMMM#", MMMM).replace("#MMM#", MMM).replace("#MM#", MM).replace("#M#", M).replace("#DDDD#", DDDD).replace("#DDD#", DDD).replace("#DD#", DD).replace("#D#", D).replace("#th#", th);

    h = (hhh = dateObject.getHours());
    if (h === 0) h = 24;
    if (h > 12) h -= 12;
    hh = h < 10 ? ('0' + h) : h;
    hhhh = hhh < 10 ? ('0' + hhh) : hhh;
    AMPM = (ampm = hhh < 12 ? 'am' : 'pm').toUpperCase();
    mm = (m = dateObject.getMinutes()) < 10 ? ('0' + m) : m;
    ss = (s = dateObject.getSeconds()) < 10 ? ('0' + s) : s;
    return formatString.replace("#hhhh#", hhhh).replace("#hhh#", hhh).replace("#hh#", hh).replace("#h#", h).replace("#mm#", mm).replace("#m#", m).replace("#ss#", ss).replace("#s#", s).replace("#ampm#", ampm).replace("#AMPM#", AMPM);
  }



  return (
          <div className="card post-items">

            <img
              src={media.source_url}
              className="card-img-top post-image"
              alt="post-media"
            />

            <div className='text-center badge-1'><span className="badge text-bg-danger py-3">{new Date(props.date).customFormat( "#MMM# #DD#, #YYYY#" )}</span></div>
            <div className="card-body">
              <a href={props.link}>
                <h3 className="card-title">{props.title}</h3>
              </a>
              <p className="card-text">
                {props.excerpt}...
              </p>
            </div>
          </div>
  )
}

export default Postitems
