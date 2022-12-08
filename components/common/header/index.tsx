import Link from 'next/link';
import { HeaderBox } from './style';

export default function Header() {
  return (
    <HeaderBox>
      <h1>
        <Link
          href={{
            pathname: '/',
          }}
        >
          <strong>Weather forecast</strong>
        </Link>
      </h1>
    </HeaderBox>
  );
}
