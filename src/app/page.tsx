import Conclusion from "@/component/conclusion";
import HighAltitudeAdvantages from "@/component/highaltitudeadvantages";
import Introduction from "@/component/introduction";
import Purpose from "@/component/purpose";
import Services from "@/component/services";
import TargetAudience from "@/component/targetaudience";
import Image from "next/image";
import Slider from "@/component/slider";
import BackgroundVideo from "@/component/backgroundvideo";
import TrustedBy from "@/component/trustedBy";

export default function Home() {
  return (
    <div>
      <Introduction />
      <BackgroundVideo />
      <TrustedBy />
      <Purpose />
      <Slider />
      <HighAltitudeAdvantages />
      <Services />
      <TargetAudience />
      <Conclusion />
    </div>
  );
}
