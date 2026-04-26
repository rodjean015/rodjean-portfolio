import { motion } from "framer-motion";
import Image from "next/image";

export default function Profile({ dark }: { dark: boolean }) {
    return (
        <div className="flex justify-start md:justify-start shrink-0">
            <motion.div
                className="relative overflow-hidden"
                initial="rest"
                whileHover="hover"
            >
                <Image
                    src="/profile-pic.png"
                    alt="Profile picture"
                    width={130}
                    height={130}
                    className={`object-cover w-25 h-25 md:w-[130px] md:h-[130px]
                        ${dark ? "bg-slate-700" : "bg-slate-300"}
                    `}
                    priority
                />

                {/* Shine layer */}
                <motion.div
                    className="absolute inset-0 -skew-x-12 pointer-events-none"
                    variants={{
                        rest: { x: "-150%" },
                        hover: {
                            x: "150%",
                            transition: {
                                duration: 0.9,
                                ease: "easeInOut",
                            },
                        },
                    }}
                >
                    <div
                        className={`
                            absolute inset-0
                            bg-gradient-to-r from-transparent via-white/30 to-transparent
                            ${dark ? "via-white/10" : "via-white/40"}
                        `}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}