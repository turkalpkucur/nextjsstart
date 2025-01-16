

import Link from 'next/link'
export default function Home() {

  return (
    < main>

      <p><Link href="/meals">MEALS..</Link></p>
      <p><Link href="/meals/share">SHARE..</Link></p>
      <p><Link href="/community">COMMUNİTY..</Link></p>

    </main>
  );
}
