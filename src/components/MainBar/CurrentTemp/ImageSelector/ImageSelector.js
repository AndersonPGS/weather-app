import img01d from "../../../../assets/images/01d.png";
import img01n from "../../../../assets/images/01n.png";
import img02d from "../../../../assets/images/02d.png";
import img02n from "../../../../assets/images/02n.png";
import img03d from "../../../../assets/images/03d.png";
import img03n from "../../../../assets/images/03n.png";
import img04d from "../../../../assets/images/04d.png";
import img04n from "../../../../assets/images/04n.png";
import img09d from "../../../../assets/images/09d.png";
import img09n from "../../../../assets/images/09n.png";
import img10d from "../../../../assets/images/10d.png";
import img10n from "../../../../assets/images/10n.png";
import img11d from "../../../../assets/images/11d.png";
import img11n from "../../../../assets/images/11n.png";
import img13d from "../../../../assets/images/13d.png";
import img13n from "../../../../assets/images/13n.png";
import img50d from "../../../../assets/images/50d.png";
import img50n from "../../../../assets/images/50n.png";

function ImageSelector(icon) {
  switch (icon) {
    case "01d":
      return img01d;
    case "01n":
      return img01n;
    case "02d":
      return img02d;
    case "02n":
      return img02n;
    case "03d":
      return img03d;
    case "03n":
      return img03n;
    case "04d":
      return img04d;
    case "04n":
      return img04n;
    case "09d":
      return img09d;
    case "09n":
      return img09n;
    case "10d":
      return img10d;
    case "10n":
      return img10n;
    case "11d":
      return img11d;
    case "11n":
      return img11n;
    case "13d":
      return img13d;
    case "13n":
      return img13n;
    case "50d":
      return img50d;
    case "50n":
      return img50n;
    default:
      return "";
  }
}

export default ImageSelector;
