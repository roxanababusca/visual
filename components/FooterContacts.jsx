import Link from 'next/link';

export default function FooterContacts({name, link, label, role, title, content}) {
    return(
        <li className="leading-relaxed">
            <p className="mr-1 text-slate-800">{name}</p>
            <Link
            href={link}
            aria-label={label}
            role={role}
            title={title}
            className="ml-3 hover:text-accent/75"
            >
            {content}
            </Link>
        </li>
    );
}