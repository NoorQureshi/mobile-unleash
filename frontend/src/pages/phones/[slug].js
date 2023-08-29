import { useRouter } from 'next/router';
import Header from '@/components/Header';
import PhoneDetails from '@/components/PhoneDetails';
import { fetchPhoneBySlug } from '@/pages/api/api';
import '@/app/globals.css'


const PhoneDetailPage = ({ phone }) => {
    return (
        <div className="bg-custom-gray min-h-screen">
            <Header />
                {phone ? <PhoneDetails phone={phone} /> : <p>Loading...</p>}
        </div>
    );
};


export async function getServerSideProps({ params }) {
    const phone = await fetchPhoneBySlug(params.slug);

    return {
        props: {
            phone,
        },
    };
}

export default PhoneDetailPage;
