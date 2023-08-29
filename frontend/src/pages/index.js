import Header from '../components/Header';
import Brands from '../components/Brands';
import LatestPhones from '../components/LatestPhones';
import { fetchPhones } from "@/pages/api/api"; // Import fetchPhones here
import '@/app/globals.css'

export default function Home({ phones }) {
    return (
      <div className="bg-custom-gray min-h-screen">
        <Header />
        <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <Brands />
        </div>
        <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <LatestPhones phones={phones} />
        </div>
      </div>
    );
  }
  



export async function getServerSideProps() {
    try {
        const phones = await fetchPhones();
        return {
            props: { phones }
        };
    } catch (error) {
        console.error("Error in getServerSideProps: ", error);
        return { props: { phones: [] } }; // Default to an empty array in case of error
    }
}
