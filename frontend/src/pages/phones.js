// pages/phones/index.js
import Link from 'next/link';
import { formatSlug } from '@/utils/formatSlug';

const PhoneListPage = ({ phones }) => {
    return (
      <div>
        <h1>Phone List Page</h1>
        <ul>
          {phones.map((phone) => (
            <li key={phone.id}>
              <Link href={`/phones/${formatSlug(phone.name)}`}> {/* Format the slug here */}
                <a>{phone.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export async function getStaticProps() {
  // Fetch phone data from API and return as props
  const response = await fetch('http://localhost:8000/api/phones/');
  const phones = await response.json();

  return {
    props: {
      phones,
    },
  };
}

export default PhoneListPage;
