import Link from 'next/link';

export default function NavMenuLink({ link, label, title, name }) {
    return(
        <li>
            <Link
            href={link}
            aria-label={label}
            title={title}
            className="font-medium tracking-wide hover:text-accent"
            >
            {name}
            </Link>
        </li>
    )
}