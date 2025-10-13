import logo1 from "@/assets/logo/hoidW.png";
import logo2 from "@/assets/logo/asranW.png";
import logo3 from "@/assets/logo/carvellaW.png";
import logo4 from "@/assets/logo/lacerasW.png";

const logos = [logo1, logo2, logo3, logo4];

export default function LogoMarquee() {
  return (
    <div className="logo-marquee-wrapper pointer-events-none">
      <div
        className="logo-marquee-track"
        role="presentation"
        aria-hidden="true"
      >
        <div className="logo-row">
          {logos.map((src, i) => (
            <img key={`row1-${i}`} src={src} alt="" className="logo-item" />
          ))}
        </div>
        {/* <div className="logo-row" aria-hidden="true">
          {logos.map((src, i) => (
            <img key={`row2-${i}`} src={src} alt="" className="logo-item" />
          ))}
        </div> */}
      </div>
    </div>
  );
}
