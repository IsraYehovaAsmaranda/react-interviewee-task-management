import Lottie from "lottie-react";
import loadingAnimation from "../assets/animations/loading.json";

function LoadingAnimation() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        style={{ height: 100 }}
      />
    </div>
  );
}

export default LoadingAnimation;
