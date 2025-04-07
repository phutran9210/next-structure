'use client';

import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {ReactNode, useState} from 'react';

export function EmotionRegistry({children}: Readonly<{ children: ReactNode }>) {
    const [cache] = useState(() =>
        createCache({key: 'mui', prepend: true})
    );

    return <CacheProvider value={cache}>{children}</CacheProvider>;
}
