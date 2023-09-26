import Link from 'next/link';

export default function Socials({ link, icon, socialHandle}) {
    return (
        <Link
            href={link}
            rel="noreferrer"
            target="_blank"
            role="link"
            aria-label={socialHandle}
            className="text-accent transition hover:opacity-75"
            >
            <svg
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            >
                <path
                fillRule="evenodd"
                d={icon}
                clipRule="evenodd"
                />
            </svg>
        </Link>
    );
}
