export function Jumbotron() {
    return (
        <div className="min-h-[300px] h-[25vw] max-h-[650px] w-full relative flex justify-center items-center flex-col gap-8">
            <h1 className="z-20 w-full text-5xl sm:text-7xl text-center text-white font-[Kanit] font-medium">
                Arqel B.V.
            </h1>
            <h2 className="z-20 w-full text-center text-xl sm:text-2xl font-light text-white opacity-80">
                Holding Company Since 2022
            </h2>
            <div className="absolute z-10 h-full w-full bg-gradient-to-b opacity-75 mix-blend-overlay from-secondary to-primary"/>
            <img
                src="/assets/arnhem.jpeg"
                alt="Arnhem Station by sunset"
                className="absolute h-full w-full object-cover object-center saturate-0 brightness-[0.8]"
                title="Image by Bart Ros on Pexels"
            />
        </div>
    );
}
