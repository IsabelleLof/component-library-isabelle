import Button from "../components/Button";

export default function CustomButton() {
  return (
    <>
      <div>
        <div className="container mx-auto flex-col text-left relative max-w-5xl pt-20 sm:pt-24 lg:pt-32 px-4">
          <h1>React Button Component</h1>
          <h2>Props: size, color, title, disabled</h2>
          <Button color="#88ad72" height={40} width={90} disabled={false} title="small" backgroundColor="#ffffff"/>
          <Button color="#0082ff" height={60} width={110} disabled={false} title="medium" backgroundColor="pink"/>
          <Button color="#ff0000" height={80} width={130} disabled={true} title="large"backgroundColor="#ffffff"/>
        </div>
        ;
      </div>
    </>
  );
}
