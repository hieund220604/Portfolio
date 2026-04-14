import React from 'react';

export default function AchievementGallery() {
  return (
    <>
      <section id="gallery" className="py-28 md:py-36 relative overflow-hidden">
        <div className="glow-blob w-[400px] h-[400px] bg-neon-cyan/15 bottom-0 right-0"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="text-sm uppercase tracking-[.3em] text-neon-cyan/70 mb-4 reveal-up font-space">Highlights</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 reveal-up">Achievement Gallery</h2>
          <p className="text-gray-500 text-sm mb-12 reveal-up">Những khoảnh khắc đáng nhớ trong hành trình của tôi.</p>

          <div className="reveal-up">
            <div className="swiper achievement-swiper">
              <div className="swiper-wrapper py-6">

                {/* ====== SLIDE 1 — TEDx Speaker ====== */}
                <div className="swiper-slide px-4">
                  <div className="glass-panel w-full sm:w-[306px] mx-auto flex flex-col overflow-hidden">
                    <div className="relative aspect-[9/16] w-full">
                      <img src="images/TEDx Speaker - TEDx Greenwich Hà Nội.JPG" alt="TEDx Speaker"
                        className="absolute inset-0 w-full h-full object-cover object-top block" loading="lazy" />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent pointer-events-none">
                      </div>
                    </div>
                    <div className="slide-caption z-10 -mt-16">
                      <span className="slide-tag">🎤 Public Speaking</span>
                      <h4 className="slide-title">Diễn giả TEDx Greenwich Hà Nội</h4>
                      <p className="slide-desc">Chia sẻ về hành trình và công thức tìm kiếm đam mê cho các bạn trẻ.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ====== SLIDE 2 — Sinh viên xuất sắc ====== */}
                <div className="swiper-slide px-4">
                  <div className="glass-panel w-full sm:w-[306px] mx-auto flex flex-col overflow-hidden">
                    <div className="relative aspect-[9/16] w-full">
                      <img src="images/Sinh viên có hoạt động xuất sắc nhất năm 2025.JPG" alt="Sinh viên xuất sắc"
                        className="absolute inset-0 w-full h-full object-cover object-top block" loading="lazy" />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent pointer-events-none">
                      </div>
                    </div>
                    <div className="slide-caption z-10 -mt-16">
                      <span className="slide-tag">🏆 Achievement</span>
                      <h4 className="slide-title">Sinh viên có hoạt động xuất sắc nhất năm 2025</h4>
                      <p className="slide-desc">Giải thưởng ghi nhận đóng góp nổi bật trong các hoạt động học thuật và cộng
                        đồng.</p>
                    </div>
                  </div>
                </div>

                {/* ====== SLIDE 3 — Phó Chủ tịch HĐ Sinh viên ====== */}
                <div className="swiper-slide px-4">
                  <div className="glass-panel w-full sm:w-[306px] mx-auto flex flex-col overflow-hidden">
                    <div className="relative aspect-[9/16] w-full">
                      <img src="images/Phó Chủ tịch - Hội đồng sinh viên Greenwich Việt Nam - cơ sở Hà Nội.jpg"
                        alt="Phó Chủ tịch HĐ Sinh viên" className="absolute inset-0 w-full h-full object-cover object-top block"
                        loading="lazy" />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent pointer-events-none">
                      </div>
                    </div>
                    <div className="slide-caption z-10 -mt-16">
                      <span className="slide-tag">🎓 Leadership</span>
                      <h4 className="slide-title">Phó Chủ tịch Hội đồng Sinh viên Greenwich Việt Nam — Hà Nội</h4>
                      <p className="slide-desc">Dẫn dắt và điều phối các hoạt động cộng đồng sinh viên, tổ chức chuỗi sự kiện
                        công nghệ.</p>
                    </div>
                  </div>
                </div>

                {/* ====== SLIDE 4 — Trưởng BTC Club Fair ====== */}
                <div className="swiper-slide px-4">
                  <div className="glass-panel w-full sm:w-[306px] mx-auto flex flex-col overflow-hidden">
                    <div className="relative aspect-[9/16] w-full">
                      <img src="images/Trưởng Ban tổ chức - Ngày Hội Câu lạc bộ Greenwich Club Fair 2025.png"
                        alt="Trưởng BTC Club Fair" className="absolute inset-0 w-full h-full object-cover object-top block"
                        loading="lazy" />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent pointer-events-none">
                      </div>
                    </div>
                    <div className="slide-caption z-10 -mt-16">
                      <span className="slide-tag">🗂️ Event Management</span>
                      <h4 className="slide-title">Trưởng Ban tổ chức — Greenwich Club Fair 2025</h4>
                      <p className="slide-desc">Tổ chức và điều phối ngày hội câu lạc bộ thường niên, kết nối sinh viên với cộng
                        đồng.</p>
                    </div>
                  </div>
                </div>

                {/* ====== SLIDE 5 — Phó BTC Tân Sinh viên ====== */}
                <div className="swiper-slide px-4">
                  <div className="glass-panel w-full sm:w-[306px] mx-auto flex flex-col overflow-hidden">
                    <div className="relative aspect-[9/16] w-full">
                      <img
                        src="images/Phó Ban tổ chức - Chuỗi sự kiện chào Tân Sinh viên Greenwich Việt Nam - cơ sở Hà Nội.jpg"
                        alt="Phó BTC Tân sinh viên" className="absolute inset-0 w-full h-full object-cover object-top block"
                        loading="lazy" />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent pointer-events-none">
                      </div>
                    </div>
                    <div className="slide-caption z-10 -mt-16">
                      <span className="slide-tag">🎉 Community</span>
                      <h4 className="slide-title">Phó Ban tổ chức — Chuỗi sự kiện chào Tân Sinh viên</h4>
                      <p className="slide-desc">Đồng tổ chức chuỗi sự kiện định hướng cho sinh viên năm nhất tại Greenwich Hà
                        Nội.</p>
                    </div>
                  </div>
                </div>

                {/* ====== SLIDE 6 — Biên tập viên xuất sắc ====== */}
                <div className="swiper-slide px-4">
                  <div className="glass-panel w-full sm:w-[306px] mx-auto flex flex-col overflow-hidden">
                    <div className="relative aspect-[9/16] w-full">
                      <img
                        src="images/Biên tập viên Xuất sắc nhất và Biên tập viên Sáng tạo nhất - Lễ Trao giải FILM Organization 2023.jpg"
                        alt="Biên tập viên xuất sắc" className="absolute inset-0 w-full h-full object-cover object-top block"
                        loading="lazy" />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent pointer-events-none">
                      </div>
                    </div>
                    <div className="slide-caption z-10 -mt-16">
                      <span className="slide-tag">🎬 Creative</span>
                      <h4 className="slide-title">Biên tập viên Xuất sắc & Sáng tạo nhất — FILM Organization 2023</h4>
                      <p className="slide-desc">Giải thưởng kép ghi nhận tài năng biên tập và khả năng sáng tạo nội dung xuất
                        sắc.</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-line max-w-6xl mx-auto"></div>
    </>
  );
}
