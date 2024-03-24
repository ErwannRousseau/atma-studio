import Script from "next/script";

export default function ZcalWidget() {
  return (
    <>
      <Script src="https://static.zcal.co/embed/v1/embed.js" />
      <div className="zcal-inline-widget">
        {/* biome-ignore lint/a11y/useAnchorContent:  */}
        <a href="https://zcal.co/i/OT5XlVa5" />
      </div>
    </>
  );
}
