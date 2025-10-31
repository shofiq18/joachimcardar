import AllCars from "@/app/components/pages/cars/AllCars";
import AllCarsPage from "@/app/components/pages/cars/AllCarsPage";
import Container from "@/app/components/shared/Container";

const AllCarsPages = () => {
  return (
    <Container>
      <div className="container mx-auto">
        <AllCarsPage />
        {/* <AllCars /> */}
      </div>
    </Container>
  );
};

export default AllCarsPage;
