import NotFound from "@/components/NotFound/NotFound";

export const metadata = {
  title:
    "Page not found - We open the world for you, don't limit yourself, be borderless!",
  description:
    "We open the world for you, don't limit yourself, be borderless!",
};

const ErrorPage = () => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default ErrorPage;
