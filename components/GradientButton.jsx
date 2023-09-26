import Link from "next/link";

export default function GradientButton (){
    return(
        <Link
        href="mailto:contact@awakenyogastudio.ae"
        className="inline-flex items-center justify-center font-medium tracking-wide shadow-md bg-gradient-to-r from-rose to-accent hover:opacity-80"
        >
        Book classes
        </Link>
    );
};