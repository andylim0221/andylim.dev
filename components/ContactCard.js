const ExternalLink = ({ href, title }) => 
  <a
    className="text-gray-900 hover:text-gray-600 transition dark:text-white"
    target="_blank"
    href={href}
  >
    {title}
  </a>

export default function ContactCard() {
  return (
    <footer className="bg-white dark:bg-black flex flex-col justify-center items-center border-top-2 p-8 w-full mx-auto pb-10">
      <hr className="w-full border-1 border-gray-400 dark:border-gray-600 mb-8 max-w-2xl" />
      <div className=" w-full flex flex-row items-center justify-center max-w-2xl gap-x-3 pb-16">
        <ExternalLink
          href="https://www.linkedin.com/in/limchinhuat0221/"
          title="LinkedIn"
        />
        <ExternalLink href="https://github.com/andylim0221" title="Github" />
        <ExternalLink
          href="https://www.facebook.com/andy.lim.18659041/"
          title="Facebook"
        />
        <ExternalLink href="mailto:limchinhuat0221@gmail.com" title="Mail" />
      </div>
    </footer>
  );
}
