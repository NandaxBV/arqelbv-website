import { useMemo } from 'react';


export function Footer() {
    const currentYear = useMemo(() => {
        return new Date().getFullYear();
    }, []);

    return (
        <footer className="bg-gray-800 p-5 text-center text-gray-400">
            Copyright &copy; {currentYear} Arqel B.V.
        </footer>
    );
}
