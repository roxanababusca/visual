import Link from 'next/link';

export default function ContactButton() {
    return(
        <li>
            <Link
             href="mailto:contact@awakenyogastudio.ae"
             className="inline-flex items-center justify-center font-medium rounded shadow-md bg-accent"
             aria-label="Contact us"
             title="Contact us"
            >
            Contact us
            </Link>
        </li>
    );
}