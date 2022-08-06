import type { NextPage } from 'next'

const Home: NextPage<{ a: string }> = ({ a }) => {
    return (
        <div>
            <h1>Hello {a}</h1>
        </div>
    )
}
