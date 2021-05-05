import React from 'react';
import Link from 'next/link';
import Router from 'next/router';


const Index = () => (
    <div>
        <h1>The Screen Index</h1>
        <p>Go in <Link href='/auth'><a>Auth</a></Link></p>
        <button onClick={() => Router.push('/auth')}>Go in Auth</button>
    </div>
)

export default Index;