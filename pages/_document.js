import Document, { Head, Html, Main, NextScript } from "next/document";
import Navbar from '../components/Navbar'

class MyDocument extends Document {
    render(){
        return (
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap" rel="stylesheet"></link>
                </Head>
                <Navbar/>
                <body>
                    <Main>
                    </Main>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument