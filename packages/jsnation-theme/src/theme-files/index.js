import React from 'react';

import { connect } from 'frontity'

import Link from "./link";

import List from './list';
import Post from './post';

const Root = ({ state }) => {

    const data = state.source.get(state.router.link)

    return (
        <>
            <pre>Frontity</pre>
            <p>Current url:{state.router.link}</p>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/page/2">More Posts</Link>
                <Link href="/lorem-ipsum">Lorem ipsum</Link>
            </nav>
            <hr />
            <main>
                {data.isArchive && <List></List>}
                {data.isPost && <Post></Post>}
                {data.isPage && <Post></Post>}
            </main>
        </>
    );
};

export default connect(Root);