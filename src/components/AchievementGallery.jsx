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
                      <span className="slide-tag"> Public Speaking</span>
                      <h4 className="slide-title">Diễn giả tại TEDx Greenwich University Hà Nội</h4>
                      <p className="slide-desc">TEDx Greenwich University Hanoi là sự kiện diễn thuyết theo tinh thần TEDx, nơi các ý tưởng và câu chuyện truyền cảm hứng được lan tỏa tới cộng đồng sinh viên và người trẻ. Tại sự kiện, Đức Hiếu đảm nhiệm vai trò diễn giả, chia sẻ về hành trình và công thức tìm kiếm đam mê, với mong muốn giúp các bạn trẻ hiểu bản thân rõ hơn và tự tin theo đuổi con đường của mình.
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
                      <span className="slide-tag">Achievement</span>
                      <h4 className="slide-title">Sinh viên có hoạt động xuất sắc nhất năm 2025</h4>
                      <p className="slide-desc">Greenwich Club Awards 2025: Kỳ Mã Khai Phóng là lễ trao giải vinh danh những cá nhân, sự kiện và tập thể có dấu ấn nổi bật trong hoạt động ngoại khóa của sinh viên Greenwich Việt Nam – cơ sở Hà Nội. Sự kiện đề cao tinh thần đổi mới, sáng tạo và khả năng tạo tác động thực tiễn trong cộng đồng sinh viên. Tại đây, Đức Hiếu được vinh danh với giải thưởng “Sinh viên có hoạt động xuất sắc nhất năm 2025”, ghi nhận những nỗ lực nổi bật trong học tập và hoạt động phong trào.</p>
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
                      <span className="slide-tag">Leadership</span>
                      <h4 className="slide-title">Phó Chủ tịch Hội đồng Sinh viên Greenwich Việt Nam — Hà Nội</h4>
                      <p className="slide-desc">Hội đồng Sinh viên Greenwich Việt Nam – cơ sở Hà Nội (GSAC) là đơn vị đại diện chính thức cho hình ảnh và tiếng nói của cộng đồng sinh viên trong trường, đồng thời đóng vai trò kết nối và thúc đẩy các hoạt động sinh viên. Tại đây, Đức Hiếu đảm nhiệm vai trò Phó Chủ tịch, tham gia định hướng hoạt động, phối hợp tổ chức các chương trình và đóng góp vào việc xây dựng một cộng đồng sinh viên năng động, gắn kết và giàu tinh thần phát triển.</p>
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
                      <span className="slide-tag">Event Management</span>
                      <h4 className="slide-title">Trưởng Ban tổ chức — Greenwich Club Fair 2025</h4>
                      <p className="slide-desc">Greenwich Club Fair 2025 là ngày hội câu lạc bộ thường niên do Bộ phận PDP và Hội đồng Sinh viên Greenwich Việt Nam – cơ sở Hà Nội phối hợp tổ chức, nhằm kết nối các câu lạc bộ với sinh viên và lan tỏa bản sắc riêng của từng tổ chức. Sự kiện góp phần xây dựng một cộng đồng sinh viên năng động, sáng tạo và đa dạng. Trong chương trình, Đức Hiếu đảm nhiệm vai trò Trưởng Ban Tổ chức, phụ trách điều phối tổng thể và triển khai các hoạt động chính của sự kiện.</p>
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
                      <span className="slide-tag">Community</span>
                      <h4 className="slide-title">Phó Ban tổ chức — Chuỗi sự kiện chào Tân Sinh viê Greenwich Journey Day 7</h4>
                      <p className="slide-desc">Greenwich Journey Day là chuỗi sự kiện chào đón Tân sinh viên lớn nhất tại Greenwich Việt Nam – cơ sở Hà Nội, do Ban Công tác Sinh viên và Hệ thống Câu lạc bộ phối hợp tổ chức. Sự kiện đóng vai trò kết nối sinh viên mới với môi trường đại học năng động, đồng thời lan tỏa tinh thần cộng đồng và bản sắc sinh viên Greenwich. Trong chương trình, Đức Hiếu đảm nhiệm vai trò Phó Ban Tổ chức, tham gia điều phối hoạt động và hỗ trợ triển khai các hạng mục chính của sự kiện..</p>
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
                      <span className="slide-tag">Creative</span>
                      <h4 className="slide-title">Biên tập viên Xuất sắc & Sáng tạo nhất — FILM Organization 2023</h4>
                      <p className="slide-desc">FILM Organization là dự án làm phim thường niên quy tụ cộng đồng sinh viên trên khắp địa bàn Hà Nội, tập trung vào việc sản xuất các sản phẩm điện ảnh ngắn với sự tham gia của nhiều vị trí như diễn viên, biên tập viên và quay phim. Dự án tạo môi trường thực hành sáng tạo, giúp người tham gia phát triển kỹ năng kể chuyện, làm việc nhóm và tư duy nghệ thuật trong lĩnh vực truyền thông – điện ảnh. Tại dự án, Đức Hiếu được vinh danh với danh hiệu “Biên tập viên Xuất sắc nhất” và “Biên tập viên Sáng tạo nhất”, ghi nhận những đóng góp nổi bật trong quá trình phát triển nội dung và hoàn thiện sản phẩm.</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-line max-w-6xl mx-auto"></div>
    </>
  );
}
