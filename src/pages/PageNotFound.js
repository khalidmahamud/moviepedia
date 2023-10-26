import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
    useTitle('404!')

    return (
        <main>
            <section className="fixed top-0 left-0 w-full h-full flex justify-center items-center p-5 bg-slate-100 dark:bg-gray-700">
                <div className="max-w-md bg-gray-700 dark:bg-white p-6 flex flex-col gap-3 rounded-lg">
                    <h1 className="text-2xl text-white dark:text-gray-700 font-bold">Page Not Found</h1>
                    <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
                    <a href="/" className="font-semibold text-lg">&larr; <span className="underline">Back to our site</span></a>
                    <hr className="border border-gray-300"/>
                    <p>If this is your site, and you weren't expecting a 404 for this path, please visit Netlify's <a href="https://answers.netlify.com/t/support-guide-i-ve-deployed-my-site-but-i-still-see-page-not-found/125?utm_source=404page&utm_campaign=community_tracking" className="font-semibold text-lg text-white dark:text-gray-700 underline">"page not found" support guide</a> for troubleshooting tips.</p>
                </div>
            </section>
        </main>
    );
};