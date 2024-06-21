import Navbar from "./Navbar";

export default function Landing() {
  return (
    <div>
      <div className="container-fluid mb-5 z-1">
        <div className="text-center d-flex justify-content-center flex-column">
          <p className="light-blue-color mt-4" dir="rtl">
            أحصل على الإقامة التركية بكل سهولة مع Assetify
          </p>
          <h1 className="text-white col-8 align-self-center mt-4 display-5">
            استثمر من أي مكان في العالم واحصل على الإقامة التركية
          </h1>
          <p className="light-blue-color mt-4 col-xxl-5 col-sm-9 align-self-center">
            <strong>
              استمتع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى 200,000
              دولار أمريكي من خلال منصتنا.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
