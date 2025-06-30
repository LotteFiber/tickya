import { redirect } from "next/navigation";
import { Heading } from "@/components/heading";
import { getAuth } from "@/features/auth/queries/get-auth";
import { signInPath } from "@/paths";

const HomePage = async () => {
  const { user } = await getAuth();

  if (!user) {
    redirect(signInPath());
  }

  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Home Page" description="Your home place to start" />
    </div>
  );
};

export default HomePage;
