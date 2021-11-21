import { ReactSVG } from 'react-svg'

export default function Footer() {
    return (
        <>
            <footer className="fixed bottom-0 w-screen h-32 bg-purple font-poppins pb-32 pr-32 border-t border-blue flex justify-around items-center py-8 px-12">
                <div className="w-20 h-20 pt-10 mt-2"><ReactSVG src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" /></div>
                <div className="w-20 h-20 pt-10 ml-2 mb-2"><ReactSVG src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Font_Awesome_5_brands_github-square.svg" /></div>
                <div className="w-20 h-20 pt-10 mt-1 ml-2"><ReactSVG src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" /></div>
                <div className="w-20 h-20 pt-10 mb-2"><ReactSVG src="https://raw.githubusercontent.com/AliasIO/wappalyzer/849209329008ac43a455b3a7f9237cf9ea599c43/src/drivers/webextension/images/icons/tailwindcss.svg" /></div>
                <div className="w-16 h-16 pt-4 pr-10 mr-12"><ReactSVG src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" /></div>
            </footer>
        </>
    )
}
