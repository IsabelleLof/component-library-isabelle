import Picture from "../components/Picture";

export default function CustomPicture() {
  return (
    <>
      <div>
        <div className="container mx-auto flex-col text-left relative max-w-5xl pt-20 sm:pt-24 lg:pt-32 px-4">
          <h1>React Card Component</h1>
          <Picture
            color={"#ffff"}
            size={100}
            imgSrc="https://resizing.flixster.com/gaXtT_qAbIG9wmB-VAaKtnLcOp8=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/286896_v9_bc.jpg"
            imgAlt="Image of Zac Efron "
            href="https://www.google.com/"
            className="m-2 mt-8 mb-10"
          >
            <p>Zac Efron</p>
          </Picture>
          <Picture
            color={"#ffff"}
            size={100}
            imgSrc="https://www1.wdr.de/radio/1live/musik/neu-fuer-den-sektor/selena-gomez-174~_v-gseagaleriexl.jpg"
            imgAlt="Image of Selena Gomez"
            href="https://www.apple.com"
            className="m-2 mt-8 mb-10"
          >
            <p>Selena Gomez</p>
          </Picture>
          <Picture
            color={"#b2d582"}
            size={100}
            imgSrc="https://assets.teenvogue.com/photos/60b6775c2b29681ed91ba613/16:9/w_2560%2Cc_limit/img_4830.jpeg"
            imgAlt="Image of Olivia Ponton"
            href="https://chasacademy.se"
            className="m-2 mt-8 mb-10"
          >
            <p>Olivia Ponton</p>
          </Picture>

        </div>
        ;
      </div>
    </>
  );
}