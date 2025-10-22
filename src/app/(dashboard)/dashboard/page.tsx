import { getUserSession } from "@/helpers/getUserSession";

const DashboardHomePage = async () => {
  // const userName = "Probir Ghosh";
  const quote = "The secret of getting ahead is getting started. – Mark Twain";

  // const session = await getServerSession(authOptions);
  const session = await getUserSession();
  console.log(session);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6 w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome, {session?.user?.name ? session.user.name : "Guest"}!
      </h1>

      <p className="text-lg text-gray-600 italic text-center font-bold">
        {session?.user?.email
          ? session.user.email
          : "Please log in to see your email"}
      </p>

      <p className="text-lg text-gray-600 italic text-center">{quote}</p>
    </div>
  );
};

export default DashboardHomePage;
