'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <main className="p-6 max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl my-10 transition-all duration-500 font-sans">
      {/* Header */}
      <header className="mb-8 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🏓 กีฬาปิงปอง (Table Tennis)
        <p className="text-gray-600 text-lg">กีฬาที่ทั้งสนุก ท้าทาย และดีต่อสุขภาพ</p>
        </motion.h1>
      </header>

      {/* Hero Image */}
      <motion.div
        className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Image
          src="/img/pingpong-main.png"
          alt="Table Tennis"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      {/* Content */}
      <section className="text-lg leading-relaxed text-gray-800 space-y-6">
        {/* เกริ่นนำ */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          ปิงปอง หรือ <strong>“เทเบิลเทนนิส”</strong> มีต้นกำเนิดจากประเทศอังกฤษในปลายศตวรรษที่ 19
          และได้รับความนิยมอย่างแพร่หลายทั่วโลก โดยเฉพาะในแถบเอเชีย เช่น 🇨🇳 จีน 🇯🇵 ญี่ปุ่น และ 🇰🇷 เกาหลีใต้
        </motion.p>

        {/* รูปแบบการเล่น */}
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          เล่นบนโต๊ะขนาดมาตรฐาน ผู้เล่นจะตีลูกด้วย “ไม้ปิงปอง” โดยใช้ทักษะ ความเร็ว และการวางแผนในการแข่งขัน
        </motion.p>

        {/* ปัจจุบัน */}
        <motion.div
          className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-semibold mb-1">📌 ปัจจุบัน:</p>
          <p>
            ปิงปองเป็นหนึ่งในกีฬาสากลที่ถูกบรรจุไว้ใน <strong>การแข่งขันโอลิมปิก</strong> และมีการแข่งขันระดับโลกเป็นประจำ
          </p>
        </motion.div>

        {/* อุปกรณ์ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-semibold mb-2">🎒 อุปกรณ์พื้นฐาน:</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>🏓 โต๊ะปิงปอง</li>
            <li>🏓 ไม้ปิงปอง</li>
            <li>🏐 ลูกปิงปอง</li>
            <li>🕸️ ตาข่ายกลางโต๊ะ</li>
          </ul>
        </motion.div>

        {/* ประโยชน์ */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          ไม่ใช่แค่การแข่งขัน ปิงปองยังช่วยเสริมสร้างสุขภาพและความสัมพันธ์ระหว่างผู้เล่นอีกด้วย 🎉
        </motion.p>

        {/* ปุ่มแสดงเนื้อหาเพิ่มเติม */}
                <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
        <div className="text-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            {showMore ? "🔽 ซ่อนเนื้อหา" : "🔼 ดูเพิ่มเติม"}
          </button>
        </div>
</motion.div>
        {/* เนื้อหาที่ถูกซ่อนไว้ */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              className="bg-gray-50 p-4 rounded-xl mt-4 shadow-inner"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p>
                ปิงปองสามารถเริ่มต้นได้ง่าย ไม่ว่าคุณจะอายุเท่าไหร่ก็ตาม เป็นกีฬาที่ช่วยพัฒนาการตัดสินใจ สมาธิ
                และการประสานงานระหว่างมือกับตาอย่างมีประสิทธิภาพ 🎯
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
