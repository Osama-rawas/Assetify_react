export default function Social() {
  return (
    <>
      <div>
        <button className="d-flex justify-content-center align-items-center btn gap-2 rounded-4 text-black bg-white shadow-lg ps-3 pe-3">
          <img src={require("../ASSETS/icons/Google.png")} alt="" />
          <span className>Google</span>
        </button>
      </div>
      <div>
        <button
          className="d-flex justify-content-center align-items-center btn gap-2 rounded-4 text-white shadow-lg ps-3 pe-3"
          style={{ backgroundColor: "#000" }}
        >
          <img src={require("../ASSETS/icons/Apple.png")} alt="" />
          <span>Apple</span>
        </button>
      </div>
      <div>
        <button
          className="d-flex justify-content-center align-items-center btn gap-2 rounded-4 text-white shadow-lg"
          style={{ backgroundColor: "#1877f2" }}
        >
          <img src={require("../ASSETS/icons/facebook.png")} alt="" />
          <span>Facebook</span>
        </button>
      </div>
    </>
  );
}
