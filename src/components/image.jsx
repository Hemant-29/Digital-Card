import personImage from "../assets/DSLR.jpg";

function Image() {
  return (
    <div className="image-section">
      <img className="image-section" src={personImage} alt="Person Image" />
    </div>
  );
}

export default Image;
