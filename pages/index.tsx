import React from 'react'
import Link from 'flareact/link'

const Index = () => {
  return (
    <h1>
      You're running React on the Edge! <Link href="/test" prefetch><a>Go to Test</a></Link>
    </h1>
  );
}

export default Index