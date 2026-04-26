"use client";

import { motion } from "framer-motion";

type FooterProps = {
    dark: boolean;
};

export default function Footer({ dark }: FooterProps) {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`
                mt-10 pt-10 pb-8 border-t text-sm
                ${dark
                    ? "border-neutral-800 text-neutral-500"
                    : "border-neutral-200 text-neutral-600"}
            `}
        >
            <div className="max-w-3xl mx-auto text-center space-y-3">

                {/* Main line */}
                <p className="tracking-tight">
                    © {new Date().getFullYear()}{" "}
                    Rodjean Verzosa
                    . All rights reserved.
                </p>

                {/* Back to top */}
                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className={`
                        text-xs mt-2 transition
                        hover:opacity-100 opacity-60
                        hover:-translate-y-0.5
                    `}
                >
                    ↑ Back to top
                </button>
            </div>
        </motion.footer>
    );
}