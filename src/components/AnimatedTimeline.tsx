"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import footerbg from '../app/assets/footer.png';

export default function AnimatedTimeline() {
    return (
        <>
            <motion.div
                className="flex flex-col items-center gap-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <Image src={footerbg as any} alt="year" height={200} width={200} className="aspect-auto w-[180px]" />
                <p className="text-yellow-600 text-4xl bg-[#0b0b0b] py-2 px-6 rounded-full">2016</p>
                <p className="text-sm text-white w-1/2">Second best EDM night of Asia</p>
            </motion.div>
            <motion.div
                className="flex flex-col items-center gap-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <Image src={footerbg as any} alt="year" height={200} width={200} className="aspect-auto w-[180px]" />
                <p className="text-yellow-600 text-4xl bg-[#0b0b0b] py-2 px-6 rounded-full">2017</p>
                <p className="text-sm text-white w-1/2">Benchmark set with Farhan Akhtar's Performance</p>
            </motion.div>
            <motion.div
                className="flex flex-col items-center gap-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <Image src={footerbg as any} alt="year" height={200} width={200} className="aspect-auto w-[180px]" />
                <p className="text-yellow-600 text-4xl bg-[#0b0b0b] py-2 px-6 rounded-full">2019</p>
                <p className="text-sm text-white w-1/2">Mother of All Fests across Delhi NCR</p>
            </motion.div>
            <motion.div
                className="flex flex-col items-center gap-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <Image src={footerbg as any} alt="year" height={200} width={200} className="aspect-auto w-[180px]" />
                <p className="text-yellow-600 text-4xl bg-[#0b0b0b] py-2 px-6 rounded-full">2023</p>
                <p className="text-sm text-white w-1/2">Best of inter universities and college participation</p>
            </motion.div>
            <motion.div
                className="flex flex-col items-center gap-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <Image src={footerbg as any} alt="year" height={200} width={200} className="aspect-auto w-[180px]" />
                <p className="text-yellow-600 text-4xl bg-[#0b0b0b] py-2 px-6 rounded-full">2024</p>
                <p className="text-sm text-white w-1/2"></p>
            </motion.div>
            </>
    )
}