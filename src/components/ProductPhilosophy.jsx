import React from 'react';

export default function ProductPhilosophy() {
  return (
    <>
      <section id="philosophy" className="py-28 md:py-36 relative overflow-hidden">
        <div className="glow-blob w-[400px] h-[400px] bg-neon-purple/20 top-0 right-0"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <p className="text-sm uppercase tracking-[.3em] text-neon-cyan/70 mb-4 reveal-up font-space">Product Philosophy</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 reveal-up">What I Believe In</h2>
          <div className="quote-glow reveal-up">
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-300 font-light italic">
              "Tôi tin rằng giá trị của <span className="gradient-text font-semibold not-italic">Product Owner</span> không nằm
              ở việc viết ra thật nhiều tính năng, mà ở khả năng <span className="text-white font-medium">đi qua sự mơ hồ </span>
              để tìm ra đúng <span className="text-neon-cyan font-medium not-italic">vấn đề cốt lõi</span>."
            </p>
            <p className="text-lg md:text-xl mt-6 leading-relaxed text-gray-400 font-light italic">
              "Điểm mạnh của tôi là biến những nhu cầu còn <span className="text-white font-medium not-italic">rời rạc</span>
              thành backlog <span className="text-neon-cyan font-medium not-italic">rõ ràng</span>, những kỳ vọng <span
                className="text-white font-medium not-italic">trừu tượng</span> thành giải pháp <span
                  className="text-white font-medium not-italic">khả thi</span>, và những bài toán <span
                    className="text-white font-medium not-italic">phức tạp</span> thành sản phẩm có thể <span
                      className="gradient-text font-semibold not-italic">triển khai, đo lường và tạo ra tác động thực tế</span>."
            </p>
          </div>
        </div>
      </section>

      <div className="section-line max-w-6xl mx-auto"></div>
    </>
  );
}
