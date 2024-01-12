import Navbar from './Navbar';
import SEO from './SEO';

type LayoutProps = {
    children: React.ReactNode,
    title: string;
    date?: string;
    description?: string;
}

export default function Layout(props: LayoutProps) {
    const {children, ...customMeta} = props;

    return(
        <div className="bg-white dark:bg-gray-900 h-full min-h-screen flex flex-col">
            <SEO title={customMeta.title} />
            <Navbar />
            <main className="z-0 md:z-0 justify-center px-8 pt-5 w-full min-w-full leading-loose md:leading-loose">
                {children}
            </main>
        </div>
    )
}