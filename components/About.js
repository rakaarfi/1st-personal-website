export default function About() {
    return (
            <div className="flex">
                <figure className="rounded-xl p-8 mx-auto">
                    <img className="w-52 h-52 rounded-full" src="/raka_arfi.jpg" alt="Photo_Profile" width="384" height="512"></img>
                    <div className="pt-6 space-y-4">
                        <blockquote>
                            <h1 className="text-5xl font-semibold font-josefinSlab text-[#]">Hi, I&apos;m Raka</h1>
                            <p className="text-lg font-medium max-w-2xl mx-auto">
                                I&apos;m a data enthusiast. I love working with data. I specialize in collecting, cleaning, and analyzing data to help businesses make informed decisions.
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-red-100">
                                Raka Arfi
                            </div>
                            <div className="text-red-300">
                                Data Enthusiast
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
    );
}