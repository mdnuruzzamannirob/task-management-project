import Container from "../../../components/Container";

const UserDemographicSection = () => {
  return (
    <Container className="py-10">
      <div className="text-center">
        <h3 className="text-center text-2xl font-medium">User Demographics</h3>
        <p className="lg:text-lg opacity-70 font-medium">
          what type of people are using this website and to whom this can be of
          benefit?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
          <h3 className="text-xl font-semibold mt-2 mb-2">Students</h3>
        </div>
        <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
          <h3 className="text-xl font-semibold mt-2 mb-2">Developers</h3>
        </div>
        <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
          <h3 className="text-xl font-semibold mt-2 mb-2">Designer</h3>
        </div>

        <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
          <h3 className="text-xl font-semibold mt-2 mb-2">corporate</h3>
        </div>

        <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
          <h3 className="text-xl font-semibold mt-2 mb-2">professionals</h3>
        </div>
        <div className="flex flex-col items-center p-4 border shadow-lg rounded-xl">
          <h3 className="text-xl font-semibold mt-2 mb-2">bankers</h3>
        </div>
      </div>
    </Container>
  );
};
export default UserDemographicSection;
