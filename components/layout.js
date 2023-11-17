import Navbar from './navbar'
import Footer from './footer'
 
export default function Layout({ children }) {
  return (
    <>
     <html lang="en">
            <head>
                <title>Ravisankar Venkataraman - Home</title>
                <meta charSet='utf-8' />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Ravisankar Resume" />
                <meta name="keywords" content="Ravisankar Venkataraman, Ravi, Nextjs" />
                <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" as="style"/>
                <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" as="style"/> 
                <link rel="preload" href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=Work+Sans:wght@400;500&display=swap" as="style" />
                <style>
                </style>
            </head>
            <body>
                <Navbar />
                    <main>{children}</main>
                <Footer />
            </body>
    
        </html>
     
    </>
  )
}