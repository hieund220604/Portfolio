import React from 'react';

export default function CaseStudies() {
  return (
    <>
      <section id="case-studies" className="py-28 md:py-36 relative overflow-hidden">
        <div className="glow-blob w-[500px] h-[500px] bg-neon-cyan/15 -bottom-40 -left-40"></div>
        <div className="glow-blob w-[400px] h-[400px] bg-neon-purple/15 top-20 right-0"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="text-sm uppercase tracking-[.3em] text-neon-cyan/70 mb-4 reveal-up font-space">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 reveal-up">Case Studies</h2>

          <div className="grid gap-10">

            {/* ===== CASE STUDY 1 — ITS ===== */}
            <div className="reveal-up shimmer-border rounded-2xl" data-tilt>
              <div className="card-inner glass rounded-2xl overflow-hidden relative">
                <div
                  className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-neon-cyan/10 to-transparent rounded-bl-full pointer-events-none">
                </div>

                {/* Image strip */}
                <div className="relative h-52 md:h-64 overflow-hidden">
                  <img src="images/Elcom_Background.png" alt="ITS System"
                    className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className="text-xs font-bold uppercase tracking-widest text-neon-cyan bg-neon-cyan/15 px-3 py-1 rounded-full backdrop-blur-sm">Enterprise</span>
                      <span
                        className="text-xs font-bold uppercase tracking-widest text-white/60 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">🚦
                        Smart City</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-space">Hệ thống ITS — Giao thông Thông minh
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  {/* Meta row */}
                  <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5 text-neon-cyan/60" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      <span>Tháng 11/2025 — Hiện tại</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5 text-neon-cyan/60" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                      </svg>
                      <span>Team size: 8</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5 text-neon-cyan/60" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4l3 3" />
                      </svg>
                      <span>13 Sprints · 90% đúng hạn</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5 text-neon-cyan/60" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      </svg>
                      <span>Elcom Corp</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-8 leading-relaxed">Phụ trách phân tích, định hình và quản lý sản phẩm cho hệ
                    thống Giao thông thông minh (ITS) triển khai tại nhiều tỉnh thành trên toàn quốc — một trong những giải
                    pháp Smart City trọng điểm của Elcom Corp.</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">

                    {/* S — Situation */}
                    <div className="cs-block">
                      <p className="cs-label text-neon-cyan/70">
                        <span className="text-neon-cyan font-black">S</span>ituation
                      </p>
                      <p className="cs-text">Xuất phát từ thực trạng <strong>ùn tắc giao thông nghiêm trọng</strong> tại Hà Nội, thể hiện qua thời gian chậm trễ lớn trong giờ cao điểm, số lượng điểm ùn tắc cao và tổn thất kinh tế đáng kể, nhóm dự án đã triển khai nghiên cứu trong <strong>6 tháng</strong> để tìm kiếm một giải pháp điều phối giao thông hiệu quả hơn. Trong bối cảnh đó, team phát triển hệ thống điều khiển đèn tín hiệu giao thông thông minh kết hợp <strong>AI và IoT</strong>, với mục tiêu nâng cao khả năng thích ứng, <strong>tối ưu vận hành</strong> và đáp ứng tốt hơn nhu cầu triển khai thực tế tại Việt Nam.</p>
                    </div>

                    {/* T — Task */}
                    <div className="cs-block">
                      <p className="cs-label text-neon-purple/80">
                        <span className="text-neon-purple font-black">T</span>ask
                      </p>
                      <p className="cs-text">Phụ trách <strong>benchmark thị trường</strong>, <strong>phân tích đối sánh</strong> giải pháp, thu thập và <strong>chuẩn hóa yêu cầu</strong> để hỗ trợ định hình sản phẩm, xây dựng backlog ban đầu, <strong>tài liệu hóa yêu cầu</strong>.</p>
                    </div>

                    {/* A — Action */}
                    <div className="cs-block">
                      <p className="cs-label text-neon-pink/80">
                        <span className="text-neon-pink font-black">A</span>ction
                      </p>
                      <ul className="cs-list">
                        <li>Thực hiện <strong>benchmark và phân tích đối sánh 20 nhà cung cấp quốc tế</strong> trong lĩnh vực ITS ứng dụng <strong>AI/IoT</strong>, từ đó tổng hợp insight cạnh tranh và xác định <strong>5 nhóm chức năng ưu tiên</strong> cho đề xuất giải pháp phù hợp với bối cảnh Việt Nam.</li>
                        <li>Thu thập, làm rõ và chuẩn hóa yêu cầu, phân rã phạm vi giải pháp thành <strong>5 epics</strong> và <strong>18 user stories</strong>, giúp đội ngũ có cơ sở rõ ràng để lập kế hoạch phát triển.</li>
                        <li>Phối hợp chặt chẽ với stakeholder và đội kỹ thuật trong team <strong>8 thành viên</strong> để làm rõ nhu cầu, phạm vi và tính khả thi của giải pháp, hạn chế chênh lệch kỳ vọng giữa các bên.</li>
                        <li>Hỗ trợ quản lý và cập nhật backlog, theo dõi tiến độ triển khai qua <strong>13 sprint</strong>, đồng thời tham gia xây dựng tài liệu phân tích và đề xuất giải pháp phục vụ hoạt động <strong>pre-sales/đấu thầu</strong>.</li>
                      </ul>
                    </div>

                    {/* R — Result */}
                    <div className="cs-block">
                      <p className="cs-label text-white/50">
                        <span className="text-white font-black">R</span>esult
                      </p>
                      <ul className="cs-list">
                        <li><strong>Hiệu quả điều phối:</strong> Giảm thời gian chờ trung bình từ <strong>5% - 11%</strong> tùy kịch bản lưu lượng, tối ưu chu kỳ đèn linh hoạt hơn so với điều khiển truyền thống.</li>
                        <li><strong>Giảm ùn tắc tại nút giao:</strong> Ghi nhận mức giảm hàng chờ phương tiện từ <strong>8% - 18%</strong> trong các kịch bản thử nghiệm, hạn chế ứ đọng kéo dài.</li>
                        <li><strong>Xử lý phân tích AI:</strong> Mô hình nhận diện và đếm phương tiện duy trì độ chính xác lên đến <strong>95%</strong> trong điều kiện thời tiết thực tế.</li>
                        <li><strong>Hiệu năng gần thời gian thực (Real-time):</strong> Hệ thống xử lý thông suốt với độ trễ chuyển tiếp <strong>dưới 5 giây</strong>.</li>
                      </ul>
                    </div>

                  </div>

                  {/* Role badge */}
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-cyan/[0.07] border border-neon-cyan/20 text-neon-cyan text-xs font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Product Development
                  </div>
                </div>
              </div>
            </div>

            {/* ===== CASE STUDY 2 — TriPlayZ ===== */}
            <div className="reveal-up shimmer-border rounded-2xl" data-tilt>
              <div className="card-inner glass rounded-2xl overflow-hidden relative">
                <div
                  className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-neon-purple/10 to-transparent rounded-bl-full pointer-events-none">
                </div>

                {/* Image strip */}
                <div className="relative h-52 md:h-64 overflow-hidden">
                  <img src="images/TriPlayZ_Background.png" alt="TriPlayZ Platform"
                    className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className="text-xs font-bold uppercase tracking-widest text-neon-purple bg-neon-purple/15 px-3 py-1 rounded-full backdrop-blur-sm">B2B
                        SaaS</span>
                      <span
                        className="text-xs font-bold uppercase tracking-widest text-white/60 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">💻
                        Gamification</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-space">TriPlayZ — Gamification B2B Platform
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  {/* Meta row */}
                  <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5 text-neon-purple/60" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      <span>Tháng 3 — Tháng 8/2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5 text-neon-purple/60" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      <span>TriPlayZ</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5 text-neon-purple/60" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span>50+ Wireframes · 70% bugs caught pre-release</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-8 leading-relaxed">Đảm nhận vai trò Product Intern cho các dự án Gamification
                    B2B, là cầu nối giúp development team và khách hàng đồng thuận về yêu cầu sản phẩm, giảm thiểu rủi ro
                    phát sinh trong quá trình phát triển.</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">

                    {/* S — Situation */}
                    <div className="cs-block">
                      <p className="cs-label text-neon-cyan/70">
                        <span className="text-neon-cyan font-black">S</span>ituation
                      </p>
                      <p className="cs-text">TriPlayZ triển khai đồng thời <strong>nhiều dự án Gamification</strong> cho khách hàng doanh nghiệp, đòi hỏi quá trình làm rõ yêu cầu, <strong>trực quan hóa giải pháp</strong> và kiểm thử phải diễn ra nhanh, chính xác và đồng bộ để <strong>tránh phát sinh lỗi</strong> trước release.</p>
                    </div>

                    {/* T — Task */}
                    <div className="cs-block">
                      <p className="cs-label text-neon-purple/80">
                        <span className="text-neon-purple font-black">T</span>ask
                      </p>
                      <p className="cs-text">Tham gia hỗ trợ phát triển sản phẩm cho nhiều dự án, tập trung vào <strong>khai thác yêu cầu</strong>, <strong>thiết kế wireframe/mockup</strong>, <strong>chuẩn hóa test scenario</strong> và phối hợp <strong>UAT</strong> nhằm nâng cao chất lượng bàn giao cũng như tối ưu quy trình nội bộ.</p>
                    </div>

                    {/* A — Action */}
                    <div className="cs-block">
                      <p className="cs-label text-neon-pink/80">
                        <span className="text-neon-pink font-black">A</span>ction
                      </p>
                      <ul className="cs-list">
                        <li>Tham gia phát triển <strong>8 dự án Gamification</strong> cho khách hàng doanh nghiệp, trong đó có các dự án tiêu biểu như Chào Bạn Vui Mới, Quà Vui Tới; GSM – Thăng Hạng Vô Lăng; Gom Vị Tết, Mở Lộc Joy.</li>
                        <li>Trực tiếp thực hiện <strong>phỏng vấn và khảo sát người dùng/stakeholder</strong> để làm rõ nhu cầu, scope và luồng chức năng cho từng dự án.</li>
                        <li>Thiết kế <strong>50+ wireframe/mockup</strong> nhằm trực quan hóa yêu cầu, đồng bộ kỳ vọng giữa khách hàng và đội kỹ thuật, đồng thời hỗ trợ <strong>xác nhận flow sớm</strong> trước giai đoạn phát triển.</li>
                        <li>Chuẩn hóa kịch bản test, phối hợp UAT với các bên liên quan và tham gia hoạt động <strong>R&D</strong> nhằm cải thiện quy trình tài liệu và kiểm thử nội bộ cho team quy mô <strong>5–15 thành viên</strong>.</li>
                      </ul>
                    </div>

                    {/* R — Result */}
                    <div className="cs-block">
                      <p className="cs-label text-white/50">
                        <span className="text-white font-black">R</span>esult
                      </p>
                      <ul className="cs-list">
                        <li>Góp phần giúp yêu cầu và flow sản phẩm được <strong>xác nhận sớm hơn</strong>, giảm rủi ro hiểu sai trong quá trình phát triển.</li>
                        <li>Hỗ trợ phát hiện khoảng <strong>70% lỗi trước release</strong> và giảm khoảng <strong>10% issue phát sinh sau UAT</strong>.</li>
                        <li>Nâng cao tính <strong>nhất quán trong tài liệu</strong> và kiểm thử nội bộ thông qua các đóng góp <strong>R&D</strong> cho team.</li>
                        <li>Đóng góp vào việc triển khai nhiều dự án Gamification với quy trình phối hợp <strong>rõ ràng hơn</strong> giữa khách hàng, sản phẩm và kỹ thuật.</li>
                      </ul>
                    </div>

                  </div>

                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/[0.07] border border-neon-purple/20 text-neon-purple text-xs font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Product Intern
                  </div>
                </div>
              </div>
            </div>

            {/* ===== CASE STUDY 3 — Unitree ===== */}
            <div className="reveal-up shimmer-border rounded-2xl" data-tilt>
              <div className="card-inner glass rounded-2xl overflow-hidden relative">
                <div
                  className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-neon-pink/10 to-transparent rounded-bl-full pointer-events-none">
                </div>

                {/* Image strip — gradient placeholder (no dedicated photo yet) */}
                <div className="relative h-52 md:h-64 overflow-hidden">
                  <img src="images/UNITREE_Background.png" alt="Unitree Project"
                    className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className="text-xs font-bold uppercase tracking-widest text-neon-pink bg-neon-pink/15 px-3 py-1 rounded-full backdrop-blur-sm">Non-profit</span>
                      <span
                        className="text-xs font-bold uppercase tracking-widest text-white/60 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">🌱
                        Green Tech</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-space">Unitree — Ứng dụng Bảo vệ Môi trường
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  {/* Meta row */}
                  <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5 text-neon-pink/60" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      <span>Tháng 5 — Tháng 7/2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5 text-neon-pink/60" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                      </svg>
                      <span>Team size: 10</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5 text-neon-pink/60" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4l3 3" />
                      </svg>
                      <span>3 tháng · Bàn giao đúng hạn</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <svg className="w-3.5 h-3.5 text-neon-pink/60" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      </svg>
                      <span>Greenwich Việt Nam — Hà Nội</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-8 leading-relaxed">Dự án phi lợi nhuận phát triển ứng dụng nâng cao nhận thức
                    về bảo vệ môi trường và xử lý rác thải tại Greenwich Việt Nam — cơ sở Hà Nội. Đảm nhận toàn bộ vai trò
                    Product Owner từ khởi động đến bàn giao.</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">

                    {/* S — Situation */}
                    <div className="cs-block">
                      <p className="cs-label text-neon-cyan/70">
                        <span className="text-neon-cyan font-black">S</span>ituation
                      </p>
                      <p className="cs-text">UniTree là <strong>dự án phi lợi nhuận</strong> được phát triển nhằm nâng cao nhận thức về <strong>bảo vệ môi trường</strong> và xử lý rác thải tại Greenwich Việt Nam – cơ sở Hà Nội. Dự án cần nhanh chóng <strong>thống nhất yêu cầu</strong> giữa nhiều stakeholder và chuyển hóa ý tưởng thành giải pháp khả thi trong <strong>thời gian giới hạn</strong>.</p>
                    </div>

                    {/* T — Task */}
                    <div className="cs-block">
                      <p className="cs-label text-neon-purple/80">
                        <span className="text-neon-purple font-black">T</span>ask
                      </p>
                      <p className="cs-text">Trong vai trò <strong>Product Owner</strong>, tôi chịu trách nhiệm <strong>điều phối workshop</strong> với stakeholder, chuẩn hóa yêu cầu người dùng, <strong>trực quan hóa giải pháp</strong> bằng wireframe/prototype và <strong>theo dõi tiến độ</strong> triển khai để đảm bảo dự án bám sát mục tiêu đã đề ra.</p>
                    </div>

                    {/* A — Action */}
                    <div className="cs-block">
                      <p className="cs-label text-neon-pink/80">
                        <span className="text-neon-pink font-black">A</span>ction
                      </p>
                      <ul className="cs-list">
                        <li><strong>Điều phối các buổi workshop</strong> với stakeholder để khai thác, làm rõ và thống nhất yêu cầu nghiệp vụ cho dự án.</li>
                        <li><strong>Chuẩn hóa và tài liệu hóa</strong> yêu cầu người dùng thành các hạng mục chức năng phục vụ thiết kế và phát triển, giúp đội dự án có định hướng triển khai rõ ràng.</li>
                        <li>Thiết kế <strong>wireframe và prototype</strong> để trực quan hóa giải pháp, hỗ trợ stakeholder <strong>xác thực định hướng sản phẩm từ sớm</strong> và giảm rủi ro hiểu sai yêu cầu.</li>
                        <li>Theo dõi tiến độ, phối hợp nguồn lực và hỗ trợ team trong suốt <strong>3 tháng triển khai</strong> để đảm bảo dự án vận hành đúng kế hoạch.</li>
                      </ul>
                    </div>

                    {/* R — Result */}
                    <div className="cs-block">
                      <p className="cs-label text-white/50">
                        <span className="text-white font-black">R</span>esult
                      </p>
                      <ul className="cs-list">
                        <li>Sản phẩm triển khai trên cả <strong>App Store</strong> và <strong>Google Play</strong>.</li>
                        <li>Ghi nhận <strong>100+ lượt tải</strong> và sử dụng ứng dụng, góp phần thúc đẩy sự tham gia của cộng đồng vào các hoạt động môi trường thông qua nền tảng công nghệ.</li>
                        <li>Dự án được công nhận là <strong>Top 20 điểm sáng nổi bật</strong> tại Greenwich Việt Nam 2025.</li>
                        <li>Trở thành <strong>dự án tiên phong</strong> trong việc ứng dụng công nghệ vào hoạt động bảo vệ môi trường tại Greenwich Việt Nam - cơ sở Hà Nội.</li>
                      </ul>
                    </div>

                  </div>

                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-pink/[0.07] border border-neon-pink/20 text-neon-pink text-xs font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Product Owner
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
